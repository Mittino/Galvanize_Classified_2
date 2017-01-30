(function(){

  angular.module("myApp")
    .component("newAd",{
      controller: newAdController,
      templateUrl:"./newAd/new-ad.html"
    });

    function newAdController(){
      var vm=this;

      vm.createNewAd = function(){
        console.log("submitted new ad");
      }


    }

})();
