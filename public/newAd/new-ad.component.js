(function(){

  angular.module("myApp")
    .component("newAd",{
      controller: newAdController,
      templateUrl:"./newAd/new-ad.html",
      bindings:{
        onCreateAd: '&'
      }
    });

    function newAdController(){
      var vm=this;

      vm.createNewAd = function(){
        console.log("submitted new ad");
        console.log(vm.newAd);
        vm.onCreateAd({ad:vm.newAd});
      };


    }

})();
