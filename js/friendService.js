angular.module("devMtnApp").service("friendService", function () {

    var profile = JSON.parse(localStorage["_profile"]);
    var peeps = JSON.parse(localStorage["_people"]);
    var people = peeps;
    var friends = [];

    /* Adds An id Property To people */
    for (var i = 0; i < people.length; i++) {
        people[i].id = i.toString();
    }

    /* Separates Friends From Non-Friends */
    for (var i = 0; i < profile[0].friends.length; i++) {
        var f = people[profile[0].friends[i].id];
        friends.push(f);
        people.splice(Number(f.id), 1);
    }

    /* Gives Users Friends */
    this.sendFriends = function() {
        return friends;
    }

    /* Gives All But Users Friends */
    this.sendNonFriends = function() {
        return people;
    }

    /* Gives All People On Site */
    this.sendPeople = function () {
        return peeps;
    }

    /* Either Adds Or Removes A Friend From User */
    this.editFriends = function(action, id) {
        console.log(id);
        var strID = id.toString();
        if (action === "ADD FRIEND") {
            profile[0].friends.push({"id":strID});
            localStorage["_profile"] = JSON.stringify(profile);
        } else if (action === "REMOVE FRIEND") {
            for (var i = 0; i < profile[0].friends.length; i++) {
                if (id == profile[0].friends[i].id) {
                    profile[0].friends.splice(i, 1);
                }
            }
            localStorage["_profile"] = JSON.stringify(profile);
        }
    }

});
