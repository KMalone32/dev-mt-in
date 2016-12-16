angular.module("devMtnApp").controller("landingCtrl", function($scope, profileService) {

  var init = false;

  var profileInfo = JSON.parse(localStorage["_profile"]);
  $scope.pfFirst = profileInfo[0].first;
  $scope.pfLast = profileInfo[0].last;
  $scope.fullName = $scope.pfFirst + " " + $scope.pfLast;
  $scope.pTagline = profileInfo[0].tagline;
  $scope.pBio = profileInfo[0].bio;
  $scope.pPic = profileInfo[0].pic;

  $scope.$watch('fullName', function(name){
    $scope.pfFirst = name.split(" ")[0];
    $scope.pfLast = name.split(" ")[1];
  });

  $scope.$watch('aTag', function(val) {
    var ele;
    if (val == 'n') {
      ele = $("a:contains('View Friends')");
      ele.removeClass("active");
      ele.siblings().removeClass("active");
    } else {
      ele = $("a:contains('" + val + "')");
      ele.addClass("active");
      ele.siblings().removeClass("active");
    }
  });

  $scope.saveProfile = function() {
    profileService.setInfo($scope.pfFirst, $scope.pfLast, $scope.pTagline, $scope.pPic, $scope.pBio);
  }

});
