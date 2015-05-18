// Generated by IcedCoffeeScript 1.8.0-d
var contentItem, dataItem, detailItem, expandItem, iced, menuItem, objectify, services, underscore, __iced_k, __iced_k_noop,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

iced = {
  Deferrals: (function() {
    function _Class(_arg) {
      this.continuation = _arg;
      this.count = 1;
      this.ret = null;
    }

    _Class.prototype._fulfill = function() {
      if (!--this.count) {
        return this.continuation(this.ret);
      }
    };

    _Class.prototype.defer = function(defer_params) {
      ++this.count;
      return (function(_this) {
        return function() {
          var inner_params, _ref;
          inner_params = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (defer_params != null) {
            if ((_ref = defer_params.assign_fn) != null) {
              _ref.apply(null, inner_params);
            }
          }
          return _this._fulfill();
        };
      })(this);
    };

    return _Class;

  })(),
  findDeferral: function() {
    return null;
  },
  trampoline: function(_fn) {
    return _fn();
  }
};
__iced_k = __iced_k_noop = function() {};

underscore = angular.module('underscore', []);

underscore.factory('_', function() {
  return window._;
});

services = angular.module('services', ['ngStorage', 'underscore']);

services.value('pageTypes', {
  'landing': 'index.html',
  'nav': 'navigation.html',
  'content': 'content.html',
  'favorites': 'favorites.html',
  'recents': 'recents.html',
  'search': 'search.html'
});

dataItem = (function() {
  function dataItem() {}

  return dataItem;

})();

contentItem = (function() {
  function contentItem(id, title) {
    this.id = id;
    this.title = title;
    this.pageType = 'content';
  }

  contentItem.prototype.loadData = function(cb, $http, $sce) {
    var data, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    if (this.content) {
      return cb();
    }
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "/Users/colinman/fmcases/app/js/services.coffee",
          funcname: "contentItem.loadData"
        });
        $http.get("/item/" + _this.id).success(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return data = arguments[0];
            };
          })(),
          lineno: 26
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        _this.content = $sce.trustAsHtml(data.content);
        return cb();
      };
    })(this));
  };

  return contentItem;

})();

detailItem = (function(_super) {
  __extends(detailItem, _super);

  function detailItem(id, title, detailContent, $sce) {
    this.id = id;
    this.title = title;
    this.detailContent = detailContent;
    this.pageType = 'content';
    if (this.detailContent != null) {
      this.detailContent = $sce.trustAsHtml(this.detailContent.toString());
    }
  }

  return detailItem;

})(contentItem);

expandItem = (function(_super) {
  __extends(expandItem, _super);

  function expandItem(id, title, expandableContent, $sce) {
    this.id = id;
    this.title = title;
    this.expandableContent = expandableContent;
    this.pageType = 'expand';
    if (this.expandableContent != null) {
      this.expandableContent = $sce.trustAsHtml(this.expandableContent.toString());
    }
  }

  expandItem.prototype.showExpandable = false;

  return expandItem;

})(dataItem);

menuItem = (function(_super) {
  __extends(menuItem, _super);

  function menuItem(id, title) {
    this.id = id;
    this.title = title;
    this.pageType = 'nav';
  }

  menuItem.prototype.loadData = function(cb, $http, $sce) {
    var data, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    if (this.items) {
      return cb();
    }
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "/Users/colinman/fmcases/app/js/services.coffee",
          funcname: "menuItem.loadData"
        });
        $http.get("/item/" + _this.id).success(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return data = arguments[0];
            };
          })(),
          lineno: 45
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        _this.items = _.map(data.items, function(elem) {
          if (elem.pageType === 'expand') {
            return new expandItem(elem.id, elem.title, elem.expandableContent, $sce);
          } else if (elem.pageType === 'content') {
            return new contentItem(elem.id, elem.title);
          } else if (elem.pageType === 'nav') {
            return new menuItem(elem.id, elem.title);
          }
        });
        return cb();
      };
    })(this));
  };

  return menuItem;

})(dataItem);

services.factory('data', [
  '$http', '$sce', function($http, $sce) {
    var data;
    return new (data = (function() {
      function data() {}

      data.prototype.rootDataItem = function() {
        return new menuItem(1, "Home");
      };

      return data;

    })());
  }
]);

