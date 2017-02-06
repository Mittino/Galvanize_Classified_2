(function(){

  angular.module("myApp")
    .component("adForm",{
      controller: adFormController,
      templateUrl:"./adForm/adForm.html",
      bindings:{
        onChange: '&',
        ad: '<'
      }
    });

    function adFormController(){
      var vm=this;

      vm.$onChanges = function(changesObj){
        console.log(changesObj);
        if (changesObj.ad){
          vm.formData = angular.copy(changesObj.ad.currentValue || {});
        }

      };



    }

})();
