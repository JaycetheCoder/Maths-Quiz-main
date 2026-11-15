
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   ACHIEVEMENTS PAGE
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

const STORAGE_KEY = "learningHubAchievementsV2";

function loadAchievementData() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (
            saved &&
            typeof saved.completedQuizzes === "number" &&
            Array.isArray(saved.unlocked)
        ) {
            return saved;
        }
    } catch (error) {
        console.warn("Could not load achievements:", error);
    }

    return {
        completedQuizzes: 0,
        unlocked: []
    };
}

function renderAchievements() {
    const achievementData = loadAchievementData();

    const grid = document.querySelector("#achievementGrid");
    const summary = document.querySelector("#achievementSummary");
    const progressBar = document.querySelector("#achievementProgressBar");
    const progressText = document.querySelector("#achievementProgressText");
    const completedText = document.querySelector("#completedQuizzesText");

    if (!grid || !summary || !progressBar || !progressText) return;

    grid.innerHTML = "";

    const unlockedCount = achievements.filter(achievement =>
        achievementData.unlocked.includes(achievement.id)
    ).length;

    summary.textContent = `${unlockedCount} / ${achievements.length}`;

    progressBar.style.width =
        `${(unlockedCount / achievements.length) * 100}%`;

    progressText.textContent =
        `${unlockedCount} of ${achievements.length} ranks unlocked`;

    if (completedText) {
        completedText.textContent =
            `${achievementData.completedQuizzes} quizzes completed`;
    }

    achievements.forEach(achievement => {
        const unlocked =
            achievementData.unlocked.includes(achievement.id);

        const card = document.createElement("div");
        card.className =
            `achievement-card ${unlocked ? "unlocked" : "locked"}`;

        const medal = document.createElement("div");
        medal.className = `badge-medal ${achievement.className}`;
        medal.textContent = unlocked ? achievement.icon : "🔒";

        const title = document.createElement("h3");
        title.textContent = achievement.name;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        const status = document.createElement("span");
        status.className = "achievement-status";
        status.textContent = unlocked ? "Unlocked ✓" : "Locked";

        card.append(medal, title, description, status);

        grid.appendChild(card);
    });
}

renderAchievements();

console.log("Achievements page loaded!");
