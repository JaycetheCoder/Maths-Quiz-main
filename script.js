/* =========================================
   SCHOOL QUIZ - COMPLETE SCRIPT
   ========================================= */

// =========================================
// 1. PAGE ELEMENTS
// =========================================

const homePage = document.querySelector("#homePage");
const quizPage = document.querySelector("#quizPage");
const resultsPage = document.querySelector("#resultsPage");

// SELECTIONS
const subjectSelect = document.querySelector("#subjectSelect");
const yearSelect = document.querySelector("#yearSelect");
const levelSelect = document.querySelector("#levelSelect");

// BUTTONS
const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const homeBtn = document.querySelector("#homeBtn");
const restartBtn = document.querySelector("#restartBtn");
const resultsHomeBtn = document.querySelector("#resultsHomeBtn");

// QUIZ ELEMENTS
const quizTitle = document.querySelector("#quizTitle");
const questionText = document.querySelector("#questionText");
const optionsDiv = document.querySelector("#options");
const feedback = document.querySelector("#feedback");

const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

// RESULTS ELEMENTS
const finalScore = document.querySelector("#finalScore");
const percentage = document.querySelector("#percentage");
const resultMessage = document.querySelector("#resultMessage");
const resultDescription = document.querySelector("#resultDescription");

// LANDING PAGE ELEMENT
const enterBtn = document.getElementById("enterBtn");
const landingPage = document.getElementById("landingPage");



// =========================================
// 2. QUIZ VARIABLES
// =========================================

let questionSet = [];

let currentQuestion = 0;
let score = 0;

let attempts = 0;
let answered = false;

let selectedSubject = "";
let selectedYear = "";
let selectedLevel = "";

const QUESTIONS_PER_QUIZ = 10;
const MAX_ATTEMPTS = 2;


// =========================================
// 3. SHUFFLE QUESTIONS
// =========================================

function shuffleQuestions(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];

    }

    return shuffled;
}


// =========================================
// 4. PAGE NAVIGATION
// =========================================

//LANDING PAGE
function enterbtn() {
    console.log("Clicked!!!")
    landingPage.style.display = "none";
    homePage.style.display = "block";
    console.log("enter button has been clicked")
}

function showPage(page) {

    homePage.style.display = "none";
    quizPage.style.display = "none";

    if (resultsPage) {
        resultsPage.style.display = "none";
    }

    page.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================================
// 5. START QUIZ
// =========================================

function startQuiz() {

    selectedSubject = subjectSelect.value;
    selectedYear = yearSelect.value;
    selectedLevel = levelSelect.value;

    // Check selections

    if (!selectedSubject || !selectedYear || !selectedLevel) {

        alert("Please select a subject, year and level.");

        return;
    }

    // Find questions

    const availableQuestions =
        questions[selectedSubject]?.[selectedYear]?.[selectedLevel];

    if (!availableQuestions || availableQuestions.length === 0) {

        alert("No questions are available for this selection.");

        return;
    }

    // Select random questions

    questionSet = shuffleQuestions(availableQuestions)
        .slice(
            0,
            Math.min(QUESTIONS_PER_QUIZ, availableQuestions.length)
        );

    // Reset quiz

    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;

    // Create title

    const subjectName =
        selectedSubject.charAt(0).toUpperCase() +
        selectedSubject.slice(1);

    const yearName =
        selectedYear.replace("year", "Year ");

    const levelName =
        selectedLevel.replace("level", "Level ");

    quizTitle.textContent =
        `${subjectName} | ${yearName} | ${levelName}`;

    // Reset buttons

    nextBtn.textContent = "Next Question →";
    nextBtn.disabled = true;
    nextBtn.style.display = "block";

    showPage(quizPage);

    displayQuestion();

}


// =========================================
// 6. UPDATE SCORE AND PROGRESS
// =========================================

function updateProgress() {

    scoreText.textContent = `Score: ${score}`;

    progressText.textContent =
        `Question ${currentQuestion + 1}/${questionSet.length}`;

    const progress =
        ((currentQuestion + 1) / questionSet.length) * 100;

    if (progressBar) {

        progressBar.style.width = `${progress}%`;

    }

}


// =========================================
// 7. DISPLAY QUESTION
// =========================================

function displayQuestion() {

    // Reset attempts for each question

    attempts = 0;
    answered = false;

    const question = questionSet[currentQuestion];

    questionText.textContent = question.q;

    optionsDiv.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "";

    nextBtn.disabled = true;

    updateProgress();

    // Create answer buttons

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";

        button.textContent = option;

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        optionsDiv.appendChild(button);

    });

}


