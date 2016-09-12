# thr-pdf-viewer

This directive exposes a basic pdf viewer as AngularJS 1.x module.

## Installation

1. Be sure that `AngulsJS 1.x`, `Bootstrap 3` (css only), `jQuery` and `Font Awesome` are imported.
2. Set `thr-pdf-viewer` as a dependencie of your AngularJS module.
3. Add a script tag pointing to `dist/thr-pdf-viewer.min.js` or `dist/thr-pdf-viewer.js` and a link tag pointing `dist/thr-pdf-viewer.min.css` or `dist/thr-pdf-viewer.css` to your index.html.

## Usage

Place thr-pdf-viewer in any place of html body, and write some controller that pass an accessor object to thr-pdf-viewer in order to use it public api, e.g:
```html
<body>
    ...
    <thr-pdf-viewer accessor="pdfViewer"></thr-pdf-viewer>
    ...
</body>
```
```javascript
angular
    .module('anyModuleName', ['thr-pdf-viewer'])
    .controller('anyControllerName', [
        '$scope',
        function ($scope) {
            $scope.pdfViewer = {};
        }
    ]);
```
After that, $scope.pdfViewer.open/close could be call to open/close the pdf viewer, e.g:
```html
<body>
    ...
    <i ng-click="pdfViewer.open('Amazing pdf!', 'test.pdf')"></i>
    ...
</body>
```
An example can be found in https://thr0wn.github.io/thr-pdf-viewer/ 