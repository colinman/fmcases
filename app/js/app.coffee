app = angular.module 'fmCases', ['onsen']
app.controller 'AppCtrl', ['$scope', ($scope) ->

  #############
  getTitle = (id)->
    'title' + id

  getItems = (navid)->
    [
      {text: "item 1", navid:1}
      {text: "item 2", navid:2}
      {text: "item 3", navid:3}
      {text: "item 4", navid:4}
      {text: "item 5", navid:5}
      {text: "item 6", navid:6}
      {text: "item 7", navid:7}
      {text: "item 8", navid:8}
      {text: "item 9", navid:9}
    ]
  #############

  #allow for easy access to page options
  $scope.pageOpt = -> navi.getCurrentPage().options

  #push page
  $scope.pushPage = (navid) ->

    options =
      title: getTitle(navid)
      items: getItems(navid)

    navi.pushPage 'views/navigation.html', options
]
