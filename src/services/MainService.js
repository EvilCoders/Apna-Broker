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

    RentSrvc.baseUrl = 'https://apna-broker-api.herokuapp.com';

    RentSrvc.getResult = function (item, response) {
      return $http({
        method: 'POST',
        url: RentSrvc.baseUrl + '/api',
        data: item
      })
    }
  }
})()
