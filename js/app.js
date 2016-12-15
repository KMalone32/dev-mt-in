var app = angular.module("devMtnApp", ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "views/init_view.html"
  })
  .when("views/landing_view.html", {
    templateUrl: "views/landing_view.html"
  })
  .when("views/friends_view.html", {
    templateUrl: "views/friends_view.html"
  })
  .when("views/friends_profile_view.html", {
    templateUrl: "views/friends_profile_view.html"
  })
  .when("views/init_view.html", {
    templateUrl: "views/init_view.html"
  })
  .when("view/newFriends_view.html", {
    templateUrl: "view/newFriends_view.html"
  });
}]);
