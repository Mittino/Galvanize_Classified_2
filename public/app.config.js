(function(){
  angular.module("myApp").config(config);

  config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

  function config($locationProvider, $urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/ads');
    $locationProvider.html5Mode(true);

    $stateProvider
    .state({
      name:'application',
      component:'application',
      abstract: true,
    }).state({
      name:'adsRoute',
      url:'/ads',
      component:'adsRoute',
      parent:'application'
  });

  }
})();
