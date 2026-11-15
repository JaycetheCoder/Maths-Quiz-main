/* =========================================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE QUIZ SCRIPT
========================================================= */

"use strict";

/* PAGE ELEMENTS */
const homePage = document.querySelector("#homePage");
const quizPage = document.querySelector("#quizPage");
const resultsPage = document.querySelector("#resultsPage");
const landingPage = document.querySelector("#landingPage");

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

/* CREATE EXPLANATION PANEL */
let explanationBox = document.querySelector("#explanationBox");

if (!explanationBox && feedback) {
    explanationBox = document.createElement("div");
    explanationBox.id = "explanationBox";
    explanationBox.setAttribute("aria-live", "polite");
    explanationBox.hidden = true;
    feedback.insertAdjacentElement("afterend", explanationBox);
}

/* SHUFFLE QUESTIONS */
function shuffleQuestions(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

/* LANDING PAGE */
function enterbtn() {
    if (landingPage) landingPage.style.display = "none";
    if (homePage) homePage.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* SHOW PAGE */
function showPage(page) {
    [homePage, quizPage, resultsPage].forEach(section => {
        if (section) section.style.display = "none";
    });

    if (page) {
        page.style.display = "block";
        page.classList.remove("page-enter");
        void page.offsetWidth;
        page.classList.add("page-enter");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* START QUIZ */
function startQuiz() {
    if (!subjectSelect || !yearSelect || !levelSelect) return;

    selectedSubject = subjectSelect.value;
    selectedYear = yearSelect.value;
    selectedLevel = levelSelect.value;

    if (!selectedSubject || !selectedYear || !selectedLevel) {
        alert("Please select a subject, year and level.");
        return;
    }

    if (typeof questions === "undefined") {
        alert("The question database could not be loaded. Please refresh the page.");
        return;
    }

    const availableQuestions =
        questions[selectedSubject]?.[selectedYear]?.[selectedLevel];

    if (!Array.isArray(availableQuestions) || availableQuestions.length === 0) {
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
        selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1);

    const yearName = selectedYear.replace("year", "Year ");
    const levelName = selectedLevel.replace("level", "Level ");

    quizTitle.textContent = `${subjectName} | ${yearName} | ${levelName}`;

    if (nextBtn) {
        nextBtn.textContent = "Next Question →";
        nextBtn.disabled = true;
    }

    showPage(quizPage);
    displayQuestion();
}

/* UPDATE PROGRESS */
function updateProgress() {
    const total = questionSet.length || 1;
    const percentComplete = Math.round((currentQuestion / total) * 100);

    if (scoreText) {
        scoreText.textContent = `Score: ${score}`;
    }

    if (progressText) {
        progressText.textContent =
            `Question ${currentQuestion + 1}/${questionSet.length}`;
    }

    if (progressBar) {
        progressBar.style.width = `${percentComplete}%`;

        const track = progressBar.parentElement;
        if (track) {
            track.setAttribute("aria-valuenow", String(percentComplete));
        }
    }
}

/* DISPLAY QUESTION */
function displayQuestion() {
    if (!questionSet[currentQuestion]) return;

    attempts = 0;
    answered = false;

    const question = questionSet[currentQuestion];

    questionText.textContent = question.q;
    optionsDiv.innerHTML = "";

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "";
    }

    if (explanationBox) {
        explanationBox.hidden = true;
        explanationBox.textContent = "";
    }

    if (nextBtn) nextBtn.disabled = true;

    updateProgress();

    const subjectName = selectedSubject.toUpperCase();
    const yearName = selectedYear.replace("year", "Year ");
    const levelName = selectedLevel.replace("level", "Level ");

    quizTitle.textContent = question.topic
        ? `${subjectName} | ${yearName} | ${levelName} | ${question.topic}`
        : `${subjectName} | ${yearName} | ${levelName}`;

    const questionCard = document.querySelector(".question-card");

    if (questionCard) {
        questionCard.classList.remove("question-enter");
        void questionCard.offsetWidth;
        questionCard.classList.add("question-enter");
    }

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        optionsDiv.appendChild(button);
    });
}

/* SHOW EXPLANATION */
function showExplanation(question) {
    if (!explanationBox) return;

    const explanation = question.explanation ||
        "Review the question and think about why the correct answer works.";

    explanationBox.textContent = `💡 Explanation: ${explanation}`;
    explanationBox.hidden = false;
}

/* CHECK ANSWER */
function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    const question = questionSet[currentQuestion];
    if (!question) return;

    attempts++;

    const allButtons = optionsDiv.querySelectorAll("button");

    if (selectedIndex === Number(question.answer)) {
        answered = true;
        score++;

        selectedButton.classList.add("correct");

        if (feedback) {
            feedback.textContent = "✓ Correct! Brilliant work!";
            feedback.className = "correct-feedback";
        }

        allButtons.forEach(button => {
            button.disabled = true;
        });

        if (nextBtn) nextBtn.disabled = false;

        showExplanation(question);
        updateScoreOnly();

        return;
    }

    selectedButton.classList.add("wrong");
    selectedButton.disabled = true;

    if (attempts < MAX_ATTEMPTS) {
        if (feedback) {
            feedback.textContent = "✗ Not quite! You have one more chance.";
            feedback.className = "wrong-feedback";
        }
    } else {
        answered = true;

        if (feedback) {
            feedback.textContent =
                `The correct answer is: ${question.options[question.answer]}`;

            feedback.className = "wrong-feedback";
        }

        if (allButtons[question.answer]) {
            allButtons[question.answer].classList.add("correct");
        }

        allButtons.forEach(button => {
            button.disabled = true;
        });

        if (nextBtn) nextBtn.disabled = false;

        showExplanation(question);
    }
}

