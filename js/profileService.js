angular.module("devMtnApp").service("profileService", function() {

    /* Initializes LocalStorage For New User */
    if (localStorage.getItem("_profile") === null) {
        localStorage["_profile"] = [];
    }

    /* Creates A New Profile With Given Information */
    this.setInfo = function(first, last, tagline, pic, bio, friends) {
        var obj = {
            name: first + " " + last,
            tagline: tagline,
            bio: bio,
            profileUrl: pic,
            friends: friends
        }
        localStorage["_profile"] = JSON.stringify([obj]);
    }

    /* Immediately Displays Buttons To Customize Profile Pic */
    this.showButtons = function(val) {
        if (val !== undefined) {
            $(".move-profile-buttons").css("display", "block");
        } else {
            $(".move-profile-buttons").css("display", "none");
        }
    }

});
