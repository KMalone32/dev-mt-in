angular.module("devMtnApp").controller("landingCtrl", function($scope, profileService, peopleService, friendService) {

  var init = false;
  var tog = false;

  var profileInfo = JSON.parse(localStorage["_profile"]);
  $scope.pfFirst = profileInfo[0].name.split(" ")[0];
  $scope.pfLast = profileInfo[0].name.split(" ")[1];
  $scope.fullName = $scope.pfFirst + " " + $scope.pfLast;
  $scope.pTagline = profileInfo[0].tagline;
  $scope.pBio = profileInfo[0].bio;
  $scope.pPic = profileInfo[0].profileUrl;
  $scope.pFriends = profileInfo[0].friends;

  var imageSettings = JSON.parse(localStorage["_imgSettings"]);
  $(".profile-triangle img").css("margin-left", imageSettings[0].left);
  $(".profile-triangle img").css("margin-top", imageSettings[0].top);
  $(".profile-triangle img").height(imageSettings[0].height);

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

  $("#toggle-search").on("click", function() {
    if (tog) {
      $("#animate").animate({
        width: "-=158",
        opacity: "-=1"
      }, 500, function() {
        $(".search-friends").css("display", "none");
      });
      tog = false;
    } else {
      $(".search-friends").css("display", "block");
      $("#animate").animate({
        width: "+=158",
        opacity: "+=1"
      }, 500, function() {
        $(".search-friends").css("display", "block");
        $(".search-friends").focus();
      });
      tog = true;
    }
  });

  $("#svg-side-border").on("click", function() {
    $(".search-friends").css("margin-left", "35px");
    if (tog) {
      $("#animate").animate({
        width: "-=243",
        opacity: "-=1"
      }, 500, function() {
        $(".search-friends").css("display", "none");
      });
      tog = false;
    } else {
      $(".search-friends").css("display", "block");
      $("#animate").animate({
        width: "+=243",
        opacity: "+=1"
      }, 500, function() {
        $(".search-friends").css("display", "block");
        $(".search-friends").css("margin-left", "35px");
        $(".search-friends").focus();
      });
      tog = true;
    }
  });

  $scope.saveProfile = function() {
    profileService.setInfo($scope.pfFirst, $scope.pfLast, $scope.pTagline, $scope.pPic, $scope.pBio, $scope.pFriends);
  }

  $scope.people = peopleService.sendPeople();
  $scope.friends = friendService.sendFriends();
  $scope.nonFriends = friendService.sendNonFriends();
  $scope.sortDirection;
  var togDir = true;
  $scope.setDir = function() {
    if (togDir) {
      $scope.sortDirection = "+name";
      $("#sortBtn")[0].innerText = "DESCENDING";
      togDir = false;
    } else {
      $scope.sortDirection = "-name";
      $("#sortBtn")[0].innerText = "ASCENDING";
      togDir = true;
    }
  }

  $scope.storeFriend = function(friend) {
      localStorage["_fProfile"] = JSON.stringify([friend]);
  }

});
