// Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.getElementById("temples");

// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

// Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
const displayTemples = (temples) => {
  // Process each temple in the temple array using a forEach method and do the following for each temple item:
  temples.forEach((temple) => {
    // Create an HTML <article> element (createElement).
    let article = document.createElement("article");

    // Create an HTML <h3> element and add the temple's templeName property to this new element.
    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the global templesElement variable declared in Step 2.
    templesElement.appendChild(article);
  });
};

// Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
  // In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
  
const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

  // Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
  templeList = await response.json();

  // The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
  displayTemples(templeList);
};

// Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
  // Use a while loop to remove the first child of the templesElement until it has no more children.
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

// Declare a function expression named filterTemples.
const filterTemples = (temples) => {
  // In this function, first call the reset function to clear the output.
  reset();

  // Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
  let filter = document.getElementById("filtered").value;

  // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
  switch (filter) {
    // For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
    case "utah":
      // "utah": filter for temples where the location contains "Utah" as a string.
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      // "nonutah": filter for temples where the location does not contain "Utah" as a string.
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      // "older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      // "all": no filter. Just use temples as the argument.
      displayTemples(temples);
      break;
    default:
      // If none of the cases match, display an error message.
      alert("Invalid filter option");
  }
};

// Add a change event listener to the HTML element with an ID of filtered that calls the filterTemples function and sends a arrow function result with the templeList as the argument.
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

// Test your code by calling the getTemples function at the end of your JavaScript file.
getTemples();