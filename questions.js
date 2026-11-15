
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   EXPANDED QUESTION DATABASE
========================================= */

// Helper to create questions consistently
function makeQuestion(q, options, answer, topic, explanation) {
    return { q, options, answer, topic, explanation };
}

/* =========================================
   1. MATHS QUESTIONS
========================================= */

const levelQuestions = {

    math: {
        level1: [
            makeQuestion("What is 5 + 3?", ["7", "8", "9"], 1, "Addition", "5 + 3 = 8."),
            makeQuestion("What is 10 - 4?", ["5", "6", "7"], 1, "Subtraction", "10 - 4 = 6."),
            makeQuestion("What is 2 × 3?", ["5", "6", "8"], 1, "Multiplication", "2 groups of 3 make 6."),
            makeQuestion("Which number is largest?", ["12", "9", "15"], 2, "Number", "15 is greater than 12 and 9."),
            makeQuestion("How many sides does a triangle have?", ["3", "4", "5"], 0, "Shapes", "A triangle has three sides.")
        ],

        level2: [
            makeQuestion("What is 25 + 17?", ["42", "41", "43"], 0, "Addition", "25 + 17 = 42."),
            makeQuestion("What is 8 × 7?", ["54", "56", "64"], 1, "Multiplication", "8 multiplied by 7 equals 56."),
            makeQuestion("What is half of 90?", ["40", "45", "50"], 1, "Fractions", "90 divided by 2 equals 45."),
            makeQuestion("What is 100 - 37?", ["63", "67", "73"], 0, "Subtraction", "100 - 37 = 63."),
            makeQuestion("How many centimetres are in a metre?", ["10", "100", "1000"], 1, "Measurement", "One metre contains 100 centimetres.")
        ],

        level3: [
            makeQuestion("What is 15% of 200?", ["20", "30", "40"], 1, "Percentages", "10% is 20 and 5% is 10, giving 30."),
            makeQuestion("Solve: 4x = 28.", ["6", "7", "8"], 1, "Algebra", "Divide both sides by 4. x = 7."),
            makeQuestion("What is 3/4 as a decimal?", ["0.25", "0.5", "0.75"], 2, "Fractions", "3 divided by 4 equals 0.75."),
            makeQuestion("What is the area of a rectangle 8 cm by 5 cm?", ["13 cm²", "40 cm²", "26 cm²"], 1, "Area", "Area = length × width = 8 × 5 = 40 cm²."),
            makeQuestion("What is the mean of 4, 6 and 8?", ["5", "6", "7"], 1, "Statistics", "The total is 18. Divide by 3 to get 6.")
        ],

        level4: [
            makeQuestion("Solve: 3x + 5 = 20.", ["4", "5", "6"], 1, "Algebra", "Subtract 5, then divide by 3. x = 5."),
            makeQuestion("What is the square root of 196?", ["12", "13", "14"], 2, "Square Roots", "14 × 14 = 196."),
            makeQuestion("What is 35% of 80?", ["24", "28", "32"], 1, "Percentages", "0.35 × 80 = 28."),
            makeQuestion("A triangle has angles 60° and 70°. What is the third angle?", ["40°", "50°", "60°"], 1, "Angles", "Angles in a triangle add up to 180°."),
            makeQuestion("Expand 3(x + 4).", ["3x + 4", "3x + 12", "x + 12"], 1, "Algebra", "Multiply both terms by 3.")
        ],

        level5: [
            makeQuestion("Solve: 2x + 7 = 31.", ["10", "12", "14"], 1, "Algebra", "Subtract 7 to get 2x = 24, then divide by 2."),
            makeQuestion("What is the gradient of y = 4x + 3?", ["3", "4", "7"], 1, "Graphs", "In y = mx + c, m represents the gradient."),
            makeQuestion("Factorise x² + 7x + 12.", ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)"], 0, "Algebra", "3 and 4 multiply to 12 and add to 7."),
            makeQuestion("What is the probability of rolling an even number on a fair six-sided die?", ["1/3", "1/2", "2/3"], 1, "Probability", "Three of the six possible outcomes are even."),
            makeQuestion("A price increases from £80 to £100. What is the percentage increase?", ["20%", "25%", "30%"], 1, "Percentages", "The increase is £20. 20 ÷ 80 × 100 = 25%.")
        ]
    },

    /* =====================================
       2. SCIENCE QUESTIONS
    ===================================== */

    science: {
        level1: [
            makeQuestion("Which planet do we live on?", ["Mars", "Earth", "Venus"], 1, "Space", "Earth is the planet we live on."),
            makeQuestion("Which part of a plant absorbs water?", ["Roots", "Flowers", "Leaves"], 0, "Plants", "Roots absorb water and minerals from the soil."),
            makeQuestion("What do humans need to breathe?", ["Oxygen", "Helium", "Carbon dioxide"], 0, "Living Things", "Humans need oxygen for respiration."),
            makeQuestion("Which animal is a mammal?", ["Shark", "Dolphin", "Frog"], 1, "Animals", "Dolphins are mammals because they breathe air and feed their young with milk."),
            makeQuestion("What is the Sun?", ["A planet", "A star", "A moon"], 1, "Space", "The Sun is a star at the centre of our Solar System.")
        ],

        level2: [
            makeQuestion("What is the boiling point of water at normal atmospheric pressure?", ["50°C", "100°C", "150°C"], 1, "States of Matter", "Water boils at approximately 100°C."),
            makeQuestion("Which organ pumps blood around the body?", ["Lungs", "Heart", "Brain"], 1, "Human Body", "The heart pumps blood around the body."),
            makeQuestion("What force pulls objects towards Earth?", ["Magnetism", "Gravity", "Friction"], 1, "Forces", "Gravity attracts objects towards Earth."),
            makeQuestion("Which gas do plants absorb during photosynthesis?", ["Oxygen", "Carbon dioxide", "Nitrogen"], 1, "Photosynthesis", "Plants use carbon dioxide, water and light to make glucose."),
            makeQuestion("What is the chemical symbol for oxygen?", ["O", "Ox", "Og"], 0, "Elements", "The chemical symbol for oxygen is O.")
        ],

        level3: [
            makeQuestion("What is the function of red blood cells?", ["Fight infection", "Carry oxygen", "Digest food"], 1, "Blood", "Red blood cells contain haemoglobin, which carries oxygen."),
            makeQuestion("What is the smallest unit of an element?", ["Cell", "Atom", "Organ"], 1, "Atoms", "An atom is the smallest unit of an element that retains its chemical properties."),
            makeQuestion("Which type of energy is stored in a stretched spring?", ["Elastic potential", "Sound", "Thermal"], 0, "Energy", "A stretched spring stores elastic potential energy."),
            makeQuestion("What is the pH of a neutral solution?", ["0", "7", "14"], 1, "Acids and Alkalis", "A neutral solution has a pH of 7."),
            makeQuestion("Which process releases energy from glucose in cells?", ["Respiration", "Photosynthesis", "Evaporation"], 0, "Cells", "Respiration releases energy from glucose.")
        ],

        level4: [
            makeQuestion("What is the equation for calculating density?", ["Mass × volume", "Mass ÷ volume", "Volume ÷ mass"], 1, "Density", "Density equals mass divided by volume."),
            makeQuestion("What is the charge of an electron?", ["Positive", "Negative", "Neutral"], 1, "Atomic Structure", "Electrons have a negative charge."),
            makeQuestion("Which particle is found in the nucleus and has no charge?", ["Proton", "Electron", "Neutron"], 2, "Atomic Structure", "Neutrons have no electrical charge."),
            makeQuestion("What happens to particles when a substance is heated?", ["They usually move faster", "They disappear", "They stop moving"], 0, "Particle Model", "Heating usually increases the particles' kinetic energy."),
            makeQuestion("Which organelle is the main site of aerobic respiration?", ["Nucleus", "Mitochondrion", "Ribosome"], 1, "Cells", "Mitochondria are the main site of aerobic respiration.")
        ],

        level5: [
            makeQuestion("What is the balanced symbol equation for magnesium reacting with oxygen?", ["Mg + O₂ → MgO", "2Mg + O₂ → 2MgO", "Mg + 2O₂ → MgO"], 1, "Chemical Equations", "Two magnesium atoms react with one oxygen molecule to form two magnesium oxide units."),
            makeQuestion("What is the unit of electrical resistance?", ["Volt", "Ampere", "Ohm"], 2, "Electricity", "Electrical resistance is measured in ohms (Ω)."),
            makeQuestion("Which type of bonding involves shared pairs of electrons?", ["Ionic", "Covalent", "Metallic"], 1, "Bonding", "Covalent bonds form when atoms share pairs of electrons."),
            makeQuestion("What is the role of enzymes in the body?", ["Speed up reactions", "Store genetic information", "Carry oxygen"], 0, "Enzymes", "Enzymes are biological catalysts that speed up reactions."),
            makeQuestion("What is the formula for calculating momentum?", ["Mass × velocity", "Force × distance", "Mass ÷ acceleration"], 0, "Forces", "Momentum equals mass multiplied by velocity.")
        ]
    },

    /* =====================================
       3. ENGLISH QUESTIONS
    ===================================== */

    english: {
        level1: [
            makeQuestion("Which word is a noun?", ["Run", "Beautiful", "Teacher"], 2, "Grammar", "A teacher is a person, so it is a noun."),
            makeQuestion("Which word is a verb?", ["Jump", "Blue", "Table"], 0, "Grammar", "Jump is an action word, so it is a verb."),
            makeQuestion("Choose the correct spelling.", ["Frend", "Friend", "Freind"], 1, "Spelling", "Friend is the correct spelling."),
            makeQuestion("Which punctuation mark ends a question?", [".", "?", "!"], 1, "Punctuation", "A question mark is used at the end of a question."),
            makeQuestion("Which word is an adjective?", ["Quickly", "Happy", "Swim"], 1, "Grammar", "Happy describes a noun, making it an adjective.")
        ],

        level2: [
            makeQuestion("What is the plural of child?", ["Childs", "Children", "Childes"], 1, "Grammar", "Children is the irregular plural of child."),
            makeQuestion("Which sentence uses a capital letter correctly?", ["i like reading.", "I like reading.", "i Like reading."], 1, "Punctuation", "The first word of a sentence and the pronoun I use capital letters."),
            makeQuestion("What is a synonym for 'enormous'?", ["Tiny", "Huge", "Quiet"], 1, "Vocabulary", "Huge has a similar meaning to enormous."),
            makeQuestion("Which word is an adverb?", ["Slowly", "Careful", "House"], 0, "Grammar", "Slowly describes how an action is performed."),
            makeQuestion("What is the opposite of 'ancient'?", ["Old", "Modern", "Historic"], 1, "Vocabulary", "Modern means belonging to the present or recent times.")
        ],

        level3: [
            makeQuestion("What is a metaphor?", ["A direct comparison", "A repeated sound", "An exaggeration"], 0, "Language Techniques", "A metaphor describes something as something else to create meaning."),
            makeQuestion("Which sentence is written in the past tense?", ["She walks home.", "She walked home.", "She will walk home."], 1, "Tenses", "Walked is the past-tense form of walk."),
            makeQuestion("What is alliteration?", ["Repeated vowel sounds", "Repeated initial consonant sounds", "A comparison using like"], 1, "Language Techniques", "Alliteration repeats consonant sounds at the beginnings of nearby words."),
            makeQuestion("Which word is a conjunction?", ["Because", "Bright", "Quickly"], 0, "Grammar", "Because connects clauses and explains a reason."),
            makeQuestion("What is the main purpose of a persuasive text?", ["To convince the reader", "To list random facts", "To tell a joke"], 0, "Writing", "Persuasive writing aims to influence the reader's opinion or actions.")
        ],

        level4: [
            makeQuestion("What is dramatic irony?", ["The audience knows something a character does not", "A character tells a joke", "The story has no conflict"], 0, "Literature", "Dramatic irony occurs when the audience knows more than a character."),
            makeQuestion("What is personification?", ["Giving human qualities to something non-human", "Repeating a word", "Using a question"], 0, "Language Techniques", "Personification gives human characteristics to objects, animals or ideas."),
            makeQuestion("Which is an example of a complex sentence?", ["I ran.", "I ran because I was late.", "Run!"], 1, "Sentence Structure", "The sentence contains a main clause and a subordinate clause."),
            makeQuestion("What is the purpose of a rhetorical question?", ["To make the reader think", "To request a factual answer every time", "To introduce a character"], 0, "Persuasive Writing", "A rhetorical question encourages thought rather than requiring an answer."),
            makeQuestion("What is a semantic field?", ["A group of words linked by meaning", "A type of punctuation", "A rhyme scheme"], 0, "Language Analysis", "A semantic field is a group of words associated with a particular topic.")
        ],

        level5: [
            makeQuestion("What is juxtaposition?", ["Placing contrasting ideas close together", "Repeating a sentence", "Using only short words"], 0, "Language Analysis", "Juxtaposition highlights differences by placing contrasting ideas near each other."),
            makeQuestion("What is an unreliable narrator?", ["A narrator whose account may not be trustworthy", "A narrator who knows every character's thoughts", "A narrator who never speaks"], 0, "Narrative", "An unreliable narrator may misunderstand, omit or distort events."),
            makeQuestion("What is anaphora?", ["Repetition at the beginning of successive clauses", "A comparison using like", "A type of rhyme"], 0, "Language Techniques", "Anaphora repeats a word or phrase at the start of successive clauses."),
            makeQuestion("What is the effect of a cyclical structure?", ["The ending links back to the beginning", "The story has no ending", "Every paragraph is a new story"], 0, "Structure", "A cyclical structure returns to an idea or event from the opening."),
            makeQuestion("What does 'ambiguous' mean?", ["Having more than one possible meaning", "Completely obvious", "Very humorous"], 0, "Vocabulary", "Ambiguous language can be interpreted in more than one way.")
        ]
    },

    /* =====================================
       4. HISTORY QUESTIONS
    ===================================== */

    history: {
        level1: [
            makeQuestion("What is history?", ["The study of the past", "The study of space", "The study of plants"], 0, "Historical Knowledge", "History is the study of past events and people."),
            makeQuestion("Which ancient civilisation built the pyramids at Giza?", ["Romans", "Ancient Egyptians", "Vikings"], 1, "Ancient Egypt", "The ancient Egyptians built the pyramids at Giza."),
            makeQuestion("What is an archaeologist?", ["Someone who studies the past using material remains", "A weather scientist", "A musician"], 0, "Historical Skills", "Archaeologists study objects and remains from the past."),
            makeQuestion("Which people were famous for longship voyages?", ["Vikings", "Aztecs", "Ancient Greeks"], 0, "Vikings", "The Vikings travelled using longships."),
            makeQuestion("What is a timeline?", ["Events arranged in time order", "A type of map", "A list of countries"], 0, "Historical Skills", "A timeline shows events in chronological order.")
        ],

        level2: [
            makeQuestion("In which year did the Battle of Hastings take place?", ["1066", "1215", "1415"], 0, "Norman Conquest", "The Battle of Hastings took place in 1066."),
            makeQuestion("Who was the first Tudor king of England?", ["Henry VIII", "Henry VII", "Edward VI"], 1, "Tudors", "Henry VII became king in 1485."),
            makeQuestion("What was the Black Death?", ["A major plague", "A war", "A volcanic eruption"], 0, "Medieval History", "The Black Death was a devastating plague that spread through Europe in the 14th century."),
            makeQuestion("Which document was agreed in 1215?", ["Magna Carta", "Domesday Book", "Bill of Rights"], 0, "Medieval History", "Magna Carta was agreed in 1215 and placed limits on royal power."),
            makeQuestion("What was the main purpose of castles in medieval England?", ["Defence and control", "Growing crops", "Printing books"], 0, "Medieval History", "Castles helped defend territory and demonstrate power.")
        ],

        level3: [
            makeQuestion("What was the Industrial Revolution?", ["A period of major industrial and technological change", "A medieval religious movement", "A Roman invasion"], 0, "Industrial Revolution", "The Industrial Revolution transformed production, transport and society."),
            makeQuestion("Who was the British monarch during much of the Victorian era?", ["Queen Victoria", "Queen Elizabeth I", "Mary I"], 0, "Victorian Britain", "Queen Victoria reigned from 1837 to 1901."),
            makeQuestion("What was the transatlantic slave trade?", ["The forced transportation and enslavement of Africans across the Atlantic", "A peaceful trade agreement", "A migration of Roman soldiers"], 0, "Slavery", "Millions of Africans were forcibly transported and enslaved across the Atlantic."),
            makeQuestion("Which invention helped transform textile production during the Industrial Revolution?", ["Spinning Jenny", "Telephone", "Steam locomotive only"], 0, "Industrial Revolution", "The Spinning Jenny allowed multiple threads to be spun at once."),
            makeQuestion("What was the purpose of the Domesday Book?", ["To record land and resources in England", "To describe Roman battles", "To list Tudor kings"], 0, "Norman England", "William the Conqueror ordered the survey to record landholding and resources.")
        ],

        level4: [
            makeQuestion("What event triggered the First World War in 1914?", ["The assassination of Archduke Franz Ferdinand", "The fall of the Berlin Wall", "The Russian Revolution"], 0, "First World War", "The assassination in Sarajevo helped trigger the July Crisis and war."),
            makeQuestion("What was the Treaty of Versailles?", ["A peace treaty after the First World War", "A treaty ending the Second World War", "A medieval law"], 0, "First World War", "The treaty was signed in 1919 and set terms for peace with Germany."),
            makeQuestion("What was the Cold War mainly a rivalry between?", ["USA and USSR", "Britain and France", "Spain and Portugal"], 0, "Cold War", "The Cold War was a political and ideological rivalry between the United States and Soviet Union."),
            makeQuestion("What was the Holocaust?", ["The systematic persecution and murder of six million Jews by Nazi Germany and its collaborators", "A medieval battle", "A peace conference"], 0, "Second World War", "The Holocaust was the genocide of Europe's Jews during the Nazi era."),
            makeQuestion("What was the main aim of the suffragettes?", ["To win votes for women", "To end industrialisation", "To restore the monarchy"], 0, "Women's Rights", "The suffragettes campaigned for women's right to vote.")
        ],

        level5: [
            makeQuestion("What does 'appeasement' mean in the context of the 1930s?", ["Making concessions to avoid conflict", "Declaring war immediately", "Building an empire"], 0, "Second World War", "Appeasement involved making concessions to Nazi Germany in an attempt to prevent war."),
            makeQuestion("What was one major consequence of the Russian Revolution of 1917?", ["The Bolsheviks came to power", "The Roman Empire was restored", "The Cold War ended"], 0, "Russian Revolution", "The Bolsheviks took power and eventually established a communist state."),
            makeQuestion("What is historical interpretation?", ["A way historians explain and understand the past", "A list of dates only", "A modern weather report"], 0, "Historical Skills", "Interpretations are explanations of the past based on evidence and perspectives."),
            makeQuestion("Why might two historians disagree about an event?", ["They may interpret evidence differently", "The past changes every day", "Sources always contain identical information"], 0, "Historical Skills", "Historians can reach different conclusions because they assess evidence and context differently."),
            makeQuestion("What was the significance of the Berlin Wall falling in 1989?", ["It became a symbol of the weakening division of Europe", "It started the First World War", "It created the Roman Empire"], 0, "Cold War", "Its fall symbolised the collapse of communist control in Eastern Europe and the approaching end of the Cold War.")
        ]
    },

    /* =====================================
       5. GEOGRAPHY QUESTIONS
    ===================================== */

    geography: {
        level1: [
            makeQuestion("What is the largest ocean on Earth?", ["Atlantic", "Pacific", "Indian"], 1, "Oceans", "The Pacific Ocean is the largest."),
            makeQuestion("Which direction does the Sun rise from?", ["East", "West", "North"], 0, "Directions", "The Sun appears to rise in the east."),
            makeQuestion("What is a mountain?", ["A high natural area of land", "A large lake", "A flat plain"], 0, "Physical Geography", "A mountain is a raised area of land, usually with steep sides."),
            makeQuestion("Which continent is the United Kingdom in?", ["Asia", "Europe", "Africa"], 1, "Continents", "The United Kingdom is in Europe."),
            makeQuestion("What is a river?", ["A flowing body of water", "A type of mountain", "A desert plant"], 0, "Rivers", "A river is a natural stream of flowing water.")
        ],

        level2: [
            makeQuestion("What is the capital city of France?", ["Madrid", "Paris", "Rome"], 1, "World Cities", "Paris is the capital of France."),
            makeQuestion("What is a volcano?", ["An opening where magma can reach the surface", "A type of river", "A man-made lake"], 0, "Volcanoes", "Volcanoes can release lava, ash and gases."),
            makeQuestion("What is the Equator?", ["An imaginary line around the middle of Earth", "The line through the North Pole", "The edge of a continent"], 0, "Latitude", "The Equator is at 0° latitude."),
            makeQuestion("Which instrument measures temperature?", ["Barometer", "Thermometer", "Compass"], 1, "Weather", "A thermometer measures temperature."),
            makeQuestion("What is a desert?", ["A very dry environment", "A rainforest", "A frozen ocean"], 0, "Biomes", "Deserts receive very little precipitation.")
        ],

        level3: [
            makeQuestion("What is erosion?", ["The wearing away and movement of rock or soil", "The formation of clouds", "The growth of forests"], 0, "Physical Processes", "Erosion involves material being worn away and transported."),
            makeQuestion("What is urbanisation?", ["An increase in the proportion of people living in towns and cities", "A decrease in rainfall", "The movement of tectonic plates"], 0, "Human Geography", "Urbanisation is the growth of urban populations and areas."),
            makeQuestion("Which layer of Earth is the outermost solid layer?", ["Core", "Mantle", "Crust"], 2, "Earth Structure", "The crust is Earth's outermost solid layer."),
            makeQuestion("What is precipitation?", ["Water falling from the atmosphere", "Water flowing underground", "Water evaporating from oceans"], 0, "Weather and Climate", "Precipitation includes rain, snow, sleet and hail."),
            makeQuestion("What is a renewable resource?", ["A resource that can be replenished naturally", "A resource that can never be replaced", "A resource made only from plastic"], 0, "Resources", "Renewable resources can be naturally replenished.")
        ],

        level4: [
            makeQuestion("What causes tectonic plates to move?", ["Processes within Earth's mantle", "Ocean tides only", "The Moon's light"], 0, "Tectonic Processes", "Heat-driven movement within the mantle helps drive plate motion."),
            makeQuestion("What is a meander?", ["A bend in a river", "A type of volcano", "A coastal cliff"], 0, "Rivers", "A meander is a winding bend in a river."),
            makeQuestion("What is the main cause of the seasons?", ["Earth's tilted axis as it orbits the Sun", "Changes in Earth's distance from the Moon", "The ocean currents stopping"], 0, "Climate", "Earth's tilted axis changes the angle and duration of sunlight during the year."),
            makeQuestion("What is a population pyramid used to show?", ["The age and sex structure of a population", "The height of mountains", "Annual rainfall only"], 0, "Population", "Population pyramids show the age and sex distribution of a population."),
            makeQuestion("What is a sustainable city?", ["A city designed to reduce environmental impact and support quality of life", "A city with no transport", "A city that uses only imported resources"], 0, "Sustainability", "Sustainable cities aim to balance environmental, social and economic needs.")
        ],

        level5: [
            makeQuestion("What is the difference between weather and climate?", ["Weather is short-term; climate is the long-term pattern", "They mean exactly the same thing", "Climate changes every hour"], 0, "Climate", "Weather describes short-term atmospheric conditions, while climate describes long-term patterns."),
            makeQuestion("What is the name for the movement of people from rural areas to cities?", ["Urban-rural migration", "Rural-urban migration", "International trade"], 1, "Migration", "Rural-urban migration is movement from countryside areas to towns and cities."),
            makeQuestion("What is a drainage basin?", ["An area of land drained by a river and its tributaries", "A type of desert", "A coastal sand dune"], 0, "Rivers", "A drainage basin is the area that collects water for a river system."),
            makeQuestion("What is the greenhouse effect?", ["The warming caused when gases in the atmosphere absorb and re-emit infrared radiation", "The cooling of oceans by wind", "The reflection of all sunlight by clouds"], 0, "Climate Change", "Greenhouse gases absorb and re-emit infrared radiation, warming Earth's surface and lower atmosphere."),
            makeQuestion("What is globalisation?", ["The increasing connection between countries through trade, communication and movement", "The separation of all countries", "The movement of tectonic plates"], 0, "Globalisation", "Globalisation increases connections and interdependence between countries.")
        ]
    }
};


