/**
 * @ngdoc directive
 * @id back_button
 * @name ons-back-button
 * @description
 *   [en]Back button component for ons-toolbar. Can be used with ons-navigator to provide back button support.[/en]
 *   [ja]ons-toolbarに配置できる「戻るボタン」用コンポーネント。ons-navigatorと共に使用し、ページを1つ前に戻る動作を行います。[/ja]
 * @codepen aHmGL
 * @seealso ons-toolbar [en]ons-toolbar component[/en][ja]ons-toolbarコンポーネント[/ja]
 * @guide Addingatoolbar [en]Adding a toolbar[/en][ja]ツールバーの追加[/ja]
 * @guide Returningfromapage [en]Returning from a page[/en][ja]一つ前のページに戻る[/ja]
 * @example
 *   <ons-back-button>Back</ons-back-button>
 */
(function(){
  'use strict';
  var module = angular.module('onsen');

  module.directive('onsBackButton', function($onsen, $compile, GenericView, ComponentCleaner) {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: $onsen.DIRECTIVE_TEMPLATE_URL + '/back_button.tpl',

      // NOTE: This element must coexists with ng-controller.
      // Do not use isolated scope and template's ng-transclude.
      transclude: true,
      scope: true,

      link: {
        pre: function(scope, element, attrs, controller, transclude) {
          var backButton = new GenericView(scope, element, attrs);
          
          $onsen.declareVarAttribute(attrs, backButton);

          $onsen.aliasStack.register('ons.backButton', backButton);
          element.data('ons-back-button', backButton);

          scope.$on('$destroy', function() {
            backButton._events = undefined;
            $onsen.removeModifierMethods(backButton);
            element.data('ons-back-button', undefined);
            $onsen.aliasStack.unregister('ons.backButton', backButton);
            element = null;
          });

          scope.modifierTemplater = $onsen.generateModifierTemplater(attrs);

          $onsen.addModifierMethods(backButton, 'toolbar-button--*', element.children());

          transclude(scope, function(clonedElement) {
            if (clonedElement[0]) {
              element[0].querySelector('.back-button__label').appendChild(clonedElement[0]);
            }
          });

          ComponentCleaner.onDestroy(scope, function() {
            ComponentCleaner.destroyScope(scope);
            ComponentCleaner.destroyAttributes(attrs);
            element = null;
            scope = null;
            attrs = null;
          });
        },
        post: function(scope, element) {
          $onsen.fireComponentEvent(element[0], 'init');
        }
      }
    };
  });
})();
