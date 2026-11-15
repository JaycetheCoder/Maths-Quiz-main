/* =========================================
   SCHOOL QUIZ LEARNING HUB
   QUIZ + 7 ACHIEVEMENTS + DAILY STREAKS
========================================= */


/* =========================================
   1. PAGE ELEMENTS
========================================= */

const landingPage = document.querySelector("#landingPage");
const homePage = document.querySelector("#homePage");
const quizPage = document.querySelector("#quizPage");
const resultsPage = document.querySelector("#resultsPage");

const enterBtn = document.querySelector("#enterBtn");
const subjectSelect = document.querySelector("#subjectSelect");
const yearSelect = document.querySelector("#yearSelect");
const levelSelect = document.querySelector("#levelSelect");
const startBtn = document.querySelector("#startBtn");

const quizTitle = document.querySelector("#quizTitle");
const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const questionText = document.querySelector("#questionText");
const optionsContainer = document.querySelector("#options");
const feedback = document.querySelector("#feedback");

const nextBtn = document.querySelector("#nextBtn");
const homeBtn = document.querySelector("#homeBtn");

const finalScore = document.querySelector("#finalScore");
const percentage = document.querySelector("#percentage");
const resultMessage = document.querySelector("#resultMessage");
const resultDescription = document.querySelector("#resultDescription");

const restartBtn = document.querySelector("#restartBtn");
const resultsHomeBtn = document.querySelector("#resultsHomeBtn");

const achievementGrid = document.querySelector("#achievementGrid");
const achievementSummary = document.querySelector("#achievementSummary");
const achievementProgressBar = document.querySelector("#achievementProgressBar");
const achievementProgressText = document.querySelector("#achievementProgressText");
const newAchievementNotice = document.querySelector("#newAchievementNotice");


/* STREAK ELEMENTS */

const currentStreakElement = document.querySelector("#currentStreak");
const longestStreakElement = document.querySelector("#longestStreak");
const streakProgressBar = document.querySelector("#streakProgressBar");
const streakProgressText = document.querySelector("#streakProgressText");
const streakReward = document.querySelector("#streakReward");


/* =========================================
   2. QUIZ VARIABLES
========================================= */

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;
let attempts = 0;
let answered = false;

let selectedSubject = "math";
let selectedYear = "year1";
let selectedLevel = "level1";

let newlyUnlocked = [];


/* =========================================
   3. ACHIEVEMENT DATABASE
========================================= */

const achievements = [
    {
        id: "bronze",
        name: "Bronze",
        icon: "★",
        description: "Complete your first quiz.",
        requirement: 1,
        className: "badge-bronze"
    },
    {
        id: "silver",
        name: "Silver",
        icon: "✦",
        description: "Complete 3 quizzes.",
        requirement: 3,
        className: "badge-silver"
    },
    {
        id: "gold",
        name: "Gold",
        icon: "★",
        description: "Complete 5 quizzes.",
        requirement: 5,
        className: "badge-gold"
    },
    {
        id: "platinum",
        name: "Platinum",
        icon: "◆",
        description: "Complete 10 quizzes.",
        requirement: 10,
        className: "badge-platinum"
    },
    {
        id: "diamond",
        name: "Diamond",
        icon: "💎",
        description: "Complete 15 quizzes.",
        requirement: 15,
        className: "badge-diamond"
    },
    {
        id: "ruby",
        name: "Ruby",
        icon: "♦",
        description: "Complete 20 quizzes.",
        requirement: 20,
        className: "badge-ruby"
    },
    {
        id: "rainbow",
        name: "Rainbow",
        icon: "✧",
        description: "Complete 30 quizzes.",
        requirement: 30,
        className: "badge-rainbow"
    }
];


/* =========================================
   4. SAVE AND LOAD DATA
========================================= */

const STORAGE_KEY = "learningHubAchievementsV2";

function loadAchievementData() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (saved && typeof saved.completedQuizzes === "number") {
            return {
                completedQuizzes: saved.completedQuizzes,
                unlocked: Array.isArray(saved.unlocked)
                    ? saved.unlocked
                    : [],
                currentStreak: Number(saved.currentStreak) || 0,
                longestStreak: Number(saved.longestStreak) || 0,
                lastQuizDate: saved.lastQuizDate || null
            };
        }

    } catch (error) {
        console.warn("Could not load achievement data:", error);
    }

    return {
        completedQuizzes: 0,
        unlocked: [],
        currentStreak: 0,
        longestStreak: 0,
        lastQuizDate: null
    };
}

