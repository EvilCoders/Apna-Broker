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
    var RentSrvc = this;

    RentSrvc.data = {"longitude": 77,"latitude": 12,"gym": 0,"lift": 0,"swimming_pool": 0,"property_size": 500,"bathroom": 1,"floor": 1,"total_floor": 2,"balconies": 0,"building_type_AP": 0,"building_type_GC": 0,"building_type_IF": 1, "building_type_IH": 0,"parking_BOTH": 0,"parking_FOUR_WHEELER": 0,"parking_NONE": 0,"parking_TWO_WHEELER": 0,"type_BHK1": 1, "type_BHK2": 0,"type_BHK3": 0,"type_BHK4": 0,"type_BHK4PLUS": 0,"type_RK1": 0};

    RentSrvc.getResult = function () {
      return $http({
        method: 'POST',
        url: 'http://192.168.43.124:5000/api',
        data: RentSrvc.data
      })
    }
  }
})()
