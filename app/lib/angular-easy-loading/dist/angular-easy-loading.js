'use strict';

angular.module('angular-easy-loading', []).directive('thrLoading', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            thrLoading: '='
        },
        link: function link(scope, element) {
            var loadElementAsString = '<div class="loading-overlay" ng-if="thrLoading">\n                        <div class="spinner">\n                            <div class="bounce1"></div>\n                            <div class="bounce2"></div>\n                            <div class="bounce3"></div>\n                        </div>\n                    </div>';
            element.append($compile(loadElementAsString)(scope));
        }
    };
}]);