angular.module("devMtnApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/views');

  $stateProvider
  .state('views', {
    url: '/views',
    templateUrl: './views/init_view.html',
    controller:'mainCtrl'
  })
  .state('landing', {
    url: '/landing',
    templateUrl: 'views/landing_view.html',
    controller:'landingCtrl'
  })
  .state('friends', {
    url: '/friends',
    templateUrl: 'views/friends_view.html',
    controller:'landingCtrl'
  })
  .state('fProfile', {
    url: '/fProfile',
    templateUrl: 'views/friends_profile_view.html',
    controller:'landingCtrl'
  })
  .state('newFriends', {
    url: '/newFriends',
    templateUrl: 'views/newFriends_view.html',
    controller:'landingCtrl'
  })
  .state('update', {
    url: '/update',
    templateUrl: 'views/update_profile_view.html',
    controller:'landingCtrl'
  })

})
.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
        $rootScope.previousState_name = fromState.name;
        $rootScope.previousState_params = fromParams;
    });
    $rootScope.back = function() {
        $state.go($rootScope.previousState_name,$rootScope.previousState_params);
    };
});
