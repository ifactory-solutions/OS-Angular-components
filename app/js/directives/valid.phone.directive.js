(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('validPhone', validPhone);


  /** @ngInject */
  function validPhone() {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: link
    };
  }

  function link(scope, element, attrs, ngModel) {

    if(!ngModel) {
      return;
    }

    ngModel.$parsers.push(checkForEvent);

    function checkForEvent(value){

      var validity, telefone,
          numerosIguais, telefoneFixoValido, telefoneCelularValido

      validity = true;

      if(!value) {
        ngModel.$setValidity('validPhone', validity);
        return value;
      }

      value = value.replace(' ', '').replace('(','').replace(')','').replace('-','').replace('.','');
      telefone = value.split('');

      if(telefone.length > 11){
        ngModel.$setValidity('validPhone', false);
        return value;
      }

      if(telefone[0] === '0'){
        ngModel.$setValidity('validPhone', false);
        return value;
      }

      telefone.splice(0, 2);

      numerosIguais = telefone.join('').split(telefone[0]).join('').length === 0;

      telefoneFixoValido = (telefone.length === 8) && (parseInt(telefone[0]) >= 2) && (parseInt(telefone[0]) <= 5);

      telefoneCelularValido = ((telefone.length === 9) &&
        (parseInt(telefone[0]) === 9) &&
        (parseInt(telefone[1]) >= 6)) ||
        ((telefone.length === 8) && (parseInt(telefone[0]) >= 6));

      if(numerosIguais && !telefoneFixoValido && !telefoneCelularValido){
        validity = false;
      }

      ngModel.$setValidity('validPhone', validity);
      return value;
    }

  }

})();
