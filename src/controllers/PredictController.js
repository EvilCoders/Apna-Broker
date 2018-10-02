(function () {
  'use strict';

  /**
  * MainApp Module
  *
  * Description
  */
  angular.module('MainApp')
  .controller('PredictController', PredictController);

  PredictController.$inject = [];
  function PredictController () {
    console.log('Predict Controller');
  }
})()