// =========================================
// 8. CHECK ANSWER - TWO ATTEMPTS ONLY
// =========================================

function checkAnswer(selectedIndex, selectedButton) {

    // Prevent extra answers

    if (answered) return;

    const question = questionSet[currentQuestion];

    // Count the attempt

    attempts++;

    // ---------------------------------
    // CORRECT ANSWER
    // ---------------------------------

    if (selectedIndex === question.answer) {

        answered = true;

        score++;

        selectedButton.classList.add("correct");

        feedback.textContent =
            "✓ Correct! Brilliant work!";

        feedback.className = "correct-feedback";

        // Disable all answers

        optionsDiv.querySelectorAll("button").forEach(button => {

            button.disabled = true;

        });

        nextBtn.disabled = false;

        updateScoreOnly();

    }

    // ---------------------------------
    // WRONG ANSWER
    // ---------------------------------

    else {

        selectedButton.classList.add("wrong");

        selectedButton.disabled = true;

        // FIRST WRONG ATTEMPT

        if (attempts < MAX_ATTEMPTS) {

            feedback.textContent =
                "✗ Not quite! You have ONE more chance.";

            feedback.className = "wrong-feedback";

        }

        // SECOND WRONG ATTEMPT

        else {

            answered = true;

            feedback.textContent =
                "✗ No more chances! The correct answer is: " +
                question.options[question.answer];

            feedback.className = "wrong-feedback";

            // Highlight correct answer

            const allButtons =
                optionsDiv.querySelectorAll("button");

            allButtons[question.answer].classList.add("correct");

            // Disable all answers

            allButtons.forEach(button => {

                button.disabled = true;

            });

            // Allow next question

            nextBtn.disabled = false;

        }

    }

}


// =========================================
// 9. UPDATE SCORE
// =========================================

function updateScoreOnly() {

    scoreText.textContent = `Score: ${score}`;

}


// =========================================
// 10. NEXT QUESTION
// =========================================

function nextQuestion() {

    // Cannot continue until answered

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questionSet.length) {

        displayQuestion();

    } else {

        showResults();

    }

}


// =========================================
// 11. SHOW RESULTS
// =========================================

function showResults() {

    if (!resultsPage) {

        alert(
            `Quiz complete! Your score is ${score}/${questionSet.length}`
        );

        returnHome();

        return;
    }

    showPage(resultsPage);

    const total = questionSet.length;

    const resultPercentage =
        Math.round((score / total) * 100);

    finalScore.textContent = `${score}/${total}`;

    percentage.textContent = `${resultPercentage}%`;

    let message;
    let description;

    if (resultPercentage === 100) {

        message = "Perfect Score! 🏆";

        description =
            "Amazing! You answered every question correctly!";

    }

    else if (resultPercentage >= 80) {

        message = "Excellent Work! 🌟";

        description =
            "You have done brilliantly. Keep it up!";

    }

    else if (resultPercentage >= 60) {

        message = "Well Done! 👏";

        description =
            "Great effort! Keep practising and improving!";

    }

    else if (resultPercentage >= 40) {

        message = "Good Try! 💪";

        description =
            "You are learning! Keep practising and try again.";

    }

    else {

        message = "Keep Learning! 📚";

        description =
            "Every mistake is a chance to learn something new.";

    }

    resultMessage.textContent = message;

    resultDescription.textContent = description;

}


// =========================================
// 12. RETURN HOME
// =========================================

function returnHome() {

    showPage(homePage);

    questionSet = [];

    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;

    nextBtn.disabled = true;

    optionsDiv.innerHTML = "";

    feedback.textContent = "";

    if (progressBar) {

        progressBar.style.width = "0%";

    }

}


// =========================================
// 13. RESTART QUIZ
// =========================================

function restartQuiz() {

    startQuiz();

}


// =========================================
// 14. BUTTON EVENTS
// =========================================

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

homeBtn.addEventListener("click", returnHome);

if (restartBtn) {

    restartBtn.addEventListener("click", restartQuiz);

}

if (resultsHomeBtn) {

    resultsHomeBtn.addEventListener("click", returnHome);

}


// =========================================
// 15. KEYBOARD SUPPORT
// =========================================

document.addEventListener("keydown", function(event) {

    if (quizPage.style.display !== "block") return;

    if (
        event.key === "Enter" &&
        !nextBtn.disabled &&
        answered
    ) {

        nextQuestion();

    }

});


// =========================================
// 16. QUIZ READY
// =========================================

console.log("School Quiz is ready!");

console.log("Two attempts per question enabled.");