
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   EXPANDED QUESTION DATABASE
========================================= */

const subjectQuestions = {

    math: [
        {
            q: "What is 7 + 5?",
            options: ["10", "12", "13"],
            answer: 1,
            topic: "Addition",
            explanation: "7 + 5 = 12."
        },
        {
            q: "What is 9 × 3?",
            options: ["27", "21", "18"],
            answer: 0,
            topic: "Multiplication",
            explanation: "9 groups of 3 make 27."
        },
        {
            q: "What is half of 20?",
            options: ["10", "5", "15"],
            answer: 0,
            topic: "Fractions",
            explanation: "Half means dividing by 2. 20 ÷ 2 = 10."
        },
        {
            q: "How many sides does a hexagon have?",
            options: ["5", "6", "8"],
            answer: 1,
            topic: "Geometry",
            explanation: "A hexagon is a polygon with six sides."
        },
        {
            q: "What is 25% of 200?",
            options: ["25", "50", "75"],
            answer: 1,
            topic: "Percentages",
            explanation: "25% is one quarter. 200 ÷ 4 = 50."
        },
        {
            q: "What is 3/4 of 20?",
            options: ["5", "15", "16"],
            answer: 1,
            topic: "Fractions",
            explanation: "20 ÷ 4 = 5, then 5 × 3 = 15."
        },
        {
            q: "What is the area of a rectangle measuring 8 cm by 5 cm?",
            options: ["13 cm²", "40 cm²", "26 cm²"],
            answer: 1,
            topic: "Area",
            explanation: "Area = length × width. 8 × 5 = 40 cm²."
        },
        {
            q: "Solve: 3x = 27.",
            options: ["6", "9", "12"],
            answer: 1,
            topic: "Algebra",
            explanation: "Divide both sides by 3. x = 27 ÷ 3 = 9."
        },
        {
            q: "What is the mean of 4, 8, 10 and 14?",
            options: ["8", "9", "10"],
            answer: 1,
            topic: "Statistics",
            explanation: "Add the numbers to get 36. Divide by 4 to get 9."
        },
        {
            q: "A £80 jacket is reduced by 25%. What is its new price?",
            options: ["£20", "£55", "£60"],
            answer: 2,
            topic: "Percentages",
            explanation: "25% of £80 is £20. £80 − £20 = £60."
        },
        {
            q: "What is 144 ÷ 12?",
            options: ["10", "12", "14"],
            answer: 1,
            topic: "Division",
            explanation: "12 × 12 = 144, so 144 ÷ 12 = 12."
        },
        {
            q: "Solve: 2(x + 3) = 18.",
            options: ["6", "9", "12"],
            answer: 0,
            topic: "Algebra",
            explanation: "Divide by 2 to get x + 3 = 9. Subtract 3, giving x = 6."
        },
        {
            q: "What is the probability of rolling a 6 on a fair six-sided die?",
            options: ["1/2", "1/6", "1/3"],
            answer: 1,
            topic: "Probability",
            explanation: "There is one successful outcome out of six equally likely outcomes."
        },
        {
            q: "What is the circumference of a circle with radius 3 cm? Use π = 3.14.",
            options: ["9.42 cm", "18.84 cm", "28.26 cm"],
            answer: 1,
            topic: "Geometry",
            explanation: "Circumference = 2πr = 2 × 3.14 × 3 = 18.84 cm."
        },
        {
            q: "Simplify the ratio 12:18.",
            options: ["2:3", "3:4", "4:5"],
            answer: 0,
            topic: "Ratio",
            explanation: "Divide both parts by 6 to get 2:3."
        }
    ],

    science: [
        {
            q: "Which part of a plant absorbs water from the soil?",
            options: ["Roots", "Flowers", "Leaves"],
            answer: 0,
            topic: "Plants",
            explanation: "Roots absorb water and mineral ions from the soil."
        },
        {
            q: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter"],
            answer: 1,
            topic: "Space",
            explanation: "Mars appears reddish because of iron oxide on its surface."
        },
        {
            q: "At what temperature does water freeze in Celsius?",
            options: ["0°C", "10°C", "100°C"],
            answer: 0,
            topic: "States of Matter",
            explanation: "Pure water freezes at approximately 0°C under normal atmospheric pressure."
        },
        {
            q: "Which organ pumps blood around the body?",
            options: ["Lungs", "Brain", "Heart"],
            answer: 2,
            topic: "Human Biology",
            explanation: "The heart pumps blood through the circulatory system."
        },
        {
            q: "Which gas do humans need for aerobic respiration?",
            options: ["Oxygen", "Helium", "Carbon dioxide"],
            answer: 0,
            topic: "Human Biology",
            explanation: "Cells use oxygen during aerobic respiration to release energy."
        },
        {
            q: "What force pulls objects towards Earth?",
            options: ["Gravity", "Magnetism", "Friction"],
            answer: 0,
            topic: "Forces",
            explanation: "Gravity is the attractive force between objects with mass."
        },
        {
            q: "Which part of a cell contains most of its genetic material?",
            options: ["Nucleus", "Cell membrane", "Cytoplasm"],
            answer: 0,
            topic: "Cells",
            explanation: "The nucleus contains most of the cell's genetic material."
        },
        {
            q: "What is the chemical symbol for sodium?",
            options: ["S", "Na", "So"],
            answer: 1,
            topic: "Chemistry",
            explanation: "Na is the chemical symbol for sodium."
        },
        {
            q: "Which particles have a negative electric charge?",
            options: ["Protons", "Neutrons", "Electrons"],
            answer: 2,
            topic: "Electricity",
            explanation: "Electrons carry a negative electric charge."
        },
        {
            q: "What is the pH of a neutral solution at room temperature?",
            options: ["0", "7", "14"],
            answer: 1,
            topic: "Chemistry",
            explanation: "A neutral solution has a pH of approximately 7 at room temperature."
        },
        {
            q: "What is the process called when liquid water becomes water vapour?",
            options: ["Freezing", "Evaporation", "Condensation"],
            answer: 1,
            topic: "States of Matter",
            explanation: "Evaporation happens when particles escape from a liquid and become gas."
        },
        {
            q: "Which type of rock forms when magma cools?",
            options: ["Sedimentary", "Igneous", "Metamorphic"],
            answer: 1,
            topic: "Earth Science",
            explanation: "Igneous rocks form when molten rock cools and solidifies."
        },
        {
            q: "What is photosynthesis?",
            options: [
                "The process plants use to make glucose using light",
                "The process animals use to digest food",
                "The process rocks use to form"
            ],
            answer: 0,
            topic: "Plants",
            explanation: "Photosynthesis uses light energy to convert carbon dioxide and water into glucose and oxygen."
        },
        {
            q: "What is the main energy source for most ecosystems?",
            options: ["The Sun", "The Moon", "The soil"],
            answer: 0,
            topic: "Ecosystems",
            explanation: "Most food chains begin with producers that obtain energy from sunlight."
        },
        {
            q: "Which process releases energy from glucose in cells?",
            options: ["Respiration", "Photosynthesis", "Filtration"],
            answer: 0,
            topic: "Cells",
            explanation: "Cellular respiration releases energy from glucose."
        }
    ],

    english: [
        {
            q: "Which word is a noun?",
            options: ["Quickly", "Teacher", "Blue"],
            answer: 1,
            explanation: "A teacher is a person, and nouns name people, places, things or ideas."
        },
        {
            q: "What is the plural of child?",
            options: ["Childs", "Children", "Childes"],
            answer: 1,
            explanation: "Children is the irregular plural of child."
        },
        {
            q: "Which word is an adjective?",
            options: ["Bright", "Jump", "Carefully"],
            answer: 0,
            explanation: "Bright is an adjective because it describes a noun."
        },
        {
            q: "Which punctuation mark ends a question?",
            options: ["Full stop", "Question mark", "Comma"],
            answer: 1,
            explanation: "A question mark is used at the end of a direct question."
        },
        {
            q: "Which word is a synonym for happy?",
            options: ["Sad", "Joyful", "Tired"],
            answer: 1,
            explanation: "Joyful has a similar meaning to happy."
        },
        {
            q: "What is the past tense of walk?",
            options: ["Walks", "Walking", "Walked"],
            answer: 2,
            explanation: "Walked is the past tense of walk."
        },
        {
            q: "Which word is an adverb in 'She spoke softly'?",
            options: ["She", "Spoke", "Softly"],
            answer: 2,
            explanation: "Softly describes how she spoke."
        },
        {
            q: "What is a metaphor?",
            options: [
                "A direct comparison",
                "An exaggeration only",
                "A question"
            ],
            answer: 0,
            explanation: "A metaphor describes something as something else to create meaning."
        },
        {
            q: "Which sentence uses a semicolon correctly?",
            options: [
                "I was tired; I went to bed early.",
                "I; was tired I went to bed early.",
                "I was tired I; went to bed early."
            ],
            answer: 0,
            explanation: "A semicolon can join two closely related independent clauses."
        }
    ],

    history: [
        {
            q: "Which ancient civilisation built the pyramids at Giza?",
            options: ["Ancient Egyptians", "Romans", "Vikings"],
            answer: 0,
            explanation: "The pyramids at Giza were built in ancient Egypt."
        },
        {
            q: "In which year did humans first land on the Moon?",
            options: ["1959", "1969", "1979"],
            answer: 1,
            explanation: "Apollo 11 landed on the Moon in July 1969."
        },
        {
            q: "What was the name of the ship that carried the Pilgrims to North America in 1620?",
            options: ["Mayflower", "Endeavour", "Beagle"],
            answer: 0,
            explanation: "The Mayflower carried the English Separatists to North America."
        },
        {
            q: "Which ancient city was buried by Mount Vesuvius?",
            options: ["Athens", "Pompeii", "Carthage"],
            answer: 1,
            explanation: "Pompeii was buried during the eruption of Mount Vesuvius in AD 79."
        },
        {
            q: "What do historians study?",
            options: ["The past", "The weather", "Outer space"],
            answer: 0,
            explanation: "Historians investigate and interpret evidence about the past."
        },
        {
            q: "Which event began in 1914 and ended in 1918?",
            options: ["World War I", "World War II", "The Cold War"],
            answer: 0,
            explanation: "World War I lasted from 1914 to 1918."
        },
        {
            q: "What was the Renaissance?",
            options: [
                "A period of renewed art and learning",
                "A medieval farming tool",
                "A Roman military rank"
            ],
            answer: 0,
            explanation: "The Renaissance was a period of cultural and intellectual change in Europe."
        },
        {
            q: "Which agreement formally ended World War I between Germany and the Allies?",
            options: ["Treaty of Versailles", "Treaty of Paris", "Magna Carta"],
            answer: 0,
            explanation: "The Treaty of Versailles was signed in 1919."
        }
    ],

    geography: [
        {
            q: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
            answer: 2,
            explanation: "The Pacific Ocean is the largest ocean on Earth."
        },
        {
            q: "On which continent is Egypt?",
            options: ["Africa", "Asia", "Europe"],
            answer: 0,
            explanation: "Most of Egypt is located in northeastern Africa."
        },
        {
            q: "What is the imaginary line around the middle of Earth called?",
            options: ["The Equator", "The Prime Meridian", "The Tropic of Capricorn"],
            answer: 0,
            explanation: "The Equator is the line of latitude at 0 degrees."
        },
        {
            q: "Which is the largest hot desert in the world?",
            options: ["Gobi Desert", "Sahara Desert", "Mojave Desert"],
            answer: 1,
            explanation: "The Sahara is the world's largest hot desert."
        },
        {
            q: "What is the capital city of Australia?",
            options: ["Sydney", "Canberra", "Melbourne"],
            answer: 1,
            explanation: "Canberra is Australia's capital city."
        },
        {
            q: "What does a map scale help you find?",
            options: ["Real-world distances", "The age of a city", "Tomorrow's weather"],
            answer: 0,
            explanation: "A map scale shows the relationship between map distance and real distance."
        },
        {
            q: "What is urbanisation?",
            options: [
                "Growth of towns and cities",
                "Movement of glaciers",
                "Formation of a coastline"
            ],
            answer: 0,
            explanation: "Urbanisation is the growth in the proportion of people living in urban areas."
        },
        {
            q: "What does population density measure?",
            options: [
                "People per unit of area",
                "Births per year worldwide",
                "The size of a country's economy"
            ],
            answer: 0,
            explanation: "Population density measures the number of people living in a given area."
        }
    ]
};


