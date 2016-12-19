angular.module("devMtnApp").service("styleService", function () {

    var tog = false;
    var togDir = true;

    /* Underlines Active Tab In SPA */
    this.styleActiveTab = function (val) {
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
    }

    /* Displays The Search Bar On The View Friends View */
    this.showViewSearch = function() {
        if (tog) {
            $("#animate").animate({
                width: "-=158",
                opacity: "-=1"
            }, 500, function () {
                $(".search-friends").css("display", "none");
            });
            tog = false;
        } else {
            $(".search-friends").css("display", "block");
            $("#animate").animate({
                width: "+=158",
                opacity: "+=1"
            }, 500, function () {
                $(".search-friends").css("display", "block");
                $(".search-friends").focus();
            });
            tog = true;
        }
    }

    /* Displays The Search Bar On The Find Friends View */
    this.showFindSearch = function() {
        $(".search-friends").css("margin-left", "35px");
        if (tog) {
            $("#animate").animate({
                width: "-=243",
                opacity: "-=1"
            }, 500, function () {
                $(".search-friends").css("display", "none");
            });
            tog = false;
        } else {
            $(".search-friends").css("display", "block");
            $("#animate").animate({
                width: "+=243",
                opacity: "+=1"
            }, 500, function () {
                $(".search-friends").css("display", "block");
                $(".search-friends").css("margin-left", "35px");
                $(".search-friends").focus();
            });
            tog = true;
        }
    }

    /* Toggles A Filter Button In The View Friends View */
    this.setDirection = function() {
        var direction;
        if (togDir) {
            direction = "+name";
            $("#sortBtn")[0].innerText = "DESCENDING";
            togDir = false;
        } else {
            direction = "-name";
            $("#sortBtn")[0].innerText = "ASCENDING";
            togDir = true;
        }
        return direction;
    }

});