/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Define a function named add that takes two arguments and assigns them to the parameters number1 and number2
function add(number1, number2) {
    // Return the sum of the parameters number1 and number2
    return number1 + number2;
  }
  
  // Define another function named addNumbers that gets the values of two HTML form controls with IDs of add1 and add2
  function addNumbers() {
    // Get the values of the HTML form controls and convert them to numbers
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
  
    // Call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
    document.getElementById("sum").value = add(add1, add2);
  }
  
  // Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
  document.getElementById("addNumbers").addEventListener("click", addNumbers);
  
  // This line of code is NOT located inside a function because it needs to run when the page loads, not when a function is called
// Define a function expression named subtract that takes two arguments and assigns them to the parameters number1 and number2
let subtract = function (number1, number2) {
    // Return the difference of the parameters number1 and number2
    return number1 - number2;
  };
  
  // Define another function expression named subtractNumbers that gets the values of two HTML form controls with IDs of subtract1 and subtract2
  let subtractNumbers = function () {
    // Get the values of the HTML form controls and convert them to numbers
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.getElementById("subtract2").value);
  
    // Call the subtract function using those two arguments and assign the return value to an HTML form element with an ID of difference
    document.getElementById("difference").value = subtract(subtract1, subtract2);
  };
  
  // Add a "click" event listener to the HTML button with an ID of subtractNumbers that calls the subtractNumbers function
  document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

  // Define an arrow function named multiply that takes two arguments and assigns them to the parameters number1 and number2
let multiply = (number1, number2) => {
    // Return the product of the parameters number1 and number2
    return number1 * number2;
  };
  
  // Define another arrow function named multiplyNumbers that gets the values of two HTML form controls with IDs of factor1 and factor2
  let multiplyNumbers = () => {
    // Get the values of the HTML form controls and convert them to numbers
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
  
    // Call the multiply function using those two arguments and assign the return value to an HTML form element with an ID of product
    document.getElementById("product").value = multiply(factor1, factor2);
  };
  
  // Add a "click" event listener to the HTML button with an ID of multiplyNumbers that calls the multiplyNumbers function
  document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

  // Define a function named divide that takes two arguments and assigns them to the parameters number1 and number2
function divide(number1, number2) {
    // Return the quotient of the parameters number1 and number2
    return number1 / number2;
  }
  
  // Define a function expression named divideNumbers that gets the values of two HTML form controls with IDs of dividend and divisor
  let divideNumbers = function () {
    // Get the values of the HTML form controls and convert them to numbers
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
  
    // Call the divide function using those two arguments and assign the return value to an HTML form element with an ID of quotient
    document.getElementById("quotient").value = divide(dividend, divisor);
  };
  
  // Add a "click" event listener to the HTML button with an ID of divideNumbers that calls the divideNumbers function
  document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

  // Add an event listener for the Get Total Due button when clicked that invokes the following functionality
document.getElementById("getTotal").addEventListener("click", function () {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    let subtotal = Number(document.getElementById("subtotal").value);
  
    // Check IF the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount
    if (document.getElementById("member").checked) {
      subtotal = subtotal * 0.8;
    }
  
    // Output the total to the the total span in the format shown with two decimals using a template string
    document.getElementById("total").textContent = `Total: $${subtotal.toFixed(
      2
    )}`;
  });

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
 // Declare and instantiate an array variable to hold the numbers 1 through 13
 let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById("array").innerHTML = array;

/* Output Odds Only Array */
// Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds
let odds = array.filter(n => n % 2 === 1);
document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */
// Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens
let evens = array.filter(n => n % 2 === 0);
document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray
let sumOfArray = array.reduce((a, b) => a + b, 0);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
// Use the map() array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied
let multiplied = array.map(n => n *2);
document.getElementById("multiplied").innerHTML = multiplied

/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied
let sumOfMultiplied = multiplied.reduce((a, b) => a + b, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
