angular
    .module('angular-easy-loading', [])
    .directive('thrLoading', [
        '$compile',
        $compile => ({
            restrict: 'A',
            scope: {
                thrLoading: '='
            },
            link: (scope, element) => {
                const loadElementAsString = 
                    `<div class="loading-overlay" ng-if="thrLoading">
                        <div class="spinner">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                    </div>`;
                element.append($compile(loadElementAsString)(scope));
            }
        })
    ]);