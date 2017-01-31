(function(){

  angular.module("myApp")
    .component("adForm",{
      controller: adFormController,
      templateUrl:"./adForm/adForm.html",
      bindings:{
        onCreateAd: '&'
      }
    });

    function adFormController(){
      var vm=this;

      vm.createNewAd = function(){
        console.log("submitted new ad");
        console.log(vm.newAd);
        vm.onCreateAd({ad:vm.newAd});
      };


    }

})();
