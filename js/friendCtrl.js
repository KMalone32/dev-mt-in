angular.module("devMtnApp").controller("friendCtrl", function($scope, friendService) {

    /* Gets Friend Profile Info From LocalStorage */
    var profileInfo = JSON.parse(localStorage["_fProfile"]);
    $scope.pfFirst = profileInfo[0].name.split(" ")[0];
    $scope.pfLast = profileInfo[0].name.split(" ")[1];
    $scope.fullName = $scope.pfFirst + " " + $scope.pfLast;
    $scope.pTagline = profileInfo[0].tagline;
    $scope.pBio = profileInfo[0].bio;
    $scope.pPic = profileInfo[0].profileUrl;
    $scope.fID = profileInfo[0].id;
    $scope.action = "ADD FRIEND";

    /* Gets User Profile Info For Friend Check */
    var me = JSON.parse(localStorage["_profile"]);

    /* Friend Check */
    for (var i = 0; i < me[0].friends.length; i++) {
        if (me[0].friends[i].id == $scope.fID) {
            $("#fr-btn")[0].value = "REMOVE FRIEND";
            $scope.action = $("#fr-btn")[0].value;
        }
    }

    /* Reacts To User Click To Either Add Or Remove A Friend */
    $scope.editFriends = function() {
        friendService.editFriends($scope.action, $scope.fID);
    }

});
