angular.module("devMtnApp").controller("landingCtrl", function($scope, profileService, friendService, styleService) {

    /* Gets Profile Info From LocalStorage */
    var profileInfo = JSON.parse(localStorage["_profile"]);
    $scope.pfFirst = profileInfo[0].name.split(" ")[0];
    $scope.pfLast = profileInfo[0].name.split(" ")[1];
    $scope.fullName = $scope.pfFirst + " " + $scope.pfLast;
    $scope.pTagline = profileInfo[0].tagline;
    $scope.pBio = profileInfo[0].bio;
    $scope.pPic = profileInfo[0].profileUrl;
    $scope.pFriends = profileInfo[0].friends;

    /* Separates First And Last Name For Profile Preview */
    $scope.$watch('fullName', function(name) {
        $scope.pfFirst = name.split(" ")[0];
        $scope.pfLast = name.split(" ")[1];
    });

    /* Stores The Clicked Profile In LocalStorage */
    $scope.storeFriend = function (friend) {
        localStorage["_fProfile"] = JSON.stringify([friend]);
    }

    // ======================================================================================
    // =================================== ProfileService ===================================
    // ======================================================================================

    /* Updates Profile With Given Information */
    $scope.saveProfile = function () {
        profileService.setInfo($scope.pfFirst, $scope.pfLast, $scope.pTagline, $scope.pPic, $scope.pBio, $scope.pFriends);
    }

    // ======================================================================================
    // =================================== FriendService ====================================
    // ======================================================================================

    $scope.people = friendService.sendPeople();
    $scope.friends = friendService.sendFriends();
    $scope.nonFriends = friendService.sendNonFriends();

    // ======================================================================================
    // ==================================== StyleService ====================================
    // ======================================================================================

    /* Underlines Active Tab In SPA */
    $scope.$watch('aTag', function(val) {
        styleService.styleActiveTab(val);
    });

    /* Displays The Search Bar On The View Friends View */
    $("#toggle-search").on("click", function() {
        styleService.showViewSearch();
    });

    /* Displays The Search Bar On The Find Friends View */
    $("#svg-side-border").on("click", function() {
        styleService.showFindSearch();
    });

    /* Toggles A Filter Button In The View Friends View */
    $scope.setDir = function () {
        $scope.sortDirection = styleService.setDirection();
    }

});