let achievementData = loadAchievementData();

function saveAchievementData() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(achievementData)
        );
    } catch (error) {
        console.warn("Could not save achievement data:", error);
    }
}


/* =========================================
   5. DAILY STREAK SYSTEM
========================================= */

function getLocalDate() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getYesterday() {
    const date = new Date();

    date.setDate(date.getDate() - 1);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function getDisplayedStreak() {
    const today = getLocalDate();
    const yesterday = getYesterday();

    if (
        achievementData.lastQuizDate === today ||
        achievementData.lastQuizDate === yesterday
    ) {
        return achievementData.currentStreak;
    }

    return 0;
}

function updateStreak() {
    const today = getLocalDate();
    const yesterday = getYesterday();

    // Do not increase the streak twice on the same day.
    if (achievementData.lastQuizDate === today) {
        return;
    }

    // Continue yesterday's streak, otherwise start a new one.
    if (achievementData.lastQuizDate === yesterday) {
        achievementData.currentStreak++;
    } else {
        achievementData.currentStreak = 1;
    }

    achievementData.lastQuizDate = today;

    achievementData.longestStreak = Math.max(
        achievementData.longestStreak,
        achievementData.currentStreak
    );

    saveAchievementData();
}

function renderStreak() {
    if (!currentStreakElement) return;

    const current = getDisplayedStreak();
    const longest = achievementData.longestStreak;

    currentStreakElement.textContent = `${current} 🔥`;

    if (longestStreakElement) {
        longestStreakElement.textContent = `${longest} 🏆`;
    }

    const progress = Math.min((current / 7) * 100, 100);

    if (streakProgressBar) {
        streakProgressBar.style.width = `${progress}%`;
    }

    if (current >= 7) {
        if (streakProgressText) {
            streakProgressText.textContent =
                "Amazing! You've reached a 7-day streak!";
        }

        if (streakReward) {
            streakReward.textContent =
                "🏅 7-DAY STREAK REWARD UNLOCKED!";
        }

    } else {
        if (streakProgressText) {
            streakProgressText.textContent =
                `${current}/7 days completed towards your 7-day reward.`;
        }

        if (streakReward) {
            streakReward.textContent =
                "🔒 7-day streak reward";
        }
    }
}


/* =========================================
   6. RENDER ACHIEVEMENTS
========================================= */

function renderAchievements() {
    if (
        !achievementGrid ||
        !achievementSummary ||
        !achievementProgressBar ||
        !achievementProgressText
    ) {
        return;
    }

    achievementGrid.innerHTML = "";

    const unlockedCount = achievementData.unlocked.length;

    achievementSummary.textContent =
        `${unlockedCount} / ${achievements.length}`;

    achievementProgressBar.style.width =
        `${(unlockedCount / achievements.length) * 100}%`;

    achievementProgressText.textContent =
        `${unlockedCount} of ${achievements.length} ranks unlocked`;

    achievements.forEach(achievement => {
        const unlocked =
            achievementData.unlocked.includes(achievement.id);

        const card = document.createElement("div");

        card.className =
            `achievement-card ${unlocked ? "unlocked" : "locked"}`;

        if (newlyUnlocked.includes(achievement.id)) {
            card.classList.add("newly-unlocked");
        }

        const medal = document.createElement("div");

        medal.className =
            `badge-medal ${achievement.className}`;

        medal.textContent =
            unlocked ? achievement.icon : "🔒";

        const title = document.createElement("h3");
        title.textContent = achievement.name;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        const status = document.createElement("span");

        status.className = "achievement-status";

        status.textContent =
            unlocked ? "Unlocked ✓" : "Locked";

        card.append(medal, title, description, status);

        achievementGrid.appendChild(card);
    });
}


/* =========================================
   7. CHECK ACHIEVEMENTS
========================================= */

function checkAchievements() {
    newlyUnlocked = [];

    achievements.forEach(achievement => {
        const alreadyUnlocked =
            achievementData.unlocked.includes(achievement.id);

        if (
            !alreadyUnlocked &&
            achievementData.completedQuizzes >= achievement.requirement
        ) {
            achievementData.unlocked.push(achievement.id);
            newlyUnlocked.push(achievement.id);
        }
    });

    saveAchievementData();
    renderAchievements();
}


/* =========================================
   8. COMPLETE QUIZ
========================================= */

function recordCompletedQuiz() {
    achievementData.completedQuizzes++;

    updateStreak();
    checkAchievements();
    renderStreak();
}

function displayNewAchievementNotice() {
    if (!newAchievementNotice) return;

    if (newlyUnlocked.length === 0) {
        newAchievementNotice.hidden = true;
        newAchievementNotice.textContent = "";
        return;
    }

    const names = newlyUnlocked.map(id => {
        const achievement =
            achievements.find(item => item.id === id);

        return achievement ? achievement.name : id;
    });

    newAchievementNotice.hidden = false;

    newAchievementNotice.textContent =
        `🎉 New achievement unlocked: ${names.join(", ")}!`;
}


/* =========================================
   9. PAGE NAVIGATION
========================================= */

function showPage(pageToShow) {
    [landingPage, homePage, quizPage, resultsPage].forEach(page => {
        if (page) {
            page.hidden = true;
        }
    });

    if (pageToShow) {
        pageToShow.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function enterbtn() {
    showPage(homePage);
    renderAchievements();
    renderStreak();
}

function returnHome() {
    newlyUnlocked = [];

    showPage(homePage);

    renderAchievements();
    renderStreak();
}


/* =========================================
   10. POPULATE YEAR AND LEVEL SELECTS
========================================= */

function populateSelects() {
    yearSelect.innerHTML = "";
    levelSelect.innerHTML = "";

    for (let year = 1; year <= 11; year++) {
        const option = document.createElement("option");

        option.value = `year${year}`;
        option.textContent = `Year ${year}`;

        yearSelect.appendChild(option);
    }

    for (let level = 1; level <= 5; level++) {
        const option = document.createElement("option");

        option.value = `level${level}`;
        option.textContent = `Level ${level}`;

        levelSelect.appendChild(option);
    }

    yearSelect.value = "year1";
    levelSelect.value = "level1";
}


/* =========================================
   11. GET QUESTIONS
========================================= */

function getQuestionBank() {
    if (typeof questions === "undefined") {
        console.error("questions.js has not loaded.");
        return [];
    }

    const subjectData = questions[selectedSubject];

    if (!subjectData) return [];

    const yearData = subjectData[selectedYear];

    if (!yearData) return [];

    const levelData = yearData[selectedLevel];

    return Array.isArray(levelData) ? levelData : [];
}


/* =========================================
   12. START QUIZ
========================================= */

function startQuiz() {
    selectedSubject = subjectSelect.value;
    selectedYear = yearSelect.value;
    selectedLevel = levelSelect.value;

    selectedQuestions = getQuestionBank();

    if (selectedQuestions.length === 0) {
        alert(
            "No questions were found for this selection. Please check your questions.js file."
        );

        return;
    }

    currentQuestion = 0;
    score = 0;
    attempts = 0;
    answered = false;
    newlyUnlocked = [];

    const subjectName =
        subjectSelect.options[subjectSelect.selectedIndex].textContent;

    const yearName =
        yearSelect.options[yearSelect.selectedIndex].textContent;

    const levelName =
        levelSelect.options[levelSelect.selectedIndex].textContent;

    quizTitle.textContent =
        `${subjectName} • ${yearName} • ${levelName}`;

    scoreText.textContent = score;

    showPage(quizPage);

    displayQuestion();
}


/* =========================================
   13. DISPLAY QUESTION
========================================= */

function displayQuestion() {
    const question = selectedQuestions[currentQuestion];

    if (!question) {
        showResults();
        return;
    }

    attempts = 0;
    answered = false;

    questionText.textContent = question.q;

    optionsContainer.innerHTML = "";

    feedback.textContent = "";
    feedback.className = "feedback";

    nextBtn.hidden = true;

    const letters = ["A", "B", "C", "D", "E", "F"];

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option-btn";

        const letter = document.createElement("span");

        letter.className = "option-letter";
        letter.textContent = letters[index] || index + 1;

        const text = document.createElement("span");
        text.textContent = option;

        button.append(letter, text);

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        optionsContainer.appendChild(button);
    });

    updateProgress();
}


/* =========================================
   14. UPDATE PROGRESS
========================================= */

function updateProgress() {
    const total = selectedQuestions.length;

    progressText.textContent =
        `Question ${currentQuestion + 1} of ${total}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / total) * 100}%`;
}


/* =========================================
   15. CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {
    if (answered) return;

    const question = selectedQuestions[currentQuestion];
    const correctAnswer = Number(question.answer);

    attempts++;

    if (selectedIndex === correctAnswer) {
        answered = true;

        if (attempts === 1) {
            score++;
            scoreText.textContent = score;
        }

        selectedButton.classList.add("correct");

        feedback.className = "feedback correct-feedback";

        feedback.textContent =
            `✓ Correct! ${question.explanation || "Well done!"}`;

        finishQuestion();

        return;
    }

    selectedButton.classList.add("incorrect");
    selectedButton.disabled = true;

    if (attempts < 2) {
        feedback.className = "feedback wrong-feedback";

        feedback.textContent =
            "Not quite! Try one more time.";

    } else {
        answered = true;

        const buttons =
            optionsContainer.querySelectorAll(".option-btn");

        if (buttons[correctAnswer]) {
            buttons[correctAnswer].classList.add("correct");
        }

        feedback.className = "feedback wrong-feedback";

        feedback.textContent =
            `The correct answer was ${question.options[correctAnswer]}. ${question.explanation || ""}`;

        finishQuestion();
    }
}


/* =========================================
   16. FINISH QUESTION
========================================= */

function finishQuestion() {
    const buttons =
        optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    nextBtn.hidden = false;

    if (currentQuestion === selectedQuestions.length - 1) {
        nextBtn.textContent = "See My Results 🏆";
    } else {
        nextBtn.textContent = "Next Question →";
    }
}


/* =========================================
   17. NEXT QUESTION
========================================= */

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion >= selectedQuestions.length) {
        showResults();
    } else {
        displayQuestion();
    }
}


/* =========================================
   18. SHOW RESULTS
========================================= */

function showResults() {
    const total = selectedQuestions.length;

    if (total === 0) return;

    const percentageScore =
        Math.round((score / total) * 100);

    finalScore.textContent = `${score} / ${total}`;

    percentage.textContent = `${percentageScore}%`;

    if (percentageScore === 100) {
        resultMessage.textContent = "Perfect Score! 🌟";

        resultDescription.textContent =
            "Amazing work! You answered every question correctly.";

    } else if (percentageScore >= 80) {
        resultMessage.textContent = "Excellent Work! 🎉";

        resultDescription.textContent =
            "You have a brilliant understanding of this topic.";

    } else if (percentageScore >= 60) {
        resultMessage.textContent = "Good Job! 👏";

        resultDescription.textContent =
            "You're making great progress. Keep practising!";

    } else if (percentageScore >= 40) {
        resultMessage.textContent = "Keep Going! 💪";

        resultDescription.textContent =
            "Every quiz is a chance to learn something new.";

    } else {
        resultMessage.textContent = "Keep Learning! 📚";

        resultDescription.textContent =
            "Don't give up. Practise again and improve your score.";
    }

    recordCompletedQuiz();

    displayNewAchievementNotice();

    showPage(resultsPage);
}


/* =========================================
   19. RESTART QUIZ
========================================= */

function restartQuiz() {
    startQuiz();
}


/* =========================================
   20. BUTTON EVENTS
========================================= */

if (enterBtn) {
    enterBtn.addEventListener("click", enterbtn);
}

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
   21. START APPLICATION
========================================= */

populateSelects();

renderAchievements();
renderStreak();

showPage(landingPage);

console.log("School Quiz Learning Hub loaded!");
console.log("Achievement ranks:", achievements.length);
console.log("Daily streak system: Loaded");

console.log(
    "Question database:",
    typeof questions !== "undefined" ? "Loaded" : "Not found"
);
