/* =========================================
   SCHOOL QUIZ - COMPLETE QUESTION DATABASE
   ========================================= */

// =========================================
// 1. GENERAL QUESTIONS FOR EACH SUBJECT
// =========================================

const subjectQuestions = {

    math: [
        { q: "What is 7 + 5?", options: ["10", "12", "13"], answer: 1 },
        { q: "What is 9 x 3?", options: ["27", "21", "18"], answer: 0 },
        { q: "Which number is even?", options: ["7", "11", "16"], answer: 2 },
        { q: "What is half of 20?", options: ["10", "5", "15"], answer: 0 },
        { q: "How many sides does a hexagon have?", options: ["5", "6", "8"], answer: 1 }
    ],

    science: [
        { q: "What do plants use to make their food?", options: ["Sunlight", "Sand", "Plastic"], answer: 0 },
        { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter"], answer: 1 },
        { q: "At what temperature does water freeze in Celsius?", options: ["0 degrees", "10 degrees", "100 degrees"], answer: 0 },
        { q: "Which gas do humans need to breathe?", options: ["Oxygen", "Helium", "Carbon dioxide"], answer: 0 },
        { q: "Which organ pumps blood around the body?", options: ["Lungs", "Brain", "Heart"], answer: 2 }
    ],

    english: [
        { q: "Which word is a noun?", options: ["Quickly", "Teacher", "Blue"], answer: 1 },
        { q: "What is the plural of child?", options: ["Childs", "Children", "Childes"], answer: 1 },
        { q: "Which word is an adjective?", options: ["Bright", "Jump", "Carefully"], answer: 0 },
        { q: "Choose the correctly punctuated sentence.", options: ["Where are you?", "Where are you.", "Where are you!?"], answer: 0 },
        { q: "Which word is a synonym for happy?", options: ["Sad", "Joyful", "Tired"], answer: 1 }
    ],

    history: [
        { q: "Which ancient civilization built the pyramids at Giza?", options: ["Ancient Egyptians", "Romans", "Vikings"], answer: 0 },
        { q: "In which year did humans first land on the Moon?", options: ["1959", "1969", "1979"], answer: 1 },
        { q: "What was the name of the ship that carried the Pilgrims to North America in 1620?", options: ["Mayflower", "Endeavour", "Beagle"], answer: 0 },
        { q: "Which ancient city was buried by Mount Vesuvius?", options: ["Athens", "Pompeii", "Carthage"], answer: 1 },
        { q: "What do historians study?", options: ["The past", "The weather", "Outer space"], answer: 0 }
    ],

    geography: [
        { q: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"], answer: 2 },
        { q: "On which continent is Egypt?", options: ["Africa", "Asia", "Europe"], answer: 0 },
        { q: "What is the imaginary line around the middle of Earth called?", options: ["The Equator", "The Prime Meridian", "The Tropic of Capricorn"], answer: 0 },
        { q: "Which is the largest hot desert in the world?", options: ["Gobi Desert", "Sahara Desert", "Mojave Desert"], answer: 1 },
        { q: "Which country is made up of many islands in East Asia?", options: ["Japan", "Nepal", "Mongolia"], answer: 0 }
    ]

};


// =========================================
// 2. LEVEL QUESTIONS FOR EACH SUBJECT
// =========================================

const levelQuestions = {

    // MATHS
    math: {

        level1: [
            { q: "What is 4 + 3?", options: ["6", "7", "8"], answer: 1 },
            { q: "Which number comes after 19?", options: ["18", "20", "21"], answer: 1 },
            { q: "What is 10 - 6?", options: ["3", "4", "5"], answer: 1 }
        ],

        level2: [
            { q: "What is 24 + 18?", options: ["32", "42", "52"], answer: 1 },
            { q: "What is 5 x 6?", options: ["25", "30", "35"], answer: 1 },
            { q: "How many minutes are in 2 hours?", options: ["100", "120", "200"], answer: 1 }
        ],

        level3: [
            { q: "What is 144 divided by 12?", options: ["10", "12", "14"], answer: 1 },
            { q: "What is 3/4 of 20?", options: ["5", "15", "16"], answer: 1 },
            { q: "What is the perimeter of a rectangle 6 cm long and 4 cm wide?", options: ["10 cm", "20 cm", "24 cm"], answer: 1 }
        ],

        level4: [
            { q: "What is 15% of 200?", options: ["15", "30", "45"], answer: 1 },
            { q: "Solve: 3x = 27.", options: ["x = 8", "x = 9", "x = 24"], answer: 1 },
            { q: "What is the area of a triangle with base 10 cm and height 6 cm?", options: ["30 cm²", "60 cm²", "16 cm²"], answer: 0 }
        ],

        level5: [
            { q: "Solve: 2(x + 3) = 18.", options: ["x = 6", "x = 9", "x = 12"], answer: 0 },
            { q: "What is the mean of 4, 8, 10, and 14?", options: ["8", "9", "10"], answer: 1 },
            { q: "A jacket costs £80 and is reduced by 25%. What is the sale price?", options: ["£20", "£55", "£60"], answer: 2 }
        ]

    },


    // SCIENCE
    science: {

        level1: [
            { q: "Which part of a plant takes in water from the soil?", options: ["Roots", "Flowers", "Leaves"], answer: 0 },
            { q: "Which animal is a mammal?", options: ["Frog", "Dolphin", "Lizard"], answer: 1 },
            { q: "What do we call water when it becomes a solid?", options: ["Ice", "Steam", "Rain"], answer: 0 }
        ],

        level2: [
            { q: "What force pulls objects toward Earth?", options: ["Gravity", "Magnetism", "Friction"], answer: 0 },
            { q: "Which material is attracted to a magnet?", options: ["Wood", "Iron", "Glass"], answer: 1 },
            { q: "What is the main source of energy for Earth?", options: ["The Sun", "The Moon", "The ocean"], answer: 0 }
        ],

        level3: [
            { q: "What is the process called when liquid water changes into water vapor?", options: ["Freezing", "Evaporation", "Condensation"], answer: 1 },
            { q: "Which part of the cell contains most of its genetic material?", options: ["Nucleus", "Cell wall", "Cytoplasm"], answer: 0 },
            { q: "Which type of rock forms when magma cools?", options: ["Sedimentary", "Igneous", "Metamorphic"], answer: 1 }
        ],

        level4: [
            { q: "What is the chemical symbol for sodium?", options: ["S", "Na", "So"], answer: 1 },
            { q: "Which particles have a negative electric charge?", options: ["Protons", "Neutrons", "Electrons"], answer: 2 },
            { q: "What is the role of decomposers in an ecosystem?", options: ["Break down dead matter", "Make sunlight", "Stop the water cycle"], answer: 0 }
        ],

        level5: [
            { q: "What is the pH of a neutral solution at room temperature?", options: ["0", "7", "14"], answer: 1 },
            { q: "What is the original energy source for most ecosystems?", options: ["The Sun", "The soil", "The Moon"], answer: 0 },
            { q: "Which process produces most ATP in aerobic cellular respiration?", options: ["Glycolysis", "The Krebs cycle", "Oxidative phosphorylation"], answer: 2 }
        ]

    },


    // ENGLISH
    english: {

        level1: [
            { q: "Which word rhymes with cat?", options: ["Hat", "Cup", "Dog"], answer: 0 },
            { q: "Which letter begins the word sun?", options: ["S", "U", "N"], answer: 0 },
            { q: "Choose the correct word: I ___ a book.", options: ["read", "reads", "reading"], answer: 0 }
        ],

        level2: [
            { q: "Which word is a verb?", options: ["Sing", "Soft", "Garden"], answer: 0 },
            { q: "What is the past tense of walk?", options: ["Walks", "Walking", "Walked"], answer: 2 },
            { q: "Which punctuation mark ends a question?", options: ["Full stop", "Question mark", "Comma"], answer: 1 }
        ],

        level3: [
            { q: "Which sentence uses a comma correctly?", options: ["After lunch, we played outside.", "After, lunch we played outside.", "After lunch we, played outside."], answer: 0 },
            { q: "What is the opposite of generous?", options: ["Kind", "Selfish", "Helpful"], answer: 1 },
            { q: "Which word is an adverb in She spoke softly?", options: ["She", "Spoke", "Softly"], answer: 2 }
        ],

        level4: [
            { q: "Which sentence is written in the passive voice?", options: ["The chef baked the cake.", "The cake was baked by the chef.", "The chef is baking."], answer: 1 },
            { q: "What does the prefix un- usually mean?", options: ["Not", "Again", "Before"], answer: 0 },
            { q: "Which word is a conjunction?", options: ["Although", "Carefully", "Bright"], answer: 0 }
        ],

        level5: [
            { q: "Which sentence uses a semicolon correctly?", options: ["I was tired; I went to bed early.", "I; was tired I went to bed early.", "I was tired I; went to bed early."], answer: 0 },
            { q: "What is the main purpose of a thesis statement?", options: ["To state the central argument", "To list every source", "To introduce a character"], answer: 0 },
            { q: "Which word best completes the sentence: The evidence ___ the claim.", options: ["support", "supports", "supporting"], answer: 1 }
        ]

    },


    // HISTORY
    history: {

        level1: [
            { q: "What tool helps us learn about events from long ago?", options: ["A historical source", "A weather forecast", "A recipe"], answer: 0 },
            { q: "Which came first?", options: ["A photograph", "A painting"], answer: 1 },
            { q: "What do we call a person who studies the past?", options: ["Historian", "Astronaut", "Engineer"], answer: 0 }
        ],

        level2: [
            { q: "Which civilisation is famous for its early democracy?", options: ["Ancient Athens", "The Aztecs", "The Vikings"], answer: 0 },
            { q: "What was a castle mainly built to provide?", options: ["Protection", "A school", "A market"], answer: 0 },
            { q: "Which invention helped people print books more quickly in Europe?", options: ["The printing press", "The compass", "The steam engine"], answer: 0 }
        ],

        level3: [
            { q: "Who was the first president of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"], answer: 1 },
            { q: "The Industrial Revolution began in which country?", options: ["Britain", "Brazil", "Japan"], answer: 0 },
            { q: "What was the main purpose of the Silk Road?", options: ["Trade between regions", "Building castles", "Mapping oceans"], answer: 0 }
        ],

        level4: [
            { q: "Which event began in 1914 and ended in 1918?", options: ["World War I", "World War II", "The Cold War"], answer: 0 },
            { q: "What was the Renaissance?", options: ["A period of renewed art and learning", "A medieval farming tool", "A Roman military rank"], answer: 0 },
            { q: "What was the Underground Railroad?", options: ["A network that helped enslaved people escape", "A railway under London", "A mine in California"], answer: 0 }
        ],

        level5: [
            { q: "Which agreement formally ended World War I between Germany and the Allies?", options: ["Treaty of Versailles", "Treaty of Paris", "Magna Carta"], answer: 0 },
            { q: "What was one major goal of the civil rights movement in the United States?", options: ["Equal rights under the law", "Creating new colonies", "Ending public education"], answer: 0 },
            { q: "Why do historians compare multiple primary sources?", options: ["To check perspectives and reliability", "To make sources older", "To avoid studying context"], answer: 0 }
        ]

    },


    // GEOGRAPHY
    geography: {

        level1: [
            { q: "Which one is a continent?", options: ["Africa", "Amazon River", "Pacific Ocean"], answer: 0 },
            { q: "What do maps use to show directions?", options: ["A compass rose", "A thermometer", "A calendar"], answer: 0 },
            { q: "Which is a body of water?", options: ["Mountain", "Lake", "Forest"], answer: 1 }
        ],

        level2: [
            { q: "Which direction is opposite to north?", options: ["East", "South", "West"], answer: 1 },
            { q: "What is the capital city of France?", options: ["Rome", "Paris", "Madrid"], answer: 1 },
            { q: "Which landform is usually higher and steeper than a hill?", options: ["Valley", "Mountain", "Plain"], answer: 1 }
        ],

        level3: [
            { q: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne"], answer: 1 },
            { q: "What does a map scale help you find?", options: ["Real-world distances", "The age of a city", "The weather tomorrow"], answer: 0 },
            { q: "Which line of latitude is at 0 degrees?", options: ["The Equator", "The Prime Meridian", "The Arctic Circle"], answer: 0 }
        ],

        level4: [
            { q: "What is a monsoon?", options: ["A seasonal wind pattern that can bring heavy rain", "A type of glacier", "A line of longitude"], answer: 0 },
            { q: "Which layer of Earth do we live on?", options: ["Crust", "Outer core", "Inner core"], answer: 0 },
            { q: "What is urbanisation?", options: ["Growth of towns and cities", "Movement of glaciers", "Formation of a coastline"], answer: 0 }
        ],

        level5: [
            { q: "What is the main cause of Earth's seasons?", options: ["Earth's tilted axis as it orbits the Sun", "Changes in the Moon's distance", "Daily changes in ocean tides"], answer: 0 },
            { q: "What does population density measure?", options: ["People per unit of area", "Births per year worldwide", "The size of a country's economy"], answer: 0 },
            { q: "Which process wears away and transports rock and soil?", options: ["Erosion", "Condensation", "Deposition only"], answer: 0 }
        ]

    }

};


// =========================================
// 3. YEAR-SPECIFIC QUESTION BANKS
// =========================================

// This section allows questions to be added
// to an individual year and level.

const yearQuestions = {
    math: {},
    science: {},
    english: {},
    history: {},
    geography: {}
};


// =========================================
// 4. BUILD ALL 275 QUESTION GROUPS
// =========================================

const questions = {};

for (const subject of Object.keys(subjectQuestions)) {

    questions[subject] = {};

    for (let year = 1; year <= 11; year++) {

        const yearKey = `year${year}`;

        questions[subject][yearKey] = {};

        for (let level = 1; level <= 5; level++) {

            const levelKey = `level${level}`;

            questions[subject][yearKey][levelKey] = [
                ...subjectQuestions[subject],
                ...levelQuestions[subject][levelKey]
            ];

        }
    }
}


// =========================================
// 5. FUNCTION TO ADD MORE QUESTIONS
// =========================================

function addQuestion(
    subject,
    year,
    level,
    question,
    options,
    answer
) {

    const yearKey = `year${year}`;
    const levelKey = `level${level}`;

    if (!questions[subject]?.[yearKey]?.[levelKey]) {

        console.error("Invalid subject, year or level.");

        return false;
    }

    if (
        typeof question !== "string" ||
        !question.trim() ||
        !Array.isArray(options) ||
        options.length < 2 ||
        options.some(option => typeof option !== "string") ||
        !Number.isInteger(answer) ||
        answer < 0 ||
        answer >= options.length
    ) {

        console.error("Invalid question or answer.");

        return false;
    }

    questions[subject][yearKey][levelKey].push({

        q: question,

        options: [...options],

        answer: answer

    });

    return true;
}


// =========================================
// 6. ADD EXTRA QUESTIONS
// =========================================

// MATHS

addQuestion("math", 1, 1,
    "What is 2 + 3?",
    ["4", "5", "6"], 1
);

addQuestion("math", 6, 3,
    "What is 25% of 80?",
    ["10", "20", "30"], 1
);

addQuestion("math", 10, 5,
    "Solve: x squared = 49.",
    ["x = 6", "x = 7", "x = 8"], 1
);


// SCIENCE

addQuestion("science", 3, 2,
    "Which part of a plant absorbs water?",
    ["Roots", "Leaves", "Flowers"], 0
);

addQuestion("science", 8, 4,
    "What is the chemical symbol for potassium?",
    ["P", "K", "Po"], 1
);


// ENGLISH

addQuestion("english", 2, 1,
    "Which word is a verb?",
    ["Run", "Blue", "Table"], 0
);

addQuestion("english", 9, 4,
    "What is a metaphor?",
    ["A direct comparison", "An exaggeration", "A question"], 0
);


// HISTORY

addQuestion("history", 5, 2,
    "Who built the pyramids at Giza?",
    ["Romans", "Ancient Egyptians", "Vikings"], 1
);

addQuestion("history", 11, 5,
    "What was a major consequence of the Treaty of Versailles?",
    ["Germany faced reparations", "The Roman Empire expanded", "The Cold War ended"], 0
);


// GEOGRAPHY

addQuestion("geography", 4, 2,
    "Which continent is Brazil in?",
    ["Africa", "South America", "Europe"], 1
);

addQuestion("geography", 10, 5,
    "What does GDP per capita measure?",
    ["Average economic output per person", "Total population", "Annual rainfall"], 0
);


// =========================================
// 7. CHECK QUESTION DATABASE
// =========================================

console.log("School Quiz database loaded!");

console.log("Subjects:", Object.keys(questions).length);

console.log("Total combinations:", 275);

console.log(
    "Maths Year 1 Level 1 questions:",
    questions.math.year1.level1.length
);