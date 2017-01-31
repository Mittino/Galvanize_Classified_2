(function(){

  angular.module("myApp")
    .component("adsRoute", {
      controller:AdsRouteController,
      templateUrl:"./adsRoute/adsRoute.html"
    });

    function AdsRouteController(adService){
      var vm = this;

      vm.$onInit = function getAdData(){
        vm.showNew = false;
        adService.getAds()
        .then(function(response){
          vm.ads = response.data;
          console.log(response);
        }).catch(function(){
          console.log('error getting ads');
        });
      };

      vm.newAdd = function(ad){
        adService.postAd(ad)
        .then(function(response){
          vm.newAd = response.data
          console.log(response);
          vm.ads.push(response.data);
        }).catch(function(){
          console.log('error posting ad');
        });
      }

      vm.editAdd = function(ad){
        adService.editAd(ad)
        .then(function(resposnse){
          vm.newAd = response.data;
          console.log(response);

        }).catch(function(){
          console.log('error updating add');
        });
      };

    }


})();
