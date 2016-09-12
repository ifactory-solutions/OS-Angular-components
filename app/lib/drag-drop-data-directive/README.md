# drag-drop

This a directive to drag data and drop in box

## How to use

1. Be sure that `AngularsJS 1.x`, `Bootstrap 3` (css only), `jQuery` and `Font Awesome` are imported.
2. Set `drag-drop` as a dependency of your AngularJS module.
3. Add script in html `<script src="lib/drag-drop-data-directive/angular-dragdrop.min.js"></script>`
    and `<script src="lib/drag-drop-data-directive/drag-drop-lib.js"></script>`
4. Add css in html `<link rel="stylesheet" href="lib/drag-drop-data-directive/dragdrop.css"/>`

## Installation

* Load the dependency in your index.html
Add script in html `<script src="lib/drag-drop-data-directive/angular-dragdrop.min.js"></script>`
Add script in html `<script src="lib/drag-drop-data-directive/drag-drop-lib.js"></script>`

* Add the dependency
´´
angular.module('myApp', ['drag-drop']);
´´

Create the list of cards colors
```javascript
    angular
        .module('moduleName', ['drag-drop'])
        .controller('DragDropCtrl', ['$scope', function($scope) {
            $scope.buckets = [{
              name: 'bucket1'
            }, {
              name: 'bucket2'
            }];
            $scope.currentData = {
              bucket: {}
            };
            $scope.columns = [{
              name: 'Firts Column'
            }];
            $scope.dragCallback = function(event, target, column) {
              $scope.currentData.column = column;
            };
            $scope.dropCallback = function(event, target, bucketName, $indexBucket) {
              if (!$scope.currentData.bucket[bucketName]) {
                $scope.currentData.bucket[bucketName] = [];
              }
              $scope.currentData.bucket[bucketName].push({
                name: $scope.currentData.column.name
              });
            };

          }]);
```
Add the directive `card-colors` in html:
```html
<body>
    ...
    <div ng-controller="DragDropCtrl">
        <drag-drop-data
                data="columns"
                drag-callback="dragCallback"
                drop-callback="dropCallback"
                buckets="buckets"
                current-data="currentData"></drag-drop-data>
    </div>
    ...
</body>
```

## Example
http://localhost:port/repository/app/#/dragdrop