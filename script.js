
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE QUIZ + ACHIEVEMENTS SYSTEM
========================================= */


/* =========================================
   1. PAGE ELEMENTS
========================================= */

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
const explanationBox = document.querySelector("#explanationBox");

const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const progressTrack = document.querySelector(".progress-track");

const finalScore = document.querySelector("#finalScore");
const percentage = document.querySelector("#percentage");
const resultMessage = document.querySelector("#resultMessage");
const resultDescription = document.querySelector("#resultDescription");

const achievementGrid = document.querySelector("#achievementGrid");
const achievementSummary = document.querySelector("#achievementSummary");
const newAchievementNotice = document.querySelector("#newAchievementNotice");


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

let quizResultSaved = false;

const QUESTIONS_PER_QUIZ = 10;
const MAX_ATTEMPTS = 2;

const ACHIEVEMENT_STORAGE_KEY = "schoolQuizAchievements";


/* =========================================
   3. SHUFFLE QUESTIONS
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
   4. PAGE NAVIGATION
========================================= */

function enterbtn() {

    if (landingPage) {
        landingPage.style.display = "none";
    }

    if (homePage) {
        homePage.style.display = "block";
    }

    renderAchievements();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function showPage(page) {

    if (landingPage) landingPage.style.display = "none";
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
   5. START QUIZ
========================================= */

function startQuiz() {

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
    quizResultSaved = false;

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
    nextBtn.style.display = "inline-flex";

    showPage(quizPage);

    displayQuestion();

}


/* =========================================
   6. UPDATE PROGRESS
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

    if (progressTrack) {
        progressTrack.setAttribute(
            "aria-valuenow",
            String(Math.round(progress))
        );
    }

}


/* =========================================
   7. DISPLAY QUESTION
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

    if (question.topic) {

        quizTitle.textContent =
            `${selectedSubject.toUpperCase()} | ` +
            `${selectedYear.replace("year", "Year ")} | ` +
            `${selectedLevel.replace("level", "Level ")} | ` +
            `${question.topic}`;

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
   8. SHOW EXPLANATION
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
   9. CHECK ANSWER
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

        if (allButtons[question.answer]) {
            allButtons[question.answer].classList.add("correct");
        }

        allButtons.forEach(button => {
            button.disabled = true;
        });

        nextBtn.disabled = false;

        showExplanation(question);

    }

}


/* =========================================
   10. UPDATE SCORE
========================================= */

function updateScoreOnly() {

    scoreText.textContent = `Score: ${score}`;

}


/* =========================================
   11. NEXT QUESTION
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
   12. SHOW RESULTS
========================================= */

function showResults() {

    if (quizResultSaved) return;

    if (!resultsPage) {

        alert(
            `Quiz complete! Your score is ${score}/${questionSet.length}`
        );

        returnHome();

        return;

    }

    quizResultSaved = true;

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

    // Save the quiz and check for new achievements.
    const newlyUnlocked = recordCompletedQuiz(resultPercentage);

    displayNewAchievementNotice(newlyUnlocked);

    showPage(resultsPage);

}


/* =========================================
   13. ACHIEVEMENTS DATABASE
========================================= */

const achievementList = [

    {
        id: "first",
        icon: "🎯",
        title: "First Quiz",
        description: "Complete your first quiz.",
        check: data => data.completedQuizzes >= 1
    },

    {
        id: "high",
        icon: "⭐",
        title: "High Scorer",
        description: "Get at least 80%.",
        check: data => data.bestPercentage >= 80
    },

    {
        id: "perfect",
        icon: "🏆",
        title: "Perfect Score",
        description: "Get 100% in a quiz.",
        check: data => data.bestPercentage === 100
    },

    {
        id: "consistent",
        icon: "🔥",
        title: "Consistent Learner",
        description: "Complete 5 quizzes.",
        check: data => data.completedQuizzes >= 5
    },

    {
        id: "knowledge",
        icon: "📚",
        title: "Knowledge Seeker",
        description: "Complete 10 quizzes.",
        check: data => data.completedQuizzes >= 10
    }

];


/* =========================================
   14. LOAD ACHIEVEMENT DATA
========================================= */

function getAchievementData() {

    const defaultData = {
        completedQuizzes: 0,
        bestPercentage: 0,
        unlocked: []
    };

    try {

        const saved = JSON.parse(
            localStorage.getItem(ACHIEVEMENT_STORAGE_KEY)
        );

        if (!saved || typeof saved !== "object") {
            return defaultData;
        }

        return {
            completedQuizzes: Math.max(
                0,
                Number(saved.completedQuizzes) || 0
            ),

            bestPercentage: Math.min(
                100,
                Math.max(0, Number(saved.bestPercentage) || 0)
            ),

            unlocked: Array.isArray(saved.unlocked)
                ? saved.unlocked
                : []
        };

    } catch (error) {

        console.warn("Could not read achievement data.", error);

        return defaultData;

    }

}


/* =========================================
   15. SAVE ACHIEVEMENT DATA
========================================= */

function saveAchievementData(data) {

    try {

        localStorage.setItem(
            ACHIEVEMENT_STORAGE_KEY,
            JSON.stringify(data)
        );

        return true;

    } catch (error) {

        console.warn("Could not save achievement data.", error);

        return false;

    }

}


/* =========================================
   16. RECORD COMPLETED QUIZ
========================================= */

function recordCompletedQuiz(resultPercentage) {

    const data = getAchievementData();

    const previouslyUnlocked = [...data.unlocked];

    data.completedQuizzes++;

    data.bestPercentage = Math.max(
        data.bestPercentage,
        resultPercentage
    );

    const newlyUnlocked = [];

    achievementList.forEach(achievement => {

        const alreadyUnlocked =
            data.unlocked.includes(achievement.id);

        const qualifies =
            achievement.check(data);

        if (qualifies && !alreadyUnlocked) {

            data.unlocked.push(achievement.id);

            newlyUnlocked.push(achievement);

        }

    });

    saveAchievementData(data);

    renderAchievements();

    return newlyUnlocked;

}


/* =========================================
   17. DISPLAY ACHIEVEMENTS
========================================= */

function renderAchievements() {

    if (!achievementGrid || !achievementSummary) return;

    const data = getAchievementData();

    let unlockedCount = 0;

    achievementGrid.innerHTML = "";

    achievementList.forEach(achievement => {

        const unlocked =
            data.unlocked.includes(achievement.id) ||
            achievement.check(data);

        if (unlocked) {
            unlockedCount++;
        }

        const card = document.createElement("div");

        card.className = unlocked
            ? "achievement-card unlocked"
            : "achievement-card locked";

        const icon = document.createElement("div");

        icon.className = "achievement-icon";
        icon.textContent = achievement.icon;

        const title = document.createElement("h3");

        title.textContent = achievement.title;

        const description = document.createElement("p");

        description.textContent = unlocked
            ? "✓ Unlocked!"
            : achievement.description;

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(description);

        achievementGrid.appendChild(card);

    });

    achievementSummary.textContent =
        `${unlockedCount} of ${achievementList.length} badges unlocked • ` +
        `${data.completedQuizzes} quizzes completed`;

}


/* =========================================
   18. NEW ACHIEVEMENT NOTICE
========================================= */

function displayNewAchievementNotice(newlyUnlocked) {

    if (!newAchievementNotice) return;

    if (!newlyUnlocked || newlyUnlocked.length === 0) {

        newAchievementNotice.style.display = "none";
        newAchievementNotice.textContent = "";

        return;

    }

    const names = newlyUnlocked.map(achievement => {

        return `${achievement.icon} ${achievement.title}`;

    });

    newAchievementNotice.textContent =
        "🎉 New achievement unlocked: " + names.join(", ");

    newAchievementNotice.style.display = "block";

}


/* =========================================
   19. RETURN HOME
========================================= */

function returnHome() {

    showPage(homePage);

    questionSet = [];

    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;
    quizResultSaved = false;

    nextBtn.disabled = true;

    optionsDiv.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "";

    if (explanationBox) {

        explanationBox.style.display = "none";
        explanationBox.textContent = "";

    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (progressTrack) {
        progressTrack.setAttribute("aria-valuenow", "0");
    }

    renderAchievements();

}


/* =========================================
   20. RESTART QUIZ
========================================= */

function restartQuiz() {

    startQuiz();

}


/* =========================================
   21. BUTTON EVENTS
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


/* =========================================
   22. KEYBOARD SUPPORT
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
   23. QUIZ READY
========================================= */

renderAchievements();

console.log("School Quiz Learning Hub is ready!");

if (typeof questions !== "undefined") {

    console.log("Subjects:", Object.keys(questions));

} else {

    console.error("Question database was not found.");

}

console.log("Achievements system loaded.");
console.log("Two attempts per question enabled.");
