// Fetch the JSON file from the local server
fetch("w6.json")
  .then((response) => response.json())
  .then((data) => {
    // Store the questions array in a variable
    let questions = data.questions;

    // Loop through the questions array
    for (let i = 0; i < questions.length; i++) {
      // Get the current question object
      let question = questions[i];

      // Get the dom object from the question
      let dom = question.dom;

      // Use the dom method to select the HTML element by id
      let element = documentdom.method;

      // Use the dom action to change the innerHTML of the element
      element[dom.action] = question.question;

      // Get the options array from the question
      let options = question.options;

      // Create an empty array to store the HTML for the options
      let optionsHTML = [];

      // Loop through the options array
      for (let j = 0; j < options.length; j++) {
        // Get the current option
        let option = options[j];

        // Use a template literal to create the HTML for the option
        let optionHTML = `<div class="option"><input type="radio" name="question${i + 1}" value="${j}">${option}</div>`;

        // Push the optionHTML to the optionsHTML array
        optionsHTML.push(optionHTML);
      }

      // Join the optionsHTML array into a string
      let optionsString = optionsHTML.join("");

      // Get the HTML element for the options by id
      let optionsElement = document.getElementById(`options${i + 1}`);

      // Set the innerHTML of the optionsElement to the optionsString
      optionsElement.innerHTML = optionsString;
    }

    // Get the submit button by id
    let submitButton = document.getElementById("submit");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function () {
      // Create a variable to store the score
      let score = 0;

      // Loop through the questions array
      for (let i = 0; i < questions.length; i++) {
        // Get the current question object
        let question = questions[i];

        // Get the answer from the question
        let answer = question.answer;

        // Get the selected option by name
        let selectedOption = document.querySelector(
          `input[name="question${i + 1}"]:checked`
        );

        // If the selected option is not null
        if (selectedOption) {
          // Get the value of the selected option
          let value = selectedOption.value;

          // If the value is equal to the answer
          if (value == answer) {
            // Increment the score by one
            score++;
          }
        }
      }

      // Get the result element by id
      let resultElement = document.getElementById("result");

      // Use a template literal to display the score in the result element
      resultElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    });
  })
  .catch((error) => {
    // If there is an error, log it to the console
    console.error(error);
  });