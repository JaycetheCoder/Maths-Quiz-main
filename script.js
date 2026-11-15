 
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE QUIZ SCRIPT
========================================= */


/* =========================================
   1. PAGE ELEMENTS
========================================= */

const homePage = document.querySelector("#homePage");
const quizPage = document.querySelector("#quizPage");
const resultsPage = document.querySelector("#resultsPage");

const subjectSelect = document.querySelector("#subjectSelect");
const yearSelect = document.querySelector("#yearSelect");
const levelSelect = document.querySelector("#levelSelect");

const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");
const homeBtn = document.querySelector("#homeBtn");
const restartBtn = document.querySelector("#restartBtn");
const resultsHomeBtn = document.querySelector("#resultsHomeBtn");

const quizTitle = document.querySelector("#quizTitle");
const questionText = document.querySelector("#questionText");
const optionsDiv = document.querySelector("#options");
const feedback = document.querySelector("#feedback");

const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");

const finalScore = document.querySelector("#finalScore");
const percentage = document.querySelector("#percentage");
const resultMessage = document.querySelector("#resultMessage");
const resultDescription = document.querySelector("#resultDescription");

const enterBtn = document.getElementById("enterBtn");
const landingPage = document.getElementById("landingPage");


/* =========================================
   2. QUIZ VARIABLES
========================================= */

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


/* =========================================
   3. CREATE EXPLANATION ELEMENT
========================================= */

// This creates the explanation area automatically.
// You do not need to edit your HTML.

let explanationBox = document.getElementById("explanationBox");

if (!explanationBox && feedback?.parentElement) {

    explanationBox = document.createElement("div");

    explanationBox.id = "explanationBox";

    explanationBox.style.display = "none";
    explanationBox.style.marginTop = "12px";
    explanationBox.style.padding = "14px";
    explanationBox.style.borderRadius = "12px";
    explanationBox.style.background = "#eef6ff";
    explanationBox.style.color = "#293650";
    explanationBox.style.lineHeight = "1.6";
    explanationBox.style.textAlign = "left";

    feedback.insertAdjacentElement("afterend", explanationBox);

}


/* =========================================
   4. SHUFFLE QUESTIONS
========================================= */

function shuffleQuestions(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;

}


/* =========================================
   5. PAGE NAVIGATION
========================================= */

function enterbtn() {

    if (landingPage) {
        landingPage.style.display = "none";
    }

    if (homePage) {
        homePage.style.display = "block";
    }

}

