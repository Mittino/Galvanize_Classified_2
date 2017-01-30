angular.module("myApp")
  .service('ads', function($http){
    var service=this;

    service.getPosts = function(){
      return $http.get('/classifieds')
    };

    console.log(getPosts());

  });
  //https://gclassifieds.herokuapp.com/classifieds/
