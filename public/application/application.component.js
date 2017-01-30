(function(){

  angular.module("myApp")
    .component("application", {
      controller: ApplicationController,
      templateUrl:"application/application.html"


    });

    function ApplicationController(adService){
      var vm = this;

      vm.$onInit = function getAdData(){
        adService.getAds()
        .then(function(response){
          console.log(response);
        }) .catch(function(){
          console.log('error getting ads');
        });
      };


    }

})();
