angular.module("myApp")
  .service('adService', function($http){
    var service=this;

    service.getAds = function(){
      return $http.get('/classifieds/');
    };
    service.postAd = function(ad){
      return $http.post('/classifieds/', ad)
    };


  });
  //https://gclassifieds.herokuapp.com/classifieds/
