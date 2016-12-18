angular.module("devMtnApp").controller("mainCtrl", function($scope, profileService) {

  $scope.marLeft = $("#tri-image").css("marginLeft");
  $scope.marTop = $("#tri-image").css("marginTop");
  $scope.marHeight = $("#tri-image").height();

  $scope.saveProfile = function() {
    $scope.first = $scope.fullName.split(" ")[0];
    $scope.last = $scope.fullName.split(" ")[1];
    localStorage["_imgSettings"] = JSON.stringify([{"left":$scope.marLeft,"top":$scope.marTop,"height":$scope.marHeight.toString()}]);
    profileService.setInfo($scope.first, $scope.last, $scope.tagline, $scope.profilePic, $scope.bio, []);
  }

  $scope.$watch('profilePic', function(val) {
    console.log(val);
    if (val !== undefined) {
      $(".move-profile-buttons").css("display", "block");
    } else {
      $(".move-profile-buttons").css("display", "none");
    }
  });

  $scope.moveLeft = function() {
    $("#tri-image").css("margin-left", "-=3");
    $scope.marLeft = $("#tri-image").css("marginLeft");
  }

  $scope.moveRight = function() {
    $("#tri-image").css("margin-left", "+=3");
    $scope.marLeft = $("#tri-image").css("marginLeft");
  }

  $scope.moveUp = function() {
    $("#tri-image").css("margin-top", "-=3");
    $scope.marTop = $("#tri-image").css("marginTop");
  }

  $scope.moveDown = function() {
    $("#tri-image").css("margin-top", "+=3");
    $scope.marTop = $("#tri-image").css("marginTop");
  }

  $scope.zoom = function() {
    var nh = $("#tri-image").height();
    nh -= 30;
    $("#tri-image").height(nh);
    $scope.marHeight = nh;
  }

  $scope.unZoom = function() {
    var nh = $("#tri-image").height();
    nh -= 40;
    $("#tri-image").height(nh);
    $scope.marHeight = nh;
  }

});
