(function () {
  'use strict';

  /**
  * MainApp Module
  *
  * Description
  */
  angular.module('MainApp')
  .controller('PredictController', PredictController);

  PredictController.$inject = ['PredictRentService'];
  function PredictController (PredictRentService) {

    const PredictCtrl = this;

    PredictCtrl.rentRange = null;

    PredictCtrl.detail = {
      longitude: null,
      latitude: null,
      gym: 0,
      lift: 0,
      swimming_pool: 0,
      property_size: null,
      bathroom: null,
      floor: null,
      total_floor: null,
      balconies: null,
    }

    // ***************************************************************************
    // FOR PARKING TYPE
    PredictCtrl.parkingCategory = null;

    PredictCtrl.parkingCategoryDetail = {
      parking_BOTH: 0,
      parking_FOUR_WHEELER: 0,
      parking_NONE: 0,
      parking_TWO_WHEELER: 0
    };

    PredictCtrl.parkingCategoryValue = {
      parking_BOTH: "Both",
      parking_FOUR_WHEELER: "Four Wheeler",
      parking_NONE: "None",
      parking_TWO_WHEELER: "Two Wheeler"
    };

    // method for stoding selected type as 1, and rest to 0
    PredictCtrl.setParkingTypeValue = function () {
      for (let key in PredictCtrl.parkingCategoryDetail) {
        PredictCtrl.parkingCategoryDetail[key] = +(PredictCtrl.parkingCategory === key);
      }
      Object.assign(PredictCtrl.detail, PredictCtrl.parkingCategoryDetail);
    }
    // ***************************************************************************

    // ***************************************************************************
    // FOR BUILDING CATEGORY TYPE
    PredictCtrl.buildingCategory = null;

    PredictCtrl.buildingCategoryDetail = {
      building_type_AP: 0,
      building_type_GC: 0,
      building_type_IF: 0,
      building_type_IH: 0
    };

    PredictCtrl.buildingCategoryValue = {
      building_type_AP: "Apartment",
      building_type_GC: "Independent House / Villa",
      building_type_IF: "Independent Floor / Builder's Floor",
      building_type_IH: "Gated Community Villa"
    };

    // method for stoding selected type as 1, and rest to 0
    PredictCtrl.setBuildingCategoryValue = function () {
      for (let key in PredictCtrl.buildingCategoryDetail) {
        PredictCtrl.buildingCategoryDetail[key] = +(PredictCtrl.buildingCategory === key);
      }
      Object.assign(PredictCtrl.detail, PredictCtrl.buildingCategoryDetail);
    }
    // ***************************************************************************


    // ***************************************************************************
    // FOR BUILDING TYPE
    PredictCtrl.buildingType = null;

    PredictCtrl.buildingTypeDetail = {
      type_BHK1: 0,
      type_BHK2: 0,
      type_BHK3: 0,
      type_BHK4: 0,
      type_BHK4PLUS: 0,
      type_RK1: 0
    };

    PredictCtrl.buildingTypeValue = {
      type_BHK1: "BHK 1",
      type_BHK2: "BHK 2",
      type_BHK3: "BHK 3",
      type_BHK4: "BHK 4",
      type_BHK4PLUS: "BHK 4 PLUS",
      type_RK1: "RK 1"
    };

    // method for stoding selected type as 1, and rest to 0
    PredictCtrl.setBuildingTypeValue = function () {
      for (let key in PredictCtrl.buildingTypeDetail) {
        PredictCtrl.buildingTypeDetail[key] = +(PredictCtrl.buildingType === key);
      }
      Object.assign(PredictCtrl.detail, PredictCtrl.buildingTypeDetail);
    }
    // ***************************************************************************


    // this method calls for api and fetch the predicted result from server
    PredictCtrl.getResult = function () {
      let checkEmpty = false;

      console.log(PredictCtrl.detail);
      PredictCtrl.response = PredictRentService.getResult(PredictCtrl.detail);
      PredictCtrl.response.then(function (response) {
        console.log(response.data);
        PredictCtrl.rentRange = response.data[0];
        console.log(response.status);
      }, function (response) {
        console.log(response.status);
      })
    }


  }
})()
