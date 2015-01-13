underscore = angular.module 'underscore', []
underscore.factory '_', -> window._

ngHammer = angular.module 'ngHammer', []
ngHammer.directive 'ngTap', ['$parse', ($parse) ->
  compile: ($element, attr) ->
    fn = $parse attr['ngTap']
    return (scope, element, attr) ->
      Hammer(element[0]).on 'tap', (event) ->
        scope.$apply -> fn scope, {$event: event}
]
ngHammer.directive 'ngPress', ['$parse', ($parse) ->
  compile: ($element, attr) ->
    fn = $parse attr['ngPress']
    return (scope, element, attr) ->
      Hammer(element[0]).on 'press', (event) ->
        scope.$apply -> fn scope, {$event: event}
]

#############################################################################
#####################----SERVICES MODULE----#################################
#############################################################################
services = angular.module 'services', ['ngStorage', 'underscore']

#####################----GLOBALS----#################################
#mapping of pagetype to pages
services.value 'pageTypes', {
  'nav': 'views/navigation.html'
  'content': 'views/content.html'
  'favorites' : 'views/favorites.html'
  'recents' : 'views/recents.html'
}

#####################----DATA----#################################
class dataItem #not very many shared properties as of now
  constructor: (@id, @title) ->

class expandItem extends dataItem
  pageType: -> 'expand'
  constructor: (@id, @title, @expandableContent) ->
  showExpandable: false

class contentItem extends dataItem
  pageType: -> 'content'
  loadData: (cb, $http, $sce) -> #there's not really a better way to deal with this ugly dependency
    if @content then return cb()
    await $http.get("/item/#{@id}").success defer data
    @content = $sce.trustAsHtml data.content
    cb()

class menuItem extends dataItem
  pageType: -> 'nav'
  loadData: (cb, $http) -> #there's not really a better way to deal with this ugly dependency
    if @items then return cb()
    await $http.get("/item/#{@id}").success defer data
    @items = _.map data.items, (elem) -> #element either links to page, content, or is expandable
      if elem.pageType is 'expand' then return new expandItem elem.id, elem.title, elem.expandableContent
      else if elem.pageType is 'content' then return new contentItem elem.id, elem.title
      else if elem.pageType is 'nav' then return new menuItem elem.id, elem.title
    cb()

services.factory 'data', ['$http', '$sce', ($http, $sce) ->
  new class data
    #return root data item
    rootDataItem: -> new menuItem 1, "Home"
]

#####################----RECENTS----#################################
#recents factory (using factory instead of service since coffeescript includes oop syntax anyway)
services.factory 'recents', ['$localStorage', 'data', ($localStorage, data) ->
  new class recents
    constructor: -> if !$localStorage.recents then $localStorage.recents = []
    add: (item) ->
      if item.id is data.rootDataItem().id then return
      $localStorage.recents = _.reject $localStorage.recents, (i) -> i.id is item.id #remove old entry
      $localStorage.recents.push item
    getRecents: -> $localStorage.recents
    clear: -> $localStorage = null
]

#####################----UTILITIES----#################################
services.factory 'utilFunctions', ['pageTypes', (pageTypes) ->
  new class utilFunctions
    #push recents page if not active already (with no data since recents is calculated)
    addMenuFuncs: ($scope) ->
      $scope.pushRecents = ->
        #don't push if page is already recents
        if navi.getCurrentPage().options.pageType is 'recents' then return
        navi.pushPage pageTypes['recents'], {pageType: 'recents'}
]
