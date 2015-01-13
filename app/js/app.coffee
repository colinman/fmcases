#split into functionality and not modules since still a small application - will need to add more functional modules as application grows
app = angular.module 'fmCases', ['onsen', 'services', 'ngHammer']

#main controller
app.controller 'RootCtrl', ['$scope', '$localStorage', '_', 'pageTypes', 'recents', 'data', 'utilFunctions', '$http', '$sce', ($scope, $localStorage, _, pageTypes, recents, data, utilFunctions, $http, $sce) ->

  $scope.itemTapped = (item) ->
    if item.pageType() is 'expand' then item.showExpandable = !item.showExpandable
    else $scope.pushPage item

  #push page for nav or content items (retrieves data first)
  $scope.pushPage = (item) ->
    #push corresponding page
    await item.loadData defer(), $http, $sce #FIX UGLY DEPENDENCIES LATER
    recents.add item
    navi.pushPage pageTypes[item.pageType()], item

  utilFunctions.addMenuFuncs $scope
  $scope.pushRoot = -> $scope.pushPage data.rootDataItem()
  $scope.recents = -> recents.getRecents()
  $scope.pageOpt = -> navi.getCurrentPage().options
]
