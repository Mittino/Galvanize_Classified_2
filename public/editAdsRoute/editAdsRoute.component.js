(function(){
  angular.module("myApp")
    .component("editAdsRoute", {
      controller:editAdsRouteController,
      templateUrl:"./editAdsRoute/editAdsRoute.html"
    });

  function editAdsRouteController(){
    var vm = this;
      console.log("edit ads route");
  }





})();