function showPage(page) {

    if (homePage) homePage.style.display = "none";
    if (quizPage) quizPage.style.display = "none";
    if (resultsPage) resultsPage.style.display = "none";

    if (page) {
        page.style.display = "block";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   6. START QUIZ
========================================= */

function startQuiz() {

    selectedSubject = subjectSelect.value;
    selectedYear = yearSelect.value;
    selectedLevel = levelSelect.value;

    if (!selectedSubject || !selectedYear || !selectedLevel) {

        alert("Please select a subject, year and level.");

        return;

    }

    const availableQuestions =
        questions[selectedSubject]?.[selectedYear]?.[selectedLevel];

    if (!availableQuestions || availableQuestions.length === 0) {

        alert("No questions are available for this selection.");

        return;

    }

    questionSet = shuffleQuestions(availableQuestions).slice(
        0,
        Math.min(QUESTIONS_PER_QUIZ, availableQuestions.length)
    );

    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;

    const subjectName =
        selectedSubject.charAt(0).toUpperCase() +
        selectedSubject.slice(1);

    const yearName =
        selectedYear.replace("year", "Year ");

    const levelName =
        selectedLevel.replace("level", "Level ");

    quizTitle.textContent =
        `${subjectName} | ${yearName} | ${levelName}`;

    nextBtn.textContent = "Next Question →";
    nextBtn.disabled = true;
    nextBtn.style.display = "block";

    showPage(quizPage);

    displayQuestion();

}


/* =========================================
   7. UPDATE PROGRESS
========================================= */

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


/* =========================================
   8. DISPLAY QUESTION
========================================= */

function displayQuestion() {

    attempts = 0;
    answered = false;

    const question = questionSet[currentQuestion];

    questionText.textContent = question.q;

    optionsDiv.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "";

    if (explanationBox) {

        explanationBox.style.display = "none";
        explanationBox.textContent = "";

    }

    nextBtn.disabled = true;

    updateProgress();

    // Display topic if available.

    if (question.topic) {

        quizTitle.textContent =
            `${selectedSubject.toUpperCase()} | ${selectedYear.replace("year", "Year ")} | ${selectedLevel.replace("level", "Level ")} | ${question.topic}`;

    }

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


/* =========================================
   9. SHOW EXPLANATION
========================================= */

function showExplanation(question) {

    if (!explanationBox) return;

    const explanation =
        question.explanation ||
        "Review the question and think about why the correct answer works.";

    explanationBox.textContent =
        "💡 Explanation: " + explanation;

    explanationBox.style.display = "block";

}


/* =========================================
   10. CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    const question = questionSet[currentQuestion];

    attempts++;

    const allButtons =
        optionsDiv.querySelectorAll("button");


    // CORRECT ANSWER

    if (selectedIndex === question.answer) {

        answered = true;

        score++;

        selectedButton.classList.add("correct");

        feedback.textContent =
            "✓ Correct! Brilliant work!";

        feedback.className = "correct-feedback";

        allButtons.forEach(button => {
            button.disabled = true;
        });

        nextBtn.disabled = false;

        showExplanation(question);

        updateScoreOnly();

        return;

    }


    // INCORRECT ANSWER

    selectedButton.classList.add("wrong");
    selectedButton.disabled = true;

    if (attempts < MAX_ATTEMPTS) {

        feedback.textContent =
            "✗ Not quite! You have ONE more chance.";

        feedback.className = "wrong-feedback";

    } else {

        answered = true;

        feedback.textContent =
            "The correct answer is: " +
            question.options[question.answer];

        feedback.className = "wrong-feedback";

        allButtons[question.answer].classList.add("correct");

        allButtons.forEach(button => {
            button.disabled = true;
        });

        nextBtn.disabled = false;

        showExplanation(question);

    }

}


/* =========================================
   11. UPDATE SCORE
========================================= */

function updateScoreOnly() {

    scoreText.textContent = `Score: ${score}`;

}


/* =========================================
   12. NEXT QUESTION
========================================= */

function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questionSet.length) {

        displayQuestion();

    } else {

        showResults();

    }

}


/* =========================================
   13. SHOW RESULTS
========================================= */

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

    } else if (resultPercentage >= 80) {

        message = "Excellent Work! 🌟";

        description =
            "You have done brilliantly. Keep it up!";

    } else if (resultPercentage >= 60) {

        message = "Well Done! 👏";

        description =
            "Great effort! Keep practising and improving!";

    } else if (resultPercentage >= 40) {

        message = "Good Try! 💪";

        description =
            "You are learning! Keep practising and try again.";

    } else {

        message = "Keep Learning! 📚";

        description =
            "Every mistake is a chance to learn something new.";

    }

    resultMessage.textContent = message;

    resultDescription.textContent = description;

}


/* =========================================
   14. RETURN HOME
========================================= */

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

    if (explanationBox) {

        explanationBox.style.display = "none";
        explanationBox.textContent = "";

    }

    if (progressBar) {

        progressBar.style.width = "0%";

    }

}


/* =========================================
   15. RESTART QUIZ
========================================= */

function restartQuiz() {

    startQuiz();

}


/* =========================================
   16. BUTTON EVENTS
========================================= */

if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextQuestion);
}

if (homeBtn) {
    homeBtn.addEventListener("click", returnHome);
}

if (restartBtn) {
    restartBtn.addEventListener("click", restartQuiz);
}

if (resultsHomeBtn) {
    resultsHomeBtn.addEventListener("click", returnHome);
}

if (enterBtn) {
    enterBtn.addEventListener("click", enterbtn);
}


/* =========================================
   17. KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", function(event) {

    if (!quizPage || quizPage.style.display !== "block") {
        return;
    }

    if (
        event.key === "Enter" &&
        nextBtn &&
        !nextBtn.disabled &&
        answered
    ) {

        nextQuestion();

    }

});


/* =========================================
   18. QUIZ READY
========================================= */

console.log("School Quiz Learning Hub is ready!");

console.log("Subjects:", Object.keys(questions));

console.log("Years: 1–11");

console.log("Levels: 1–5");

console.log("Two attempts per question enabled.");

