angular.module("devMtnApp").service("profileService", function() {

  var toLocStor = [];

  if (localStorage.getItem("_profile") === null) {
    localStorage["_profile"] = [];
  }

  this.setInfo = function(first, last, tagline, pic, bio, friends) {
    console.log(bio);
    var obj = {
      name: first + " " + last,
      tagline: tagline,
      bio: bio,
      profileUrl: pic,
      friends: friends
    }
    toLocStor[0] = obj;
    localStorage["_profile"] = JSON.stringify(toLocStor);
  }

});
