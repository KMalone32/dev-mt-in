angular.module("devMtnApp").controller("friendCtrl", function($scope, friendService) {

  var profileInfo = JSON.parse(localStorage["_fProfile"]);
  var me = JSON.parse(localStorage["_profile"]);
  $scope.pfFirst = profileInfo[0].name.split(" ")[0];
  $scope.pfLast = profileInfo[0].name.split(" ")[1];
  $scope.fullName = $scope.pfFirst + " " + $scope.pfLast;
  $scope.pTagline = profileInfo[0].tagline;
  $scope.pBio = profileInfo[0].bio;
  $scope.pPic = profileInfo[0].profileUrl;
  $scope.fID = profileInfo[0].id;
  $scope.action = "ADD FRIEND";

  for (var i = 0; i < me[0].friends.length; i++) {
    if (me[0].friends[i].id == $scope.fID) {
      $("#fr-btn")[0].value = "REMOVE FRIEND";
      $scope.action = $("#fr-btn")[0].value;
    }
  }

  $scope.editFriends = function() {
    friendService.editFriends($scope.action, $scope.fID);
  }

});
