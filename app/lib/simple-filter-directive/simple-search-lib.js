/*
 * simple-filter
 * Simple Search directive for AngularJS
 * This is a directive for simple filter
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

    angular.module('simple-filter', [] )
        .directive('simpleFilter', ['$q', '$parse', '$http', '$sce', '$timeout', '$templateCache', '$interpolate', function ($q, $parse, $http, $sce, $timeout, $templateCache, $interpolate) {
            var TEMPLATE_URL = 'test.html';

            // Set the default template for this directive
            $templateCache.put(TEMPLATE_URL,
                '<div class="col-xs-12" style="background-color: {{sfconfig.style.bg}}; border-radius: 7px;">' +
                '    <span class="col-xs-1">' +
                '        <i class="icon icon-search" style="color: #fff; font-size: 2em; padding: 10px 0 0 0; cursor: auto;"></i>' +
                '    </span>' +
                '    <span class="col-xs-11">' +
                '        <input type="text" ng-model="sfconfig.nameSearched"' +
                '            class="simple-filter-input"' +
                '            style="background-color: {{sfconfig.style.bg}}; border: none; font-size: 1.5em; height: 40px; margin: 5px; color: #fff;"' +
                '            placeholder="{{sfconfig.placeholder}}" />' +
                '    </span>' +
                '</div>');

            function link(scope, elem, attrs, ctrl) {
                scope.$watch('sfconfig', function(value) {
                    console.log(value);
                });
            }

            return {
                restrict: 'EA',
                scope: {
                    sfconfig: '='
                },
                templateUrl: function(element, attrs) {
                    return attrs.templateUrl || TEMPLATE_URL;
                },
                compile: function(tElement, tAttrs) {
                    return link;
                }
            };
        }]);

}));
