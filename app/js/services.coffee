underscore = angular.module 'underscore', []
underscore.factory '_', -> window._

#############################################################################
#####################----SERVICES MODULE----#################################
#############################################################################
services = angular.module 'services', ['ngStorage', 'underscore']

#####################----GLOBALS----#################################
#mapping of pagetype to pages
services.value 'pageTypes', {
  'landing': 'index.html'
  'nav': 'navigation.html'
  'content': 'content.html'
  'favorites' : 'favorites.html'
  'recents' : 'recents.html'
  'search' : 'search.html'
}

#####################----DATA----#################################
class dataItem #not very many shared properties as of now

class contentItem
  constructor: (@id, @title) -> @pageType = 'content'
  loadData: (cb, $http, $sce) -> #there's not really a better way to deal with this ugly dependency
    if @content then return cb()
    await $http.get("/item/#{@id}").success defer data
    @content = $sce.trustAsHtml data.content
    cb()
  
class detailItem extends contentItem
  constructor: (@id, @title, @detailContent, $sce) ->
    @pageType = 'content'
    if @detailContent? then @detailContent = $sce.trustAsHtml @detailContent.toString()
    
class expandItem extends dataItem
  constructor: (@id, @title, @expandableContent, $sce) ->
    @pageType = 'expand'
    if @expandableContent? then @expandableContent = $sce.trustAsHtml @expandableContent.toString()
  showExpandable: false

class menuItem extends dataItem
  constructor: (@id, @title) -> @pageType = 'nav'
  loadData: (cb, $http, $sce) -> #there's not really a better way to deal with this ugly dependency
    if @items then return cb()
    await $http.get("/item/#{@id}").success defer data
    @items = _.map data.items, (elem) -> #element either links to page, content, or is expandable
      if elem.pageType is 'expand' then return new expandItem elem.id, elem.title, elem.expandableContent, $sce
      else if elem.pageType is 'content'
        return new contentItem elem.id, elem.title
      else if elem.pageType is 'nav' then return new menuItem elem.id, elem.title
    cb()

services.factory 'data', ['$http', '$sce', ($http, $sce) ->
  new class data
    #return root data item
    rootDataItem: -> new menuItem 1, "Home"
]

#####################----LOCAL STORAGE----#################################

objectify = (items, $sce) ->
  _.map items, (elem) -> #element either links to page, content, or is expandable
    if elem.pageType is 'expand' then return new expandItem elem.id, elem.title, elem.expandableContent, $sce
    else if elem.pageType is 'content' then return new contentItem elem.id, elem.title
    else if elem.pageType is 'nav' then return new menuItem elem.id, elem.title

#recents factory (using factory instead of service since coffeescript includes oop syntax anyway)
services.factory 'recents', ['$localStorage', 'data', '$sce', ($localStorage, data, $sce) ->
  new class recents
    constructor: ->
      if !$localStorage.recents then $localStorage.recents = []
      @_recents = null
    add: (item) ->
      if item.id is data.rootDataItem().id then return
      $localStorage.recents = _.reject $localStorage.recents, (i) -> i.id is item.id #remove old entry
      $localStorage.recents.unshift item
      @_recents = objectify $localStorage.recents, $sce
    getRecents: ->
      if @_recents then return @_recents
      return @_recents = objectify $localStorage.recents, $sce
    clear: ->
      $localStorage.recents = []
      @_recents = null
]

#favorites factory
services.factory 'favorites', ['$localStorage', 'data', '$sce', ($localStorage, data, $sce) ->
  new class favorites
    constructor: ->
      if !$localStorage.favorites then $localStorage.favorites = []
      @_favorites = null
    add: (item) ->
      if item.id is data.rootDataItem().id then return
      $localStorage.favorites = _.reject $localStorage.favorites, (i) -> i.id is item.id #remove old entry
      $localStorage.favorites.push item
      @_favorites = objectify $localStorage.favorites, $sce
    remove: (item) ->
      if item.id is data.rootDataItem().id then return
      $localStorage.favorites = _.reject $localStorage.favorites, (i) -> i.id is item.id #remove old entry
      @_favorites = objectify $localStorage.favorites, $sce
    exists: (item) ->
      if _.find(@getFavorites(), (fav) -> fav.id is item.id)? then return true
      false
    getFavorites: ->
      if @_favorites then return @_favorites
      return @_favorites = objectify $localStorage.favorites, $sce
    clear: ->
      $localStorage.favorites = []
      @_favorites = null
]

#####################----UTILITIES----#################################
services.factory 'utilFunctions', ['pageTypes', 'recents', '$timeout', (pageTypes, recents, $timeout) ->
  new class utilFunctions
    #push recents page if not active already (with no data since recents is calculated)
    addMenuFuncs: ($scope) ->
      $scope.pushRecents = ->
        #don't push if page is already recents
        if navi.getCurrentPage().options.pageType is 'recents' then return
        navi.pushPage pageTypes['recents'], {pageType: 'recents', title: 'Recents'}
        #currPages = navi.getPages()
        #newPages = [ currPages[0] , currPages[currPages.length - 1] ]
        #_.each currPages, (page) -> page.destroy()

      $scope.pushFavorites = ->
        #don't push if page is already favorites
        if navi.getCurrentPage().options.pageType is 'favorites' then return
        navi.pushPage pageTypes['favorites'], {pageType: 'favorites', title: 'Favorites'}

      $scope.pushSearch = ->
        #don't push if page is already search
        if navi.getCurrentPage().options.pageType is 'search' then return
        $scope.progressText = null          
        $scope.searchResults = null
        navi.pushPage pageTypes['search'], {pageType: 'search', title: 'Search'}

      $scope.showSearch = ->
        #don't push if page is already search
        if navi.getCurrentPage().options.pageType is 'search' then return
        $scope.searchlink = null # TODO: AWFUL STYLE
        $scope.progressText = null          
        $scope.searchResults = null
        navi.pushPage pageTypes['search'], {pageType: 'search', title: 'Search', animation: 'none'}
                
      $scope.showNotice = (title, message) ->
        $scope.alertTitle = title
        $scope.alertContent = message
        ons.createAlertDialog('alert.html').then (alertDialog) ->
          alertDialog.show()
          $timeout ->
            alertDialog.hide()
          , 500
]
