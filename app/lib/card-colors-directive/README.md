# card-colors

This is a directive to add cards colorful

## Installation

1. Be sure that `AngulsJS 1.x`, `Bootstrap 3` (css only), `jQuery` and `Font Awesome` are imported.
2. Set `card-colors` as a dependency of your AngularJS module.
3. In index.html add the script `<script src="lib/card-colors-directive/card-colors-lib.js"></script>`
4. Add css in html `<link rel="stylesheet" href="lib/card-colors-directive/card-colors.css"/>`

## Usage

Add the dependecy
```javascript
    angular.module('moduleName', ['card-colors']);
```

Create the list of cards colors
```javascript
    angular
        .module('moduleName', ['card-colors'])
        .controller('CardColorsCtrl', ['$scope', function($scope) {
              $scope.colors = [{
                title: 'Hello',
                msg: 'Hello World',
                color: '00bcd4'
              }, {
                title: 'World',
                msg: 'World Cup',
                color: '8bc34a'
              }, {
                title: 'Test',
                msg: 'Final Test',
                color: 'b00c07'
              }, {
                title: 'Success',
                msg: 'Success Ever',
                color: '2196f3'
              }];
        }]);
```
Add the directive `card-colors` in html:
```html
<body>
    ...
    <card-colors ng-repeat="color in colors track by $index" data="color"></card-colors>
    ...
</body>
```
An example can be found in http://localhost:63342/repository/app/#/card-colors