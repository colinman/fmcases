#split into functionality and not modules since still a small application - will need to add more functional modules as application grows
app = angular.module 'fmCases', ['onsen', 'services', 'ngHammer']

#main controller
app.controller 'RootCtrl', ['$scope', '$localStorage', '_', 'pageTypes', 'recents', 'data', 'utilFunctions', '$http', '$sce', 'favorites', ($scope, $localStorage, _, pageTypes, recents, data, utilFunctions, $http, $sce, favorites) ->

  $scope.itemTapped = (item) ->
    if item.pageType is 'expand' then item.showExpandable = !item.showExpandable
    else $scope.pushPage item

  $scope.itemPressed = (item) ->
    if favorites.exists item
      favorites.remove item
      $scope.showNotice "Favorites Removed", "#{item.title} removed from favorites."
    else
      favorites.add item
      $scope.showNotice "Favorites Added", "#{item.title} added as favorite."

  #push page for nav or content items (retrieves data first)
  $scope.pushPage = (item) ->
    #push corresponding page
    await item.loadData defer(), $http, $sce #FIX UGLY DEPENDENCIES LATER
    navi.pushPage pageTypes[item.pageType], item
    recents.add item

  utilFunctions.addMenuFuncs $scope
  $scope.pushRoot = -> $scope.pushPage data.rootDataItem()
  $scope.pageOpt = -> navi.getCurrentPage().options
  $scope.recents = -> recents.getRecents()
  $scope.favorites = -> favorites.getFavorites()
]
