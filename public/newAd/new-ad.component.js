(function(){

  angular.module("myApp")
    .component("newAd",{
      controller: newAdController,
      templateUrl:"./newAd/new-ad.html"
    });

    function newAdController(){
      var vm=this;
    }

})();