/* =========================================
   6. BUILD THE QUIZ DATABASE
========================================= */

const questions = {};

const subjects = Object.keys(levelQuestions);

for (const subject of subjects) {

    questions[subject] = {};

    for (let year = 1; year <= 11; year++) {

        const yearKey = `year${year}`;

        questions[subject][yearKey] = {};

        for (let level = 1; level <= 5; level++) {

            const levelKey = `level${level}`;

            const bank = levelQuestions[subject][levelKey];

            questions[subject][yearKey][levelKey] =
                bank.map(question => ({
                    ...question,
                    year: year,
                    level: level
                }));

        }
    }
}


/* =========================================
   7. ADD YOUR OWN QUESTIONS
========================================= */

function addQuestion(
    subject,
    year,
    level,
    question,
    options,
    answer,
    explanation,
    topic
) {

    const yearKey = `year${year}`;
    const levelKey = `level${level}`;

    if (!questions[subject]) {
        console.error("Subject does not exist:", subject);
        return false;
    }

    if (!questions[subject][yearKey]?.[levelKey]) {
        console.error("Year or level does not exist.");
        return false;
    }

    if (
        typeof question !== "string" ||
        question.trim() === ""
    ) {
        console.error("Question cannot be empty.");
        return false;
    }

    if (
        !Array.isArray(options) ||
        options.length < 2 ||
        !options.every(option => typeof option === "string")
    ) {
        console.error("Provide at least two answer options.");
        return false;
    }

    if (
        !Number.isInteger(answer) ||
        answer < 0 ||
        answer >= options.length
    ) {
        console.error("Answer index is invalid.");
        return false;
    }

    questions[subject][yearKey][levelKey].push({

        q: question,
        options: options,
        answer: answer,
        explanation: explanation || "",
        topic: topic || "General Knowledge",
        year: year,
        level: level

    });

    return true;
}


/* =========================================
   8. DATABASE INFORMATION
========================================= */

console.log("=================================");
console.log("SCHOOL QUIZ LEARNING HUB");
console.log("Question database loaded!");
console.log("=================================");

console.log("Subjects:", Object.keys(questions));
console.log("Years: 1–11");
console.log("Levels: 1–5");

console.log(
    "Maths Year 8 Level 3 questions:",
    questions.math.year8.level3.length
);

console.log(
    "Science Year 8 Level 3 questions:",
    questions.science.year8.level3.length
);

console.log("=================================");
