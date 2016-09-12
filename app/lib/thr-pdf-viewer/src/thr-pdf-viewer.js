angular
    .module('thr-pdf-viewer', [])
    .directive('thrPdfViewer', [
        () => ({
            restrict: 'E',
            scope: {
                accessor: '='
            },
            templateUrl: 'thr-pdf-viewer.html',
            link: (scope, element) => {
                const accessor = scope.accessor = scope.accessor || {};

                accessor.open = (title, path) => {
                    scope.title = title || '';
                    const iframe = element.find('.pdf-viewer-iframe');
                    iframe.attr('src', path);
                    const modal = element.find('.pdf-viewer-modal');
                    modal.show();
                };

                scope.close = accessor.close = () => {
                    const modal = element.find('.pdf-viewer-modal');
                    modal.find('iframe#_attachmentsFrame').attr('src','');
                    modal.hide();
                };
            }
        })
    ]);