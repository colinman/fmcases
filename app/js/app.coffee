app = angular.module 'myApp', ['onsen']
app.controller 'AppCtrl', ['$scope', ($scope) ->

  #set title
  $scope.pageTitle = 'Page1'

  #set data
  $scope.data = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9"]

  #onsen config
  await ons.ready defer()
  $scope.navi.on 'postpop', (event) -> console.log event
  $scope.navi.on 'prepush', (event) -> console.log event
]
