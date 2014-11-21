app = angular.module 'fmCases', ['onsen']

app.controller 'AppCtrl', ['$scope', '$http', ($scope, $http) ->

  #mapping of pagetype to pages
  pageMap =
    'nav': 'views/navigation.html'
    'content': 'views/content.html'

  #mapping of pagetype to web service urls
  serviceMap =
    'nav': '/navigation/'
    'content': '/content/'

  #get item data
  getData = (item, cb) -> #include caching in the future
    await $http.get(serviceMap[item.pageType] + "#{item.id}").success defer data
    cb data

  #allow for easy access to page options
  $scope.pageOpt = -> navi.getCurrentPage().options

  #push page
  $scope.pushPage = (item) ->

    #push corresponding page
    await getData item, defer data
    navi.pushPage pageMap[item.pageType], data

  #allow for pushing root page without any items
  $scope.pushRoot = ->
    $scope.pushPage {id: 1, pageType: 'nav'}
]
