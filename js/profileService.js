angular.module("devMtnApp").service("profileService", function() {

  var toLocStor = [];

  if (localStorage.getItem("_profile") === null) {
    localStorage["_profile"] = [];
  }

  this.setInfo = function(first, last, tagline, pic, bio) {
    console.log(bio);
    var obj = {
      first: first,
      last: last,
      tagline: tagline,
      pic: pic,
      bio: bio
    }
    toLocStor[0] = obj;
    localStorage["_profile"] = JSON.stringify(toLocStor);
  }

});
