/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "David Michael Innocent";

/* Step 3 - Element Variables */

document.querySelector("#name").textContent = fullname;

const currentyear = "2024";

document.querySelector("#year").textContent = currentyear;

const picture = "images/profile.png";

/* Step 4 - Adding Content */

document.querySelector("img").setAttribute("src",picture);





/* Step 5 - Array */


// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = ["Rice", "Chicken, Yam, Shawama, Eba, Bread, Beans, plantain"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavoriteFood = "Cook Beans";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2.
document.querySelector("#food").textContent = favoriteFoods;