/* UPDATE SCORE */
function updateScoreOnly() {
    if (scoreText) {
        scoreText.textContent = `Score: ${score}`;
    }
}

/* NEXT QUESTION */
function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questionSet.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

/* RESULTS */
function showResults() {
    if (!resultsPage) {
        alert(`Quiz complete! Your score is ${score}/${questionSet.length}`);
        returnHome();
        return;
    }

    showPage(resultsPage);

    const total = questionSet.length;

    const resultPercentage = total
        ? Math.round((score / total) * 100)
        : 0;

    if (finalScore) {
        finalScore.textContent = `${score}/${total}`;
    }

    if (percentage) {
        percentage.textContent = `${resultPercentage}%`;
    }

    let message;
    let description;

    if (resultPercentage === 100) {
        message = "Perfect Score! 🏆";
        description = "Amazing! You answered every question correctly!";
    } else if (resultPercentage >= 80) {
        message = "Excellent Work! 🌟";
        description = "You have done brilliantly. Keep it up!";
    } else if (resultPercentage >= 60) {
        message = "Well Done! 👏";
        description = "Great effort! Keep practising and improving!";
    } else if (resultPercentage >= 40) {
        message = "Good Try! 💪";
        description = "You are learning! Keep practising and try again.";
    } else {
        message = "Keep Learning! 📚";
        description = "Every mistake is a chance to learn something new.";
    }

    if (resultMessage) {
        resultMessage.textContent = message;
    }

    if (resultDescription) {
        resultDescription.textContent =
            `${description} You scored ${score} out of ${total} questions.`;
    }

    const resultScore = document.querySelector(".result-score");

    if (resultScore) {
        resultScore.classList.remove("result-pop");
        void resultScore.offsetWidth;
        resultScore.classList.add("result-pop");
    }
}

/* RETURN HOME */
function returnHome() {
    showPage(homePage);

    questionSet = [];
    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;

    if (nextBtn) nextBtn.disabled = true;
    if (optionsDiv) optionsDiv.innerHTML = "";

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "";
    }

    if (explanationBox) {
        explanationBox.hidden = true;
        explanationBox.textContent = "";
    }

    if (progressBar) {
        progressBar.style.width = "0%";

        const track = progressBar.parentElement;
        if (track) {
            track.setAttribute("aria-valuenow", "0");
        }
    }

    if (scoreText) scoreText.textContent = "Score: 0";
    if (progressText) progressText.textContent = "Question 1/10";
}

/* RESTART QUIZ */
function restartQuiz() {
    startQuiz();
}

/* BUTTON EVENTS */
if (startBtn) startBtn.addEventListener("click", startQuiz);
if (nextBtn) nextBtn.addEventListener("click", nextQuestion);
if (homeBtn) homeBtn.addEventListener("click", returnHome);
if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
if (resultsHomeBtn) resultsHomeBtn.addEventListener("click", returnHome);

/* ENTER KEY */
document.addEventListener("keydown", event => {
    if (
        event.key === "Enter" &&
        quizPage &&
        quizPage.style.display !== "none" &&
        nextBtn &&
        !nextBtn.disabled &&
        answered
    ) {
        nextQuestion();
    }
});

console.log("School Quiz Learning Hub is ready!");

if (typeof questions !== "undefined") {
    console.log("Subjects:", Object.keys(questions));
    console.log("Years: 1–11 | Levels: 1–5");
}
