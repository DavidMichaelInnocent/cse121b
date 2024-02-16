
  // JavaScript code to get the user input and display the welcome message
  function greetUser() {
    // Get the name from the input element
    let name = document.getElementById("name").value;
    // Check if the name is not empty
    if (name.trim() != "") {
    // Hide the input and button elements
    document.getElementById("name").style.display = "none";
    document.getElementById("submi").style.display = "none";
    // Show the message element with the greeting
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = `Hello, ${name}! Welcome to my page. Nice to have you here!`;
    } else {
    // Alert the user to enter a valid name
    alert("Please enter a valid name!");
    }
   }
// Declare a virable to hold the picture
let picture = "images/profile.png";
   // Get the HTML element
document.querySelector("img").setAttribute("src",picture);
// Declare variable to hold information name about the author
let myname = "David Michael Innocent";
// Get the HTML element
document.querySelector("#nam").textContent = myname
// Delare a variable that that hold the information about the quiz.
let information = ["Once answer the first question, click Submit before procced to the next question without submitted"];
// Modify the HTML element with the id of infor to display your information array
let infor = document.getElementById("info"); 

// Declare and instantiate a variable to hold another single infomation the quiz
let newiformation = ["You won't get to next question. remember once you answer qustions, submit before attempt to the Next. once click Restart it will authomatically clear the data, and return you to main manuel."];
// Add the value stored in this new variable to your quiz information array
// This will add the new quiz information to the end of the array
information.push(newiformation);
// This will show the array as a comma-separated string
infor.innerHTML = information
// Use the fetch API to get the quiz data from the JSON file in the computer folder
// Assume the file name is quiz.json and it is in the same folder as the HTML file
fetch("quiz.json")
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Store the quiz data in a variable
    let quizData = data;

    // Get the HTML elements by their IDs
    let questionText = document.getElementById("question-text");
    let optionA = document.getElementById("option-a");
    let optionALabel = document.getElementById("option-a-label");
    let optionB = document.getElementById("option-b");
    let optionBLabel = document.getElementById("option-b-label");
    let optionC = document.getElementById("option-c");
    let optionCLabel = document.getElementById("option-c-label");
    let optionD = document.getElementById("option-d");
    let optionDLabel = document.getElementById("option-d-label");
    let submit = document.getElementById("submit");
    let next = document.getElementById("next");
    let restart = document.getElementById("restart");
    let resultText = document.getElementById("result-text");

    // Initialize some variables to keep track of the quiz state
    let currentQuestion = 0; // The index of the current question
    let score = 0; // The number of correct answers
    let answered = false; // Whether the user has answered the current question

    // Define a function to display the current question and its choices
    function displayQuestion() {
      // Get the current question object from the quiz data
      let question = quizData.quiz[currentQuestion];

      // Set the question text and the choices labels
      questionText.textContent = question.question;
      optionALabel.textContent = question.choices[0];
      optionBLabel.textContent = question.choices[1];
      optionCLabel.textContent = question.choices[2];
      optionDLabel.textContent = question.choices[3];

      // Reset the radio buttons and the result text
      optionA.checked = false;
      optionB.checked = false;
      optionC.checked = false;
      optionD.checked = false;
      resultText.textContent = "";

      // Enable the submit button and disable the next button
      submit.disabled = false;
      next.disabled = true;

      // Set the answered flag to false
      answered = false;
    }

    // Define a function to check the user's answer and display the result
    function checkAnswer() {
      // Get the current question object from the quiz data
      let question = quizData.quiz[currentQuestion];

      // Get the user's selected option value
      let userAnswer = document.querySelector("input[name='option']:checked").value;

      // Compare the user's answer with the correct answer
      if (userAnswer == question.correctAnswer) {
        // If the answer is correct, increment the score and show a positive feedback
        score++;
        resultText.textContent = "Correct! Well done.";
      } else {
        // If the answer is wrong, show a negative feedback and the correct answer
        resultText.textContent = "Wrong. The correct answer is " + question.choices[question.correctAnswer] + ".";
      }

      // Disable the submit button and enable the next button
      submit.disabled = true;
      next.disabled = false;

      // Set the answered flag to true
      answered = true;
    }

    // Define a function to go to the next question or show the final score
    function nextQuestion() {
      // Increment the current question index
      currentQuestion++;
      // Check if there are more questions left
      if (currentQuestion < quizData.quiz.length) {
        // If yes, display the next question
        displayQuestion();
      } else {
        // If no, show the final score and a message
        questionText.textContent = "You have completed the quiz.";
        resultText.textContent = "Your final score is " + score + " out of " +  quizData.quiz.length + ".";
        // Hide the options and the controls
        document.querySelector(".options").style.display = "none";
        document.querySelector(".controls").style.display = "none";
      }
    }

    // Define a function to restart the quiz
    function restartQuiz() {
      // Reset the current question index, the score, and the answered flag
      currentQuestion = 0;
      score = 0;
      answered = false;

      // Display the first question
      displayQuestion();

      // Show the options and the controls
      document.querySelector(".options").style.display = "block";
      document.querySelector(".controls").style.display = "block";
    }

    // Add event listeners to the buttons
    submit.addEventListener("click", checkAnswer);
    next.addEventListener("click", nextQuestion);
    restart.addEventListener("click", restartQuiz);

    // Display the first question when the page loads
    displayQuestion();
  })
  .catch(error => {
    // Handle any errors that may occur while fetching the Json file
    console.error(error);
    // Show an error message to the user
    document.getElementById("question-text").textContent = "Sorry, something went wrong. Please check your JSON file or try again later.";
  });