/* =========================================
   LEVEL QUESTION BANKS
========================================= */

const levelQuestions = {

    math: {
        level1: [
            {
                q: "What is 4 + 3?",
                options: ["6", "7", "8"],
                answer: 1,
                explanation: "4 + 3 = 7."
            },
            {
                q: "Which number comes after 19?",
                options: ["18", "20", "21"],
                answer: 1,
                explanation: "20 comes immediately after 19."
            },
            {
                q: "What is 10 - 6?",
                options: ["3", "4", "5"],
                answer: 1,
                explanation: "10 take away 6 leaves 4."
            }
        ],

        level2: [
            {
                q: "What is 24 + 18?",
                options: ["32", "42", "52"],
                answer: 1,
                explanation: "24 + 18 = 42."
            },
            {
                q: "What is 5 × 6?",
                options: ["25", "30", "35"],
                answer: 1,
                explanation: "5 groups of 6 make 30."
            },
            {
                q: "How many minutes are in 2 hours?",
                options: ["100", "120", "200"],
                answer: 1,
                explanation: "2 × 60 = 120 minutes."
            }
        ],

        level3: [
            {
                q: "What is 144 divided by 12?",
                options: ["10", "12", "14"],
                answer: 1,
                explanation: "144 ÷ 12 = 12."
            },
            {
                q: "What is 3/4 of 20?",
                options: ["5", "15", "16"],
                answer: 1,
                explanation: "20 ÷ 4 × 3 = 15."
            },
            {
                q: "Find the perimeter of a rectangle 6 cm long and 4 cm wide.",
                options: ["10 cm", "20 cm", "24 cm"],
                answer: 1,
                explanation: "Perimeter = 6 + 4 + 6 + 4 = 20 cm."
            }
        ],

        level4: [
            {
                q: "What is 15% of 200?",
                options: ["15", "30", "45"],
                answer: 1,
                explanation: "10% is 20 and 5% is 10, so 15% is 30."
            },
            {
                q: "Solve: 3x = 27.",
                options: ["x = 8", "x = 9", "x = 24"],
                answer: 1,
                explanation: "Divide both sides by 3. x = 9."
            },
            {
                q: "Find the area of a triangle with base 10 cm and height 6 cm.",
                options: ["30 cm²", "60 cm²", "16 cm²"],
                answer: 0,
                explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30 cm²."
            }
        ],

        level5: [
            {
                q: "Solve: 2(x + 3) = 18.",
                options: ["x = 6", "x = 9", "x = 12"],
                answer: 0,
                explanation: "Divide by 2, then subtract 3. x = 6."
            },
            {
                q: "What is the mean of 4, 8, 10 and 14?",
                options: ["8", "9", "10"],
                answer: 1,
                explanation: "The total is 36. Divide by 4 to get 9."
            },
            {
                q: "A jacket costs £80 and is reduced by 25%. What is the sale price?",
                options: ["£20", "£55", "£60"],
                answer: 2,
                explanation: "25% of £80 is £20. The new price is £60."
            }
        ]
    },

    science: {
        level1: [
            {
                q: "Which part of a plant takes in water?",
                options: ["Roots", "Flowers", "Leaves"],
                answer: 0,
                explanation: "Roots absorb water from the soil."
            },
            {
                q: "Which animal is a mammal?",
                options: ["Frog", "Dolphin", "Lizard"],
                answer: 1,
                explanation: "Dolphins are mammals because they breathe air and feed their young with milk."
            },
            {
                q: "What is water called when it becomes a solid?",
                options: ["Ice", "Steam", "Rain"],
                answer: 0,
                explanation: "Frozen water is called ice."
            }
        ],

        level2: [
            {
                q: "What force pulls objects towards Earth?",
                options: ["Gravity", "Magnetism", "Friction"],
                answer: 0,
                explanation: "Gravity attracts objects towards Earth."
            },
            {
                q: "Which material is attracted to a magnet?",
                options: ["Wood", "Iron", "Glass"],
                answer: 1,
                explanation: "Iron is a magnetic material."
            },
            {
                q: "What is Earth's main source of energy?",
                options: ["The Sun", "The Moon", "The ocean"],
                answer: 0,
                explanation: "The Sun provides most of the energy that drives Earth's systems."
            }
        ],

        level3: [
            {
                q: "What is liquid water changing into water vapour called?",
                options: ["Freezing", "Evaporation", "Condensation"],
                answer: 1,
                explanation: "Evaporation changes a liquid into a gas."
            },
            {
                q: "Which cell part contains most genetic material?",
                options: ["Nucleus", "Cell wall", "Cytoplasm"],
                answer: 0,
                explanation: "The nucleus contains most of a cell's DNA."
            },
            {
                q: "Which type of rock forms when magma cools?",
                options: ["Sedimentary", "Igneous", "Metamorphic"],
                answer: 1,
                explanation: "Igneous rocks form from cooled molten rock."
            }
        ],

        level4: [
            {
                q: "What is the chemical symbol for potassium?",
                options: ["P", "K", "Po"],
                answer: 1,
                explanation: "K is the chemical symbol for potassium."
            },
            {
                q: "Which particles have a negative charge?",
                options: ["Protons", "Neutrons", "Electrons"],
                answer: 2,
                explanation: "Electrons have a negative electric charge."
            },
            {
                q: "What do decomposers do in an ecosystem?",
                options: [
                    "Break down dead matter",
                    "Make sunlight",
                    "Stop the water cycle"
                ],
                answer: 0,
                explanation: "Decomposers recycle nutrients by breaking down dead organisms and waste."
            }
        ],

        level5: [
            {
                q: "What is the pH of a neutral solution at room temperature?",
                options: ["0", "7", "14"],
                answer: 1,
                explanation: "A neutral solution has a pH of approximately 7."
            },
            {
                q: "What is the original energy source for most ecosystems?",
                options: ["The Sun", "The soil", "The Moon"],
                answer: 0,
                explanation: "Sunlight provides energy for photosynthesis in most ecosystems."
            },
            {
                q: "Which process produces most ATP during aerobic respiration?",
                options: [
                    "Glycolysis",
                    "The Krebs cycle",
                    "Oxidative phosphorylation"
                ],
                answer: 2,
                explanation: "Oxidative phosphorylation produces most ATP in aerobic respiration."
            }
        ]
    }
};


