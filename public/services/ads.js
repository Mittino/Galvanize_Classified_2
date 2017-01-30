angular.module("myApp")
  .service('adService', function($http){
    var service=this;

    service.getAds = function(){
      return $http.get('/classifieds/');
    };


  });
  //https://gclassifieds.herokuapp.com/classifieds/
