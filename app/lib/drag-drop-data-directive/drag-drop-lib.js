/*
 * drag-drop-data
 * Drag Drop Data is a directive for AngularJS
 * This is a directive to drag and drop element
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

    angular.module('drag-drop', ['ngDragDrop'] )
        .directive('dragDropData', [function() {
            function link(scope, elem, attrs, ctrl) {

                scope.remove = function(bucketName, column, $index) {
                    scope.currentData.bucket[bucketName].splice($index, 1);
                };

            }

            return {
                restrict: 'EA',
                scope: {
                    data: '=',
                    dragCallback: '=',
                    dropCallback: '=',
                    buckets: '=',//numero de caixas que vao aparecer
                    currentData: '='//dados atuais
                },
                templateUrl: 'lib/drag-drop-data-directive/index.html',
                compile: function(tElement, tAttrs) {
                    return link;
                }
            };
        }]);

}));
