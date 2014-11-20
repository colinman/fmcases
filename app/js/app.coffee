app = angular.module 'fmCases', ['onsen']
app.controller 'AppCtrl', ['$scope', ($scope) ->

  #set title
  $scope.pageTitle = 'Page'

  #set data
  $scope.data = [
    {text: "item 1", modifier: "tappable"}
    {text: "item 2", modifier: "tappable"}
    {text: "item 3", modifier: "tappable"}
    {text: "item 4", modifier: "tappable"}
    {text: "item 5", modifier: "tappable"}
    {text: "item 6", modifier: "tappable"}
    {text: "item 7", modifier: "tappable"}
    {text: "item 8", modifier: "tappable"}
    {text: "item 9", modifier: "tappable"}
  ]
]
