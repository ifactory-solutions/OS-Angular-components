'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'simple-filter',
  'drag-drop',
  'card-profile',
  'card-colors',
  'angular-easy-loading',
  'angular-easy-popover',
  'thr-slideshow',
  'thr-pdf-viewer'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/simple-filter-directive', {
    templateUrl: 'partials/simple-filter-directive.html',
    controller: 'SimpleFilterCtrl'
  });
  $routeProvider.when('/dragdrop', {
    templateUrl: 'partials/dragdrop.html',
    controller: 'DragDropCtrl'
  });
  $routeProvider.when('/card-profile', {
    templateUrl: 'partials/cardprofile.html',
    controller: 'CardProfileCtrl'
  });
  $routeProvider.when('/card-colors', {
    templateUrl: 'partials/card-colors.html',
    controller: 'CardColorsCtrl'
  });
  $routeProvider.when('/valid-phone', {
    templateUrl: 'partials/valid-phone.html'
  });
  $routeProvider.when('/valid-date', {
    templateUrl: 'partials/valid-date.html'
  });
  $routeProvider.when('/form-currency', {
    templateUrl: 'partials/form-currency.html'
  });
  $routeProvider.when('/angular-easy-loading', {
    templateUrl: 'partials/angular-easy-loading.html',
    controller: 'AngularEasyLoadingCtrl'
  });
  $routeProvider.when('/angular-easy-popover', {
    templateUrl: 'partials/angular-easy-popover.html'
  });
  $routeProvider.when('/thr-slideshow', {
    templateUrl: 'partials/thr-slideshow.html',
    controller: 'ThrSlideshowCtrl'
  });
  $routeProvider.when('/thr-pdf-viewer', {
    templateUrl: 'partials/thr-pdf-viewer.html',
    controller: 'ThrPdfViewerCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
