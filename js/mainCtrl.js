angular.module("devMtnApp").controller("mainCtrl", function($scope, profileService) {

    /* Saves Profile Using the profileService */
    $scope.saveProfile = function () {

        $scope.first = $scope.fullName.split(" ")[0];
        $scope.last = $scope.fullName.split(" ")[1];

        /* Creates A New Profile With Given Information */
        profileService.setInfo($scope.first, $scope.last, $scope.tagline, $scope.profilePic, $scope.bio, []);

    }

});
