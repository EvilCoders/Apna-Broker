(function () {
  'use strict';

  /**
  * MainApp Module
  *
  * Description
  */
  angular.module('MainApp')
  .service('PredictRentService', PredictRentService);

  PredictRentService.$inject = ['$http'];

  function PredictRentService ($http) {
    const RentSrvc = this;

    RentSrvc.baseUrl = 'http://192.168.43.124:5000';

    RentSrvc.getResult = function (item, response) {
      return $http({
        method: 'POST',
        url: RentSrvc.baseUrl + '/api',
        data: item
      })
    }
  }
})()
