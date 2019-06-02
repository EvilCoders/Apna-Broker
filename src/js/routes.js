(function() {
  "use strict";

  /**
   * MainApp Module
   *
   * Description
   */
  angular.module("MainApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/");

    // *** Set up UI states ***

    $stateProvider

      // Predict Page
      .state("home", {
        url: "/",
        templateUrl: "src/templates/predict.template.html",
        controller: "PredictController as PredictCtrl"
      })
      // // About Page
      // .state("about", {
      //   url: "/about",
      //   templateUrl: "src/templates/about.template.html"
      // })
      // // Contact Page
      // .state("contact", {
      //   url: "/contact",
      //   templateUrl: "src/templates/contact.template.html"
      // });
  }
})();
