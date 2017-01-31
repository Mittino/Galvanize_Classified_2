(function(){

  angular.module("myApp")
    .component("ad", {
      controller:adController,
      templateUrl:"ad/ad.html",
      bindings: {
        ad: '<',

      }
    });

    function adController(){
      var vm = this;


    }


})();
