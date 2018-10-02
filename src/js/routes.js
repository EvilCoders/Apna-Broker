(function () {
  'use strict';

  /**
   * MainApp Module
   *
   * Description
   */
  angular.module('MainApp')
  .config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig ($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***

    $stateProvider

    // Home-Page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/homepage.template.html'
    })

    // Predict Page
    .state('predict', {
      url: '/predict',
      templateUrl: 'src/templates/predict.template.html',
      controller: 'PredictController as PredictCtrl'
    })

    // Result Page
    .state('result', {
      url: '/result',
      templateUrl: 'src/templates/result.template.html',
      controller: 'ResultController as ResultCtrl',
      resolve: {
        data: ['PredictRentService', function (PredictRentService) {
          return PredictRentService.getResult();
        }]
      }
    })
  }

})()
