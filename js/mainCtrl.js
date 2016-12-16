angular.module("devMtnApp").controller("mainCtrl", function($scope, profileService) {

  $scope.saveProfile = function() {
    $scope.first = $scope.fullName.split(" ")[0];
    $scope.last = $scope.fullName.split(" ")[1];
    profileService.setInfo($scope.first, $scope.last, $scope.tagline, $scope.profilePic, $scope.bio);
  }

});
