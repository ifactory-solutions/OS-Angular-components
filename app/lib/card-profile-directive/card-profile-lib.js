/*
 * card-profile
 * Card Profile is a directive for AngularJS
 * This is a directive to show card profile facebook, twitter and google analytics
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

    angular.module('card-profile', ['ngDragDrop'] )
        .directive('cardProfile', [function() {
            function link(scope, elem, attrs, ctrl) {
                scope.$watch('data', function (newVal, oldVal) {
                    var userId = null;
                    switch (newVal.type) {
                        case "twitter":
                            scope.data.elementID = 'elemen-' + newVal.profile.email;
                            scope.data.icon = newVal.icon;
                            scope.data.profile = newVal.profile;
                            break;
                        case "facebook":
                            scope.data.elementID = 'elemen-' + newVal.profile.email;
                            scope.data.icon = newVal.icon;
                            scope.data.profile = newVal.profile;
                            break;
                        case "googleAnalytics":
                            scope.data.elementID = 'elemen-' + newVal.profile.email;
                            scope.data.icon = newVal.icon;
                            scope.data.profile = newVal.profile;
                            break;
                    }
                });
            }

            return {
                restrict: 'EA',
                scope: {
                    data: '=?data'
                },
                templateUrl: 'lib/card-profile-directive/index.html',
                compile: function(tElement, tAttrs) {
                    return link;
                }
            };
        }]);

}));