/* =========================================
   BUILD THE QUESTION DATABASE
========================================= */

const questions = {};

const subjects = Object.keys(subjectQuestions);

for (const subject of subjects) {

    questions[subject] = {};

    for (let year = 1; year <= 11; year++) {

        const yearKey = `year${year}`;

        questions[subject][yearKey] = {};

        for (let level = 1; level <= 5; level++) {

            const levelKey = `level${level}`;

            const general = subjectQuestions[subject];

            const levelBank = levelQuestions[subject]?.[levelKey] || [];

            questions[subject][yearKey][levelKey] = [
                ...general,
                ...levelBank
            ].map(question => ({
                ...question,
                year: year,
                level: level
            }));

        }
    }
}


/* =========================================
   ADD CUSTOM QUESTIONS
========================================= */

function addQuestion(
    subject,
    year,
    level,
    question,
    options,
    answer,
    explanation = "Review the question and think about why this answer is correct.",
    topic = "General"
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
        answer,
        explanation,
        topic,
        year,
        level
    });

    return true;
}


/* =========================================
   EXAMPLE CUSTOM QUESTIONS
========================================= */

addQuestion(
    "math", 6, 3,
    "What is 25% of 80?",
    ["10", "20", "30"],
    1,
    "25% is one quarter. 80 divided by 4 is 20.",
    "Percentages"
);

addQuestion(
    "math", 10, 5,
    "Solve: x² = 49, where x is positive.",
    ["6", "7", "8"],
    1,
    "7 × 7 = 49, so the positive value of x is 7.",
    "Algebra"
);

addQuestion(
    "science", 8, 4,
    "What is the chemical symbol for potassium?",
    ["P", "K", "Po"],
    1,
    "The chemical symbol for potassium is K.",
    "Chemistry"
);


/* =========================================
   DATABASE CHECK
========================================= */

console.log("School Quiz database loaded!");
console.log("Subjects:", subjects.length);
console.log("Year and level combinations:", subjects.length * 11 * 5);
console.log(
    "Maths Year 1 Level 1 questions:",
    questions.math.year1.level1.length
);
