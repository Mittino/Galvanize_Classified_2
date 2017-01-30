(function(){

  angular.module("myApp")
    .component("adsRoute", {
      controller:AdsRouteController,
      templateUrl:"./adsRoute/adsRoute.html"
    });

    function AdsRouteController(adService){
      var vm = this;

      vm.$onInit = function getAdData(){
        adService.getAds()
        .then(function(response){
          vm.ads = response.data;
          console.log(response);
        }) .catch(function(){
          console.log('error getting ads');
        });
      };
    }


})();
