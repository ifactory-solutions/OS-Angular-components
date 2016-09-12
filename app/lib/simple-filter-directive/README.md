# simple-filter — Directive to filter some data

This project is a directive to filter some data(email, address, name, phone number, etc).
It's um simple filter field that filter a list of values

## How to use simple-filter

1. Be sure that `AngularsJS 1.x`, `Bootstrap 3` (css only), `jQuery` and `Font Awesome` are imported.
2. Load the dependency in your index.html
`<script src="path/simple-filter-directive/simple-search-lib.js"></script>` and `<link rel="stylesheet" href="css/simple-filter.css"/>`


* Add the dependency
´´
angular.module('myApp', ['simple-filter']);
´´

## Configuration
´´
angular.controller('SimpleFilterCtrl', ['$scope', function($scope) {
    $scope.config = {
      style: {
        bg: '#00b8ff'
      },
      placeholder: 'Filter',
      nameSearched: ''
    };

    $scope.model = [{
      name: 'Laurindo',
      address: 'Travessa Cessar Magalhaes',
      phoneNumber: 9988776655,
      email: 'dslaurindo@gmail.com'
    }, {
      name: 'Teste',
      address: 'Avenue Square Park',
      phoneNumber: 7789899089,
      email: 'test@gmail.com'
    }];
´´

* HTML
´´
<simple-filter sfconfig="config"></simple-filter>
<div>
    <div ng-repeat="list in model | filter:config.nameSearched" class="col-xs-12 list-simple-filter">
        <div class="col-xs-3">{{list.name}}</div>
        <div class="col-xs-3">{{list.address}}</div>
        <div class="col-xs-3">{{list.email}}</div>
        <div class="col-xs-3">{{list.phoneNumber}}</div>
    </div>
</div>
´´

** nameSearched - Is the name that will be filtered

## Example
http://localhost:63342/repository/app/#/simple-filter-directive