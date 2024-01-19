/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "David Michael Innocent";

/* Step 3 - Element Variables */

document.querySelector("#name").textContent = fullname;

let currentyear = "2024";

document.querySelector("#year").textContent = currentyear;

let profilepicture = "images/profile.png";

/* Step 4 - Adding Content */

const nameElement = document.querySelector

document.querySelector("img").setAttribute("src",profilepicture);








/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
let favoriteFoods = ["pizza", "ice cream", "salad", "yam", "chicken", "rice", "dodo", "garri"];

// Modify the HTML element with the id of food to display your favorite foods array
let foodElement = document.getElementById("food"); // This is the variable you set in Step 3
foodElement.innerHTML = favoriteFoods; // This will show the array as a comma-separated string

// Declare and instantiate a variable to hold another single favorite food item
let newFood = ["burger", "eba",];

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFood); // This will add the new food to the end of the array

// Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2
foodElement.innerHTML += "<br>" + favoriteFoods; // This will show the updated array on a new line


// Remove the first element in the favorite food array
favoriteFoods.shift(); // This will remove the first element ("pizza") from the array

// Again, append the array output showing the modified array, using a line break as shown in step 5.5
foodElement.innerHTML += "<br>" + favoriteFoods; // This will show the modified array on another new line

// Remove the last element in the favorite food array
favoriteFoods.pop(); // This will remove the last element ("burger") from the array

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += "<br>" + favoriteFoods; // This will show the final array on the last line