objectify = function(items, $sce) {
  return _.map(items, function(elem) {
    if (elem.pageType === 'expand') {
      return new expandItem(elem.id, elem.title, elem.expandableContent, $sce);
    } else if (elem.pageType === 'content') {
      return new contentItem(elem.id, elem.title);
    } else if (elem.pageType === 'nav') {
      return new menuItem(elem.id, elem.title);
    }
  });
};

services.factory('recents', [
  '$localStorage', 'data', '$sce', function($localStorage, data, $sce) {
    var recents;
    return new (recents = (function() {
      function recents() {
        if (!$localStorage.recents) {
          $localStorage.recents = [];
        }
        this._recents = null;
      }

      recents.prototype.add = function(item) {
        if (item.id === data.rootDataItem().id) {
          return;
        }
        $localStorage.recents = _.reject($localStorage.recents, function(i) {
          return i.id === item.id;
        });
        $localStorage.recents.unshift(item);
        return this._recents = objectify($localStorage.recents, $sce);
      };

      recents.prototype.getRecents = function() {
        if (this._recents) {
          return this._recents;
        }
        return this._recents = objectify($localStorage.recents, $sce);
      };

      recents.prototype.clear = function() {
        $localStorage.recents = [];
        return this._recents = null;
      };

      return recents;

    })());
  }
]);

services.factory('favorites', [
  '$localStorage', 'data', '$sce', function($localStorage, data, $sce) {
    var favorites;
    return new (favorites = (function() {
      function favorites() {
        if (!$localStorage.favorites) {
          $localStorage.favorites = [];
        }
        this._favorites = null;
      }

      favorites.prototype.add = function(item) {
        if (item.id === data.rootDataItem().id) {
          return;
        }
        $localStorage.favorites = _.reject($localStorage.favorites, function(i) {
          return i.id === item.id;
        });
        $localStorage.favorites.push(item);
        return this._favorites = objectify($localStorage.favorites, $sce);
      };

      favorites.prototype.remove = function(item) {
        if (item.id === data.rootDataItem().id) {
          return;
        }
        $localStorage.favorites = _.reject($localStorage.favorites, function(i) {
          return i.id === item.id;
        });
        return this._favorites = objectify($localStorage.favorites, $sce);
      };

      favorites.prototype.exists = function(item) {
        if (_.find(this.getFavorites(), function(fav) {
          return fav.id === item.id;
        }) != null) {
          return true;
        }
        return false;
      };

      favorites.prototype.getFavorites = function() {
        if (this._favorites) {
          return this._favorites;
        }
        return this._favorites = objectify($localStorage.favorites, $sce);
      };

      favorites.prototype.clear = function() {
        $localStorage.favorites = [];
        return this._favorites = null;
      };

      return favorites;

    })());
  }
]);

services.factory('utilFunctions', [
  'pageTypes', 'recents', '$timeout', function(pageTypes, recents, $timeout) {
    var utilFunctions;
    return new (utilFunctions = (function() {
      function utilFunctions() {}

      utilFunctions.prototype.addMenuFuncs = function($scope) {
        $scope.pushRecents = function() {
          if (navi.getCurrentPage().options.pageType === 'recents') {
            return;
          }
          return navi.pushPage(pageTypes['recents'], {
            pageType: 'recents',
            title: 'Recents'
          });
        };
        $scope.pushFavorites = function() {
          if (navi.getCurrentPage().options.pageType === 'favorites') {
            return;
          }
          return navi.pushPage(pageTypes['favorites'], {
            pageType: 'favorites',
            title: 'Favorites'
          });
        };
        $scope.pushSearch = function() {
          if (navi.getCurrentPage().options.pageType === 'search') {
            return;
          }
          return navi.pushPage(pageTypes['search'], {
            pageType: 'search',
            title: 'Search'
          });
        };
        return $scope.showNotice = function(title, message) {
          $scope.alertTitle = title;
          $scope.alertContent = message;
          return ons.createAlertDialog('alert.html').then(function(alertDialog) {
            alertDialog.show();
            return $timeout(function() {
              return alertDialog.hide();
            }, 500);
          });
        };
      };

      return utilFunctions;

    })());
  }
]);
