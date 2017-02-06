(function(){
  angular.module("myApp")
    .component("editAdsRoute", {
      controller:editAdsRouteController,
      templateUrl:"./editAdsRoute/editAdsRoute.html",
    });

  function editAdsRouteController(adService, $stateParams, $state){
    var vm = this;
      console.log("edit ads route");

    vm.$onInit = function getAd(){
      adService.getAd($stateParams.id)
      .then(function(response){
        console.log(response);
        vm.ad = response.data;
      }).catch(function(){
        console.log("error getting ad data");
      });
    };

    vm.handleChange = function(ad){
      adService.editAd(ad.id, ad)
      .then(function(response){
        vm.newAd = response.data;
        console.log(response);
        $state.go('adsRoute');
      }).catch(function(error){
        console.log(error);
      });
    };



  }

})();
