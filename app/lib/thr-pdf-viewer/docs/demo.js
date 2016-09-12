angular
    .module('demo-app', ['thr-pdf-viewer'])
    .controller('DemoCtrl', [
        '$scope',
        function ($scope) {
            $scope.pdfViewer = {};
        }
    ]);