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
    var PredictCtrl = this;

    PredictCtrl.detail = {
      longitude: 0,
      latitude: 0,
      gym: 0,
      lift: 0,
      swimming_pool: 0,
      property_size: 0,
      bathroom: 0,
      floor: 0,
      total_floor: 0,
      balconies: 0,
      building_type_AP: 0,
      building_type_GC: 0,
      building_type_IF: 0,
      building_type_IH: 0,
      parking_BOTH: 0,
      parking_FOUR_WHEELER: 0,
      parking_NONE: 0,
      parking_TWO_WHEELER: 0,
      type_BHK1: 0,
      type_BHK2: 0,
      type_BHK3: 0,
      type_BHK4: 0,
      type_BHK4PLUS: 0,
      type_RK1: 0
    }
  }
})()
