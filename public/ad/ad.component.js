(function(){

  angular.module("myApp")
    .component("ad", {
      controller:adController,
      templateUrl:"ad/ad.html",
      bindings: {
        ad: '<',
        onDelete: '&'
      }
    });

    function adController(){
      var vm = this;


      vm.deleteAdd = function(){
        console.log('delete click');
        console.log(this.ad.id);
        vm.onDelete({id:this.ad.id});
      };

    }



})();
