(function () {
  'use strict';

  /**
  * MainApp Module
  *
  * Description
  */
  angular.module('MainApp')
  .controller('ResultController', ResultController);

  ResultController.$inject = ['data'];
  function ResultController (data) {
    console.log('Result Controller');

    var ResultCtrl = this;

    ResultCtrl.data = data;

    console.log(ResultCtrl.data.data[0]);
  }
})()
