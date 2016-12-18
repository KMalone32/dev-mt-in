angular.module("devMtnApp").service("peopleService", function() {
  var people = JSON.parse(localStorage["_people"]);
  this.sendPeople = function() {
    return people;
  }
});

// [
//   {
//     "name": "Person 1",
//     "tagline": "I'm person 1",
//     "bio": "I was the first person",
//     "profileUrl": "http://ichef-1.bbci.co.uk/news/660/cpsprodpb/39FF/production/_88374841_88374840.jpg",
//     "friends": [2,4]
//   },
//   {
//     "name": "Person 2",
//     "tagline": "I'm person 2",
//     "bio": "I was the second person",
//     "profileUrl": "http://www.christopherxjjensen.com/wp-content/gallery/profile-pics/Profile-Pic_2014-09-07_1000px.jpg",
//     "friends": [3,4]
//   },
//   {
//     "name": "Person 3",
//     "tagline": "I'm person 3",
//     "bio": "I was the third person",
//     "profileUrl": "https://blog.linkedin.com/content/dam/blog/en-us/corporate/blog/2014/07/Anais_Saint-Jude_L4388_SQ.jpg.jpeg",
//     "friends": [1]
//   },
//   {
//     "name": "Person 4",
//     "tagline": "I'm person 4",
//     "bio": "I was the fourth person",
//     "profileUrl": "http://admissions.berkeley.edu/sites/default/files/UCB_landingpage_images_600x300_212.jpg",
//     "friends": [1,2,3,5]
//   },
//   {
//     "name": "Person 5",
//     "tagline": "I'm person 5",
//     "bio": "I was the fifth person",
//     "profileUrl": "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
//     "friends": [6]
//   },
//   {
//     "name": "Person 6",
//     "tagline": "I'm person 6",
//     "bio": "I was the sixth person",
//     "profileUrl": "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
//     "friends": [5]
//   }
// ]
