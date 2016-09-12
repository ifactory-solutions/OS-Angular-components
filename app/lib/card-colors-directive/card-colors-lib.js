/*
 * card-colors
 * Card Colors is a directive for AngularJS
 * This is a directive to show card colorful
 * By Daniel Laurindo
 */

'use strict';

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('angular'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(window, function (angular) {

    angular.module('card-colors', ['ngDragDrop'] )
        .directive('cardColors', [function() {
            function link(scope, elem, attrs, ctrl) {
                scope.isClicked = false;

                scope.clicked = function() {
                    scope.isClicked = !scope.isClicked;
                    console.log(scope.data);
                };
            }

            return {
                restrict: 'EA',
                scope: {
                    data: '=?data'
                },
                templateUrl: 'lib/card-colors-directive/index.html',
                compile: function(tElement, tAttrs) {
                    return link;
                }
            };
        }]);

}));
