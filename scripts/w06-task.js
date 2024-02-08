// Get the HTML elements
const question = document.getElementById("question");
const options = Array.from(document.querySelectorAll("#options input"));
const labels = Array.from(document.querySelectorAll("#options label"));
const submit = document.getElementById("submit");
const result = document.getElementById("result");

// Declare a variable to store the current quiz index
let currentQuiz = 0;

// Declare a variable to store the score
let score = 0;

// Fetch the JSON file and parse it as an array of quiz objects
fetch("quizzes.json")
  .then((response) => response.json())
  .then((data) => {
    // Store the data in a variable
    const quizzes = data;

    // Define a function to display a quiz
    function displayQuiz() {
      // Get the current quiz object from the array
      const quiz = quizzes[currentQuiz];

      // Display the question
      question.textContent = quiz.question;

      // Display the options
      for (let i = 0; i < options.length; i++) {
        labels[i].textContent = quiz.options[i];
      }

      // Clear the previous selection
      options.forEach((option) => (option.checked = false));
    }

    // Define a function to check the answer and update the score
    function checkAnswer() {
      // Get the selected option
      const selectedOption = options.find((option) => option.checked);

      // Check if there is a selection
      if (selectedOption) {
        // Get the selected value
        const selectedValue = selectedOption.value;

        // Get the correct answer
        const correctAnswer = quizzes[currentQuiz].answer;

        // Compare the selected value and the correct answer
        if (selectedValue === correctAnswer) {
          // Increase the score by one
          score++;
        }

        // Go to the next quiz
        currentQuiz++;

        // Check if there are more quizzes
        if (currentQuiz < quizzes.length) {
          // Display the next quiz
          displayQuiz();
        } else {
          // Display the result
          result.textContent = `You scored ${score} out of ${quizzes.length}`;
          result.style.display = "block";
        }
      } else {
        // Display an alert
        alert("Please select an option");
      }
    }

    // Display the first quiz
    displayQuiz();

    // Add a click event listener to the submit button
    submit.addEventListener("click", checkAnswer);
  })
  .catch((error) => {
    // Display an error message
    console.error(error);
  });