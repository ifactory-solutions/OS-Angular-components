angular
    .module('demo-app', ['angular-easy-loading'])
    .controller('DemoCtrl', [
        '$scope',
        function($scope) {
            $scope.loading = true;
        }
    ]);