// Use fetch to get the data from the JSON file
fetch('african.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the data array and create a card for each country
    data.forEach(country => {
    // Create a div element with the class card
    let card = document.createElement('div');
    card.className = 'card';
    // Create an img element with the class card-image and the src attribute from the imageurl property
    let image = document.createElement('img');
    image.className = 'card-image';
    image.src = country.imageurl;

    // Create a div element with the class card-content
    let content = document.createElement('div');
    content.className = 'card-content';

    // Create a h3 element with the class card-title and the text content from the name property
    let title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = country.name;

    // Create a div element with the class card-info
    let info = document.createElement('div');
    info.className = 'card-info';

    // Create a span element for each of the following properties: capital, population, currency
    let capital = document.createElement('span');
    capital.textContent = `Capital: ${country.capital}`;

    let population = document.createElement('span');
    population.textContent = `Population: ${country.population}`;

    let currency = document.createElement('span');
    currency.textContent = `Currency: ${country.currency}`;

    // Append the span elements to the card-info element
    info.append(capital, population, currency);

    // Create a button element with the class card-button and the text content 'Learn More'
    let button = document.createElement('button');
    button.className = 'card-button';
    button.textContent = 'Learn More';


    // Add an event listener to the button that will switch to a different country based on the name property
    button.addEventListener('click', () => {
      switch (country.name) {
        case 'Benin':
              // Do something for Benin
          break;
        case 'Burkina Faso':
              // Do something for Burkina Faso
          break;
        case 'Cape Verde':
              // Do something for Cape Verde
          break;
        case 'Gambia':
              // Do something for Gambia
          break;
        case 'Ghana':
                // Do something for Ghana
          break;
        case 'Guinea':
                 // Do something for Guinea
          break;
        case 'Guinea-Bissau':
               // Do something for Guinea-Bissau
          break;
        case 'Ivory Coast':
                // Do something for Ivory Coast
          break;
        case 'Liberia':
              // Do something for Liberia
          break;
        case 'Mali':
              // Do something for Mali
          break;
        case 'Mauritania':
                 // Do something for Mauritania
          break;
      case 'Niger':
            // Do something for Niger
          break;
      case 'Nigeria':
           // Do something for Nigeria
          break;
            // Do something for Senegal
      case "Senegal":
          break;
            // DO something for Togo
      case "Togo":
          break;
        default:
            // Do something for unknown country
          break;
      }
     });

     // Append the title, info, and button elements to the card-content element
      content.append(title, info, button);

    // Append the image and content elements to the card element
    card.append(image, content);

    // Append the card element to the container element
    document.getElementById('countries').append(card);
    });
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
 });

    // Create an array of numbers 1 to 20
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 13, 14, 15, 16, 17, 18, 19, 20];
    // Use the .map() method to create a new array with the square of each number
    let squares = numbers.map(function(x) {
      return x * x;
    });
    // Display the original and modified arrays on the web page
    document.getElementById("original").innerHTML = "Original array: " + numbers;
    document.getElementById("modified").innerHTML = "Modified array: " + squares;
    