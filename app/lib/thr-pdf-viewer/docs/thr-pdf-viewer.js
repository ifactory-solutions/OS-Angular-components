'use strict';

angular.module('thr-pdf-viewer', []).directive('thrPdfViewer', [function () {
    return {
        restrict: 'E',
        scope: {
            accessor: '='
        },
        templateUrl: 'thr-pdf-viewer.html',
        link: function link(scope, element) {
            var accessor = scope.accessor = scope.accessor || {};

            accessor.open = function (title, path) {
                scope.title = title || '';
                var iframe = element.find('.pdf-viewer-iframe');
                iframe.attr('src', path);
                var modal = element.find('.pdf-viewer-modal');
                modal.show();
            };

            scope.close = accessor.close = function () {
                var modal = element.find('.pdf-viewer-modal');
                modal.find('iframe#_attachmentsFrame').attr('src', '');
                modal.hide();
            };
        }
    };
}]);
angular.module('thr-pdf-viewer').run(['$templateCache', function($templateCache) {$templateCache.put('thr-pdf-viewer.html','<div class="pdf-viewer-modal">\r\n    <div class="container">\r\n        <div class="overlay"></div>\r\n        <div class="content">\r\n            <div class="modal-title">{{title}}</div>\r\n            <button class="close" ng-click="close()" title="title"><i class="disable-select fa fa-times-circle-o fa-lg"></i></button>\r\n            <div class="viewport">\r\n                <iframe class="pdf-viewer-iframe" src=""></iframe>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');}]);