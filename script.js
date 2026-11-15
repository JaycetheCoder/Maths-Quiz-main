
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE QUIZ + ACHIEVEMENTS
   + GLOBAL SUPABASE LEADERBOARD
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
let resultsAlreadyRecorded = false;


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
   4. SAVE AND LOAD ACHIEVEMENTS
========================================= */

const STORAGE_KEY = "learningHubAchievementsV2";

function loadAchievementData() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (
            saved &&
            typeof saved.completedQuizzes === "number" &&
            Array.isArray(saved.unlocked)
        ) {
            return {
                completedQuizzes: saved.completedQuizzes,
                unlocked: saved.unlocked
            };
        }

    } catch (error) {
        console.warn("Could not load achievement data:", error);
    }

    return {
        completedQuizzes: 0,
        unlocked: []
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
   5. RENDER ACHIEVEMENTS
========================================= */

function renderAchievements() {
    if (!achievementGrid) return;

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
   6. CHECK ACHIEVEMENTS
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
   7. COMPLETE QUIZ
========================================= */

function recordCompletedQuiz() {
    achievementData.completedQuizzes++;
    checkAchievements();
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
   8. PAGE NAVIGATION
========================================= */

function showPage(pageToShow) {

    [landingPage, homePage, quizPage, resultsPage].forEach(page => {
        if (page) page.hidden = true;
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
}


function returnHome() {
    newlyUnlocked = [];

    showPage(homePage);
    renderAchievements();

    loadLeaderboard();
}


/* =========================================
   9. POPULATE YEAR AND LEVEL SELECTS
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
   10. GET QUESTIONS
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
   11. START QUIZ
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

    resultsAlreadyRecorded = false;
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
   12. DISPLAY QUESTION
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

        letter.textContent =
            letters[index] || index + 1;

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
   13. UPDATE PROGRESS
========================================= */

function updateProgress() {

    const total = selectedQuestions.length;

    progressText.textContent =
        `Question ${currentQuestion + 1} of ${total}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / total) * 100}%`;
}


/* =========================================
   14. CHECK ANSWER
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
   15. FINISH QUESTION
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
   16. NEXT QUESTION
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
   17. SHOW RESULTS
========================================= */

function showResults() {

    if (resultsAlreadyRecorded) return;

    resultsAlreadyRecorded = true;

    const total = selectedQuestions.length;

    if (total === 0) return;

    const percentageScore =
        Math.round((score / total) * 100);

    finalScore.textContent =
        `${score} / ${total}`;

    percentage.textContent =
        `${percentageScore}%`;

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

    submitLeaderboardScore(percentageScore);
}


/* =========================================
   18. RESTART QUIZ
========================================= */

function restartQuiz() {
    startQuiz();
}


/* =========================================
   19. SUPABASE CONFIGURATION
========================================= */

const SUPABASE_URL =
    "https://zhxtfiruhggfkynkwgyp.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_kGfukbDMXsmZnH2y6uLx-w_jK2vG8G9";

let leaderboardClient = null;
let leaderboardUserId = null;
let leaderboardReady = false;

const USERNAME_KEY =
    "learningHubLeaderboardUsername";

const usernameInput =
    document.querySelector("#usernameInput");

const saveUsernameBtn =
    document.querySelector("#saveUsernameBtn");

const leaderboardStatus =
    document.querySelector("#leaderboardStatus");

const leaderboardList =
    document.querySelector("#leaderboardList");

const leaderboardPodium =
    document.querySelector("#leaderboardPodium");

const refreshLeaderboardBtn =
    document.querySelector("#refreshLeaderboardBtn");

const scoreSubmissionStatus =
    document.querySelector("#scoreSubmissionStatus");


/* =========================================
   20. CONNECT TO SUPABASE
========================================= */

async function initialiseLeaderboard() {

    try {

        if (!window.supabase) {
            throw new Error("Supabase library did not load.");
        }

        leaderboardClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );

        const { data: sessionData, error: sessionError } =
            await leaderboardClient.auth.getSession();

        if (sessionError) throw sessionError;

        if (sessionData.session) {

            leaderboardUserId =
                sessionData.session.user.id;

        } else {

            const { data, error } =
                await leaderboardClient.auth.signInAnonymously();

            if (error) throw error;

            leaderboardUserId = data.user.id;
        }

        leaderboardReady = true;

        usernameInput.value =
            localStorage.getItem(USERNAME_KEY) || "";

        leaderboardStatus.textContent =
            "Connected! Choose your username to join.";

        await loadLeaderboard();

    } catch (error) {

        console.error("Leaderboard connection error:", error);

        leaderboardStatus.textContent =
            "Could not connect. Please refresh the page and try again.";

    }
}


/* =========================================
   21. SAVE USERNAME
========================================= */

async function saveLeaderboardUsername() {

    if (!leaderboardReady) {

        leaderboardStatus.textContent =
            "Please wait for the leaderboard to connect.";

        return;
    }

    const username = usernameInput.value.trim();

    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {

        leaderboardStatus.textContent =
            "Use 3–16 letters, numbers or underscores.";

        return;
    }

    saveUsernameBtn.disabled = true;

    try {

        const { data: existing, error: fetchError } =
            await leaderboardClient
                .from("leaderboard")
                .select("score, quizzes_completed")
                .eq("user_id", leaderboardUserId)
                .maybeSingle();

        if (fetchError) throw fetchError;

        const { error } = await leaderboardClient
            .from("leaderboard")
            .upsert({
                user_id: leaderboardUserId,
                username: username,
                score: existing?.score || 0,
                quizzes_completed: existing?.quizzes_completed || 0
            }, {
                onConflict: "user_id"
            });

        if (error) throw error;

        localStorage.setItem(USERNAME_KEY, username);

        leaderboardStatus.textContent =
            "Username saved! You're on the leaderboard. 🏆";

        await loadLeaderboard();

    } catch (error) {

        console.error("Username error:", error);

        leaderboardStatus.textContent =
            "Could not save username. Please try again.";

    } finally {

        saveUsernameBtn.disabled = false;

    }
}


/* =========================================
   22. SUBMIT QUIZ SCORE
========================================= */

async function submitLeaderboardScore(percentageScore) {

    if (!leaderboardReady) {

        if (scoreSubmissionStatus) {
            scoreSubmissionStatus.textContent =
                "Leaderboard is not connected. Your quiz result is still saved locally.";
        }

        return;
    }

    const username =
        localStorage.getItem(USERNAME_KEY);

    if (!username) {

        if (scoreSubmissionStatus) {
            scoreSubmissionStatus.textContent =
                "Save a leaderboard username on the home page to submit your scores.";
        }

        return;
    }

    try {

        if (scoreSubmissionStatus) {
            scoreSubmissionStatus.textContent =
                "Submitting your score...";
        }

        const { data: existing, error: fetchError } =
            await leaderboardClient
                .from("leaderboard")
                .select("score, quizzes_completed")
                .eq("user_id", leaderboardUserId)
                .maybeSingle();

        if (fetchError) throw fetchError;

        const bestScore = Math.max(
            existing?.score || 0,
            percentageScore
        );

        const completed =
            (existing?.quizzes_completed || 0) + 1;

        const { error } = await leaderboardClient
            .from("leaderboard")
            .upsert({
                user_id: leaderboardUserId,
                username: username,
                score: bestScore,
                quizzes_completed: completed,
                updated_at: new Date().toISOString()
            }, {
                onConflict: "user_id"
            });

        if (error) throw error;

        if (scoreSubmissionStatus) {
            scoreSubmissionStatus.textContent =
                "Your score has been submitted to the global leaderboard! 🏆";
        }

        await loadLeaderboard();

    } catch (error) {

        console.error("Score submission error:", error);

        if (scoreSubmissionStatus) {
            scoreSubmissionStatus.textContent =
                "Your score could not be submitted. Please try again.";
        }

    }
}


/* =========================================
   23. LOAD GLOBAL LEADERBOARD
========================================= */

async function loadLeaderboard() {

    if (!leaderboardReady) return;

    leaderboardList.textContent = "Loading...";

    leaderboardPodium.innerHTML = "";

    try {

        const { data, error } = await leaderboardClient
            .from("leaderboard")
            .select("username, score, quizzes_completed")
            .order("score", { ascending: false })
            .order("quizzes_completed", { ascending: false })
            .limit(10);

        if (error) throw error;

        leaderboardList.innerHTML = "";
        leaderboardPodium.innerHTML = "";

        if (!data || data.length === 0) {

            leaderboardList.textContent =
                "No players yet. Be the first!";

            return;
        }

        renderLeaderboardPodium(data.slice(0, 3));

        data.forEach((player, index) => {

            const row = document.createElement("div");

            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.style.alignItems = "center";
            row.style.padding = "12px";
            row.style.marginBottom = "8px";
            row.style.borderRadius = "10px";
            row.style.background = "rgba(120, 120, 120, 0.10)";

            const name = document.createElement("strong");

            name.textContent =
                `#${index + 1} ${player.username}`;

            const score = document.createElement("span");

            score.textContent =
                `${player.score}%`;

            row.append(name, score);

            leaderboardList.appendChild(row);
        });

    } catch (error) {

        console.error("Leaderboard loading error:", error);

        leaderboardList.textContent =
            "Could not load the leaderboard. Please try again.";

    }
}


/* =========================================
   24. TOP THREE PODIUM
========================================= */

function renderLeaderboardPodium(players) {

    leaderboardPodium.innerHTML = "";

    const medals = ["🥇", "🥈", "🥉"];

    const podiumHeights = ["110px", "85px", "65px"];

    players.forEach((player, index) => {

        const card = document.createElement("div");

        card.style.flex = "1";
        card.style.maxWidth = "120px";
        card.style.textAlign = "center";
        card.style.padding = "10px 5px";
        card.style.borderRadius = "12px";
        card.style.background = "rgba(120, 120, 120, 0.10)";

        const medal = document.createElement("div");

        medal.textContent = medals[index];
        medal.style.fontSize = "30px";

        const name = document.createElement("strong");

        name.textContent = player.username;
        name.style.display = "block";
        name.style.overflowWrap = "anywhere";

        const score = document.createElement("p");

        score.textContent = `${player.score}%`;
        score.style.fontWeight = "bold";

        const podium = document.createElement("div");

        podium.textContent = `#${index + 1}`;
        podium.style.height = podiumHeights[index];
        podium.style.display = "flex";
        podium.style.alignItems = "center";
        podium.style.justifyContent = "center";
        podium.style.fontWeight = "bold";
        podium.style.fontSize = "20px";
        podium.style.borderRadius = "8px";
        podium.style.background = "rgba(120, 120, 120, 0.20)";

        card.append(medal, name, score, podium);

        leaderboardPodium.appendChild(card);
    });
}


/* =========================================
   25. BUTTON EVENTS
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

if (saveUsernameBtn) {
    saveUsernameBtn.addEventListener(
        "click",
        saveLeaderboardUsername
    );
}

if (refreshLeaderboardBtn) {
    refreshLeaderboardBtn.addEventListener(
        "click",
        loadLeaderboard
    );
}


/* =========================================
   26. START APPLICATION
========================================= */

populateSelects();

renderAchievements();

showPage(landingPage);

initialiseLeaderboard();

console.log("School Quiz Learning Hub loaded!");

console.log("Achievement ranks:", achievements.length);

console.log(
    "Question database:",
    typeof questions !== "undefined" ? "Loaded" : "Not found"
);
