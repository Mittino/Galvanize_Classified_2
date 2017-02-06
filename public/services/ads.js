angular.module("myApp")
  .service('adService', function($http){
    var service=this;

    service.getAds = function(){
      return $http.get('/classifieds/');
    };
    service.postAd = function(ad){
      return $http.post('/classifieds/', ad)
    };

    service.editAd = function(id, ad){
      return $http.patch('/classifieds/' + id, ad);
    };

    service.getAd = function(id){
      return $http.get('/classifieds/' + id);
    }

  });
