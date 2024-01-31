/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};
myProfile.name = "David Michael Innocent";


/* Populate Profile Object with placesLive objects */

myProfile.photo = "images/profile.png";

myProfile.favoriteFoods = ["Bread", "Yam", "Milk", "Plantain", "Beans","Water Mello", "Garri Eba", "Semoviter", "Rice"];

myProfile.hobbies = ["Chatting", "Fathball", "Playing Game", "Music Listen", "Technology"]

myProfile.placelived = [];

myProfile.placelived.push({place: "Nigerian, Ibadan", length: "5years"});
myProfile.placelived.push({place: "Ghana, Accra", length: "2years"});
 myProfile.placelived.push({place: "Nigerian, Ebonyi", length: "10years"})


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(food){
    let  li = document.createElement("li")
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(function(hobby){
    let li =  document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);

});

/* Places Lived DataList */
myProfile.placelived.forEach(function(place){
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent =place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});

