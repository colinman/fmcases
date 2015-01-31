#split into functionality and not modules since still a small application - will need to add more functional modules as application grows
app = angular.module 'fmCases', ['onsen', 'services', 'ngHammer']

#main controller
app.controller 'RootCtrl', ['$scope', '$localStorage', '_', 'pageTypes', 'recents', 'data', 'utilFunctions', '$http', '$sce', 'favorites', '$timeout', ($scope, $localStorage, _, pageTypes, recents, data, utilFunctions, $http, $sce, favorites, $timeout) ->

  $scope.itemTapped = (item) ->
    if item.pageType is 'expand' then item.showExpandable = !item.showExpandable
    else $scope.pushPage item

  $scope.itemPressed = (item) ->
    if item.pageType is 'expand' then return
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

  ##TODO: ABSTRACT OUT TO MAKE CLEANER AND SHIT
  $scope.searchResults = []
  $scope.progressText = "Please type a search to begin"

  $scope.search = (words) -> #make it a local var later?
    $scope.progressText = "Searching for #{words}"
    $http.get("/search/#{words}").success (data) ->
      data = _.map data, (result) ->
        new contentItem result.id, result.title
      $scope.searchResults = data
      $scope.progressText = if data is [] then "No Results Found for #{words}" else "Results Found for #{words}"


  utilFunctions.addMenuFuncs $scope
  $scope.pushRoot = -> $scope.pushPage data.rootDataItem()
  $scope.pageOpt = -> navi.getCurrentPage().options
  $scope.recents = -> recents.getRecents()
  $scope.favorites = -> favorites.getFavorites()
]
