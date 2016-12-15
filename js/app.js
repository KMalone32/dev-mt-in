angular.module("devMtnApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/views');

  $stateProvider
  .state('views', {
    url: '/views',
    templateUrl: './views/init_view.html'
  })
  .state('landing', {
    url: '/landing',
    templateUrl: 'views/landing_view.html'
  })
  .state('friends', {
    url: '/friends',
    templateUrl: 'views/friends_view.html'
  })
  .state('fProfile', {
    url: '/fProfile',
    templateUrl: 'views/friends_profile_view.html'
  })
  .state('newFriends', {
    url: '/newFriends',
    templateUrl: 'views/newFriends_view.html'
  })
  .state('update', {
    url: '/update',
    templateUrl: 'views/update_profile_view.html'
  });

});
