(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('validDate', validDate)
    .constant('moment', moment);


  /** @ngInject */
  function validDate(moment) {

    return {
      require: '?ngModel',
      restrict: 'A',
      link: function (scope, elem, attrs, ngModel) {

        if(!ngModel) {
          return;
        }

        ngModel.$parsers.unshift(checkForEvent);

        function checkForEvent(value) {

          if(!value) {
            ngModel.$setValidity('validDate', true);
            ngModel.$setValidity('validDateMax', true);
            ngModel.$setValidity('validDateMin', true);
            return value;
          }

          var date, format, valid, dateMin, dateMax;

          format = scope.$eval(attrs.validDateFormat);
          date = moment(value,format);
          valid = date.isValid();
          ngModel.$setValidity('validDate', valid);

          if(attrs.validDateMin) {
            dateMin = moment(scope.$eval(attrs.validDateMin),format).hours(0).startOf('hour');
            valid = date.isAfter(dateMin.subtract(1, 'd'));
            ngModel.$setValidity('validDateMin', valid);
          }

          if(attrs.validDateMax) {
            dateMax = moment(scope.$eval(attrs.validDateMax),format).hours(0).startOf('hour');
            valid = date.isBefore(dateMax.add(1, 'd'));
            ngModel.$setValidity('validDateMax', valid);
          }

          return value;

        }

      }
    };


  }


})();
