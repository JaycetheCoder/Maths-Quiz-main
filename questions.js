
/* =========================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE YEAR-SPECIFIC DATABASE
   ========================================= */

const questions = {};

/* Question helper */
function Q(q, options, answer, topic, explanation) {
    return { q, options, answer, topic, explanation };
}

/* =========================================
   MATHS: YEAR-SPECIFIC BANKS
========================================= */

const maths = {
    1: [
        Q("What is 2 + 3?", ["4", "5", "6"], 1, "Addition", "2 + 3 = 5."),
        Q("What is 7 - 2?", ["4", "5", "6"], 1, "Subtraction", "7 - 2 = 5."),
        Q("What number comes after 19?", ["18", "20", "21"], 1, "Counting", "20 comes after 19."),
        Q("How many sides does a square have?", ["3", "4", "5"], 1, "Shapes", "A square has four sides."),
        Q("What is double 4?", ["6", "8", "10"], 1, "Doubling", "4 doubled is 8.")
    ],
    2: [
        Q("What is 15 + 12?", ["25", "27", "29"], 1, "Addition", "15 + 12 = 27."),
        Q("What is 30 - 14?", ["14", "16", "18"], 1, "Subtraction", "30 - 14 = 16."),
        Q("What is 5 × 2?", ["7", "10", "12"], 1, "Multiplication", "Five groups of two make ten."),
        Q("What is half of 18?", ["8", "9", "10"], 1, "Fractions", "18 ÷ 2 = 9."),
        Q("How many centimetres are in a metre?", ["10", "100", "1000"], 1, "Measurement", "One metre is 100 centimetres.")
    ],
    3: [
        Q("What is 8 × 7?", ["54", "56", "64"], 1, "Multiplication", "8 × 7 = 56."),
        Q("What is 100 - 38?", ["62", "68", "72"], 0, "Subtraction", "100 - 38 = 62."),
        Q("What is 1/4 of 20?", ["4", "5", "10"], 1, "Fractions", "20 ÷ 4 = 5."),
        Q("What is the perimeter of a square with sides of 5 cm?", ["10 cm", "20 cm", "25 cm"], 1, "Perimeter", "Four sides of 5 cm make 20 cm."),
        Q("What is 3.5 + 2.4?", ["5.9", "6.1", "5.7"], 0, "Decimals", "3.5 + 2.4 = 5.9.")
    ],
    4: [
        Q("What is 3/5 of 40?", ["20", "24", "30"], 1, "Fractions", "40 ÷ 5 × 3 = 24."),
        Q("What is 25% of 80?", ["15", "20", "25"], 1, "Percentages", "25% is one quarter of 80."),
        Q("Solve: 4 × x = 36.", ["8", "9", "10"], 1, "Algebra", "36 ÷ 4 = 9."),
        Q("What is the area of a rectangle 9 cm by 6 cm?", ["30 cm²", "54 cm²", "60 cm²"], 1, "Area", "9 × 6 = 54 cm²."),
        Q("What is the mean of 4, 6 and 8?", ["5", "6", "7"], 1, "Statistics", "18 ÷ 3 = 6.")
    ],
    5: [
        Q("What is 40% of 150?", ["50", "60", "70"], 1, "Percentages", "0.4 × 150 = 60."),
        Q("What is 3/4 + 1/4?", ["1/2", "1", "2"], 1, "Fractions", "3/4 + 1/4 = 4/4 = 1."),
        Q("What is the volume of a cuboid measuring 3 × 4 × 5 cm?", ["12 cm³", "60 cm³", "20 cm³"], 1, "Volume", "3 × 4 × 5 = 60 cm³."),
        Q("What is 2.5 × 4?", ["8", "10", "12"], 1, "Decimals", "2.5 × 4 = 10."),
        Q("What is the next number: 3, 6, 9, 12, ...?", ["14", "15", "16"], 1, "Sequences", "The sequence increases by 3.")
    ],
    6: [
        Q("Calculate -5 + 12.", ["5", "7", "17"], 1, "Negative Numbers", "-5 + 12 = 7."),
        Q("Simplify 3a + 5a.", ["8a", "15a", "8a²"], 0, "Algebra", "Collect like terms: 3a + 5a = 8a."),
        Q("What is 20% of 250?", ["40", "50", "60"], 1, "Percentages", "0.2 × 250 = 50."),
        Q("What is the area of a triangle with base 8 cm and height 5 cm?", ["20 cm²", "40 cm²", "13 cm²"], 0, "Area", "Area = ½ × base × height."),
        Q("Convert 0.75 into a fraction.", ["1/2", "3/4", "1/4"], 1, "Fractions", "0.75 = 75/100 = 3/4.")
    ],
    7: [
        Q("Solve x + 9 = 17.", ["6", "8", "9"], 1, "Algebra", "17 - 9 = 8."),
        Q("What is 15% of 240?", ["24", "36", "48"], 1, "Percentages", "0.15 × 240 = 36."),
        Q("Expand 4(x + 3).", ["4x + 3", "4x + 12", "x + 12"], 1, "Algebra", "Multiply both terms by 4."),
        Q("What is the probability of rolling an even number on a fair die?", ["1/3", "1/2", "2/3"], 1, "Probability", "Three of the six outcomes are even."),
        Q("Find the circumference of a circle with diameter 10 cm. Use π = 3.14.", ["15.7 cm", "31.4 cm", "62.8 cm"], 1, "Circles", "Circumference = π × diameter.")
    ],
    8: [
        Q("Solve 3x + 4 = 19.", ["4", "5", "6"], 1, "Algebra", "Subtract 4 and divide by 3."),
        Q("What is the square root of 225?", ["12", "15", "25"], 1, "Indices", "15 × 15 = 225."),
        Q("A £60 item increases by 10%. What is the new price?", ["£64", "£66", "£70"], 1, "Percentages", "10% of £60 is £6."),
        Q("What is the gradient of y = 3x + 5?", ["3", "5", "8"], 0, "Graphs", "The coefficient of x is the gradient."),
        Q("Factorise 6x + 12.", ["6(x + 2)", "3(x + 12)", "6(x + 12)"], 0, "Algebra", "The highest common factor is 6.")
    ],
    9: [
        Q("Solve 2x + 7 = 25.", ["8", "9", "10"], 1, "Algebra", "Subtract 7, then divide by 2."),
        Q("Factorise x² + 7x + 12.", ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)"], 0, "Quadratics", "3 and 4 multiply to 12 and add to 7."),
        Q("What is the gradient between (0, 2) and (3, 8)?", ["2", "3", "6"], 0, "Graphs", "Gradient = (8 - 2) ÷ (3 - 0) = 2."),
        Q("What is the probability of getting two heads when tossing two fair coins?", ["1/2", "1/4", "3/4"], 1, "Probability", "Only one of four equally likely outcomes is HH."),
        Q("What is the nth term of 4, 7, 10, 13, ...?", ["3n + 1", "4n + 1", "3n + 4"], 0, "Sequences", "The sequence increases by 3 and starts at 4.")
    ],
    10: [
        Q("Solve x² - 9 = 0.", ["x = 3 only", "x = ±3", "x = 9"], 1, "Quadratics", "Both 3² and (-3)² equal 9."),
        Q("What is sin(30°)?", ["0.5", "0.75", "1"], 0, "Trigonometry", "sin(30°) = 0.5."),
        Q("What is the gradient of a line perpendicular to a line with gradient 2?", ["-2", "-1/2", "1/2"], 1, "Graphs", "Perpendicular gradients multiply to -1."),
        Q("Expand (x + 3)(x + 2).", ["x² + 5x + 6", "x² + 6x + 5", "x² + x + 6"], 0, "Algebra", "Multiply each term and collect like terms."),
        Q("A value increases from 80 to 100. What is the percentage increase?", ["20%", "25%", "30%"], 1, "Percentages", "20 ÷ 80 × 100 = 25%.")
    ],
    11: [
        Q("Solve x² - 5x + 6 = 0.", ["x = 2 or 3", "x = -2 or -3", "x = 1 or 6"], 0, "Quadratics", "Factorise to (x - 2)(x - 3) = 0."),
        Q("What is the exact value of cos(60°)?", ["1/2", "√3/2", "1"], 0, "Trigonometry", "cos(60°) = 1/2."),
        Q("Find the nth term of 5, 9, 13, 17, ...", ["4n + 1", "5n + 4", "4n - 1"], 0, "Sequences", "The common difference is 4 and the first term is 5."),
        Q("A circle has radius 7 cm. What is its area in terms of π?", ["14π cm²", "49π cm²", "98π cm²"], 1, "Circles", "Area = πr² = 49π."),
        Q("Rearrange v = u + at to make a the subject.", ["(v - u)/t", "(v + u)/t", "v - ut"], 0, "Rearranging Formulae", "Subtract u, then divide by t.")
    ]
};

/* =========================================
   SCIENCE: YEAR-SPECIFIC BANKS
========================================= */

const science = {
    1: [
        Q("Which part of a plant takes in water?", ["Roots", "Flowers", "Leaves"], 0, "Plants", "Roots absorb water."),
        Q("Which animal is a mammal?", ["Cat", "Frog", "Fish"], 0, "Animals", "Cats are mammals."),
        Q("What do humans use to see?", ["Eyes", "Ears", "Hands"], 0, "Senses", "Eyes detect light."),
        Q("What is the Sun?", ["A star", "A planet", "A moon"], 0, "Space", "The Sun is a star."),
        Q("Which material is transparent?", ["Clear glass", "Wood", "Brick"], 0, "Materials", "Clear glass lets light pass through.")
    ],
    2: [
        Q("What do plants need to grow?", ["Light and water", "Plastic", "Metal"], 0, "Plants", "Plants need light and water."),
        Q("Which organ pumps blood?", ["Heart", "Lungs", "Stomach"], 0, "Human Body", "The heart pumps blood."),
        Q("At what temperature does water freeze?", ["0°C", "50°C", "100°C"], 0, "Materials", "Water freezes at about 0°C."),
        Q("Which force pulls objects towards Earth?", ["Gravity", "Sound", "Light"], 0, "Forces", "Gravity attracts objects."),
        Q("Which planet is closest to the Sun?", ["Mercury", "Earth", "Mars"], 0, "Space", "Mercury is closest to the Sun.")
    ],
    3: [
        Q("Which gas do plants absorb during photosynthesis?", ["Carbon dioxide", "Oxygen", "Hydrogen"], 0, "Plants", "Plants use carbon dioxide in photosynthesis."),
        Q("What is the function of red blood cells?", ["Carry oxygen", "Digest food", "Produce bile"], 0, "Human Body", "Red blood cells transport oxygen."),
        Q("What is the smallest unit of an element?", ["Atom", "Cell", "Organ"], 0, "Chemistry", "Atoms make up elements."),
        Q("What is the unit of force?", ["Newton", "Watt", "Volt"], 0, "Forces", "Force is measured in newtons."),
        Q("What is a habitat?", ["An organism's living place", "A type of food", "A chemical"], 0, "Ecosystems", "A habitat is the place where an organism lives.")
    ],
    4: [
        Q("Which organelle is the main site of aerobic respiration?", ["Mitochondrion", "Nucleus", "Cell wall"], 0, "Cells", "Mitochondria are the main site of aerobic respiration."),
        Q("What is the formula for density?", ["Mass ÷ volume", "Volume ÷ mass", "Mass × volume"], 0, "Physics", "Density = mass divided by volume."),
        Q("Which particle has a negative charge?", ["Electron", "Proton", "Neutron"], 0, "Atoms", "Electrons are negatively charged."),
        Q("What happens to particles when heated?", ["They usually move faster", "They disappear", "They stop moving"], 0, "Particle Model", "Heating increases their kinetic energy."),
        Q("What is an enzyme?", ["A biological catalyst", "A blood cell", "A mineral"], 0, "Biology", "Enzymes speed up biological reactions.")
    ],
    5: [
        Q("Which gas is needed for aerobic respiration?", ["Oxygen", "Nitrogen", "Helium"], 0, "Respiration", "Aerobic respiration uses oxygen."),
        Q("What is the unit of electrical resistance?", ["Ohm", "Volt", "Ampere"], 0, "Electricity", "Resistance is measured in ohms."),
        Q("What type of bonding involves shared electron pairs?", ["Covalent", "Ionic", "Metallic"], 0, "Bonding", "Covalent bonds share electrons."),
        Q("What is momentum equal to?", ["Mass × velocity", "Force ÷ area", "Mass ÷ volume"], 0, "Forces", "Momentum = mass × velocity."),
        Q("What is the role of a catalyst?", ["To speed up a reaction", "To stop all reactions", "To create atoms"], 0, "Reactions", "Catalysts increase reaction rate without being used up.")
    ],
    6: [
        Q("What is the basic unit of life?", ["Cell", "Organ", "Tissue"], 0, "Cells", "Cells are the basic units of living organisms."),
        Q("What is the chemical symbol for sodium?", ["Na", "S", "So"], 0, "Elements", "Sodium's symbol is Na."),
        Q("What is the name of the force that opposes motion between surfaces?", ["Friction", "Gravity", "Magnetism"], 0, "Forces", "Friction opposes movement between surfaces."),
        Q("What is a food chain?", ["A sequence showing feeding relationships", "A type of rock", "A weather pattern"], 0, "Ecosystems", "Food chains show how energy passes between organisms."),
        Q("Which gas makes up most of Earth's atmosphere?", ["Nitrogen", "Oxygen", "Carbon dioxide"], 0, "Atmosphere", "About 78% of the atmosphere is nitrogen.")
    ],
    7: [
        Q("What is the function of the nucleus?", ["Controls cell activities", "Absorbs sunlight", "Stores bile"], 0, "Cells", "The nucleus contains genetic material and controls cell activities."),
        Q("What is the formula for speed?", ["Distance ÷ time", "Time ÷ distance", "Mass × acceleration"], 0, "Motion", "Speed = distance divided by time."),
        Q("What is an element?", ["A substance made of one type of atom", "A mixture of substances", "A type of cell"], 0, "Chemistry", "An element contains only one type of atom."),
        Q("What is diffusion?", ["The net movement of particles from high to low concentration", "The movement of planets", "The splitting of an atom"], 0, "Particles", "Diffusion occurs down a concentration gradient."),
        Q("What is the role of chlorophyll?", ["Absorbs light energy", "Carries oxygen", "Breaks down proteins"], 0, "Photosynthesis", "Chlorophyll absorbs light for photosynthesis.")
    ],
    8: [
        Q("What is the word equation for photosynthesis?", ["Carbon dioxide + water → glucose + oxygen", "Oxygen + glucose → water", "Glucose → carbon dioxide only"], 0, "Photosynthesis", "Plants use carbon dioxide and water to make glucose and oxygen."),
        Q("What is an isotope?", ["Atoms of the same element with different neutron numbers", "Atoms with different proton numbers", "A mixture of elements"], 0, "Atomic Structure", "Isotopes have the same proton number but different neutron numbers."),
        Q("What is the unit of power?", ["Watt", "Newton", "Ohm"], 0, "Energy", "Power is measured in watts."),
        Q("What is a pathogen?", ["A microorganism that causes disease", "A type of vitamin", "A blood vessel"], 0, "Health", "Pathogens cause infectious diseases."),
        Q("What is the pH of a strong acid generally like?", ["Low", "Exactly 7", "Very high"], 0, "Acids", "Acids have pH values below 7.")
    ],
    9: [
        Q("What is the charge of a proton?", ["Positive", "Negative", "Neutral"], 0, "Atomic Structure", "Protons have a positive charge."),
        Q("What is the equation linking force, mass and acceleration?", ["F = ma", "F = m/a", "F = a/m"], 0, "Forces", "Newton's second law states F = ma."),
        Q("What is electrolysis?", ["Using electricity to break down an ionic substance", "Heating water to boiling", "Mixing two gases"], 0, "Chemistry", "Electrolysis decomposes substances using electricity."),
        Q("What is natural selection?", ["Better-adapted organisms are more likely to reproduce", "All organisms become identical", "Organisms choose their genes"], 0, "Evolution", "Natural selection changes populations over generations."),
        Q("What is the function of the alveoli?", ["Gas exchange", "Pumping blood", "Digesting food"], 0, "Respiration", "Alveoli provide a large surface area for gas exchange.")
    ],
    10: [
        Q("What is the balanced equation for magnesium reacting with oxygen?", ["2Mg + O₂ → 2MgO", "Mg + O₂ → MgO", "Mg + 2O₂ → MgO"], 0, "Equations", "There are two magnesium atoms and two oxygen atoms on each side."),
        Q("What is the equation for electrical power?", ["P = IV", "P = I/V", "P = V/I"], 0, "Electricity", "Power equals current multiplied by potential difference."),
        Q("What is the function of DNA?", ["Carries genetic information", "Transports oxygen", "Digests food"], 0, "Inheritance", "DNA carries genetic instructions."),
        Q("What is the half-life of a radioactive isotope?", ["Time for half the unstable nuclei to decay", "Time for all atoms to disappear", "Time for a substance to melt"], 0, "Radioactivity", "Half-life is the time taken for half the radioactive nuclei to decay."),
        Q("What is the role of insulin?", ["Regulates blood glucose", "Carries oxygen", "Breaks down bones"], 0, "Homeostasis", "Insulin helps lower blood glucose concentration.")
    ],
    11: [
        Q("What is the function of meiosis?", ["To produce genetically different sex cells", "To produce identical body cells", "To digest proteins"], 0, "Cell Division", "Meiosis produces haploid gametes."),
        Q("What is the relationship between voltage, current and resistance?", ["V = IR", "V = I/R", "V = R/I"], 0, "Electricity", "Ohm's law is V = IR."),
        Q("What is an exothermic reaction?", ["A reaction that transfers energy to the surroundings", "A reaction that always absorbs energy", "A reaction with no energy change"], 0, "Energy Changes", "Exothermic reactions release energy to the surroundings."),
        Q("What is the role of a control variable in an experiment?", ["To keep it constant", "To change it every time", "To measure the final result"], 0, "Practical Skills", "Control variables are kept the same for a fair test."),
        Q("What is the purpose of a condenser in distillation?", ["To cool vapour into liquid", "To heat the mixture", "To measure mass"], 0, "Separating Mixtures", "A condenser cools vapour so it condenses.")
    ]
};

/* =========================================
   ENGLISH: YEAR-SPECIFIC BANKS
========================================= */

const english = {
    1: [
        Q("Which word is a noun?", ["Dog", "Run", "Quickly"], 0, "Nouns", "Dog names an animal."),
        Q("Which word is a verb?", ["Jump", "Blue", "Table"], 0, "Verbs", "Jump is an action."),
        Q("Which mark ends a question?", [".", "?", "!"], 1, "Punctuation", "Questions end with a question mark."),
        Q("Choose the correct spelling.", ["Frend", "Friend", "Freind"], 1, "Spelling", "Friend is the correct spelling."),
        Q("Which word describes a noun?", ["Adjective", "Verb", "Noun"], 0, "Adjectives", "Adjectives describe nouns.")
    ],
    2: [
        Q("What is the plural of child?", ["Childs", "Children", "Childes"], 1, "Grammar", "Children is the irregular plural."),
        Q("Which word is an adjective?", ["Happy", "Slowly", "Swim"], 0, "Adjectives", "Happy describes something."),
        Q("Which word is a conjunction?", ["Because", "Table", "Green"], 0, "Conjunctions", "Because joins clauses."),
        Q("What is a synonym for enormous?", ["Tiny", "Huge", "Weak"], 1, "Vocabulary", "Huge means very large."),
        Q("Which is a correctly punctuated sentence?", ["I like reading.", "i like reading", "I like reading"], 0, "Punctuation", "Sentences begin with capitals and end with punctuation.")
    ],
    3: [
        Q("What is a metaphor?", ["A direct comparison", "A question", "A rhyme"], 0, "Language", "A metaphor describes one thing as another."),
        Q("What is alliteration?", ["Repeated initial consonant sounds", "A long sentence", "A type of paragraph"], 0, "Language", "Alliteration repeats consonant sounds."),
        Q("Which sentence is in the past tense?", ["She walks.", "She walked.", "She will walk."], 1, "Tenses", "Walked is past tense."),
        Q("What is the purpose of persuasive writing?", ["To convince the reader", "To list random words", "To tell jokes"], 0, "Writing", "Persuasive writing aims to influence readers."),
        Q("What is a simile?", ["A comparison using like or as", "A question", "A type of noun"], 0, "Language", "Similes compare using like or as.")
    ],
    4: [
        Q("What is personification?", ["Giving human qualities to non-human things", "Using a question", "Repeating a rhyme"], 0, "Language", "Personification gives human characteristics to objects or ideas."),
        Q("What is a complex sentence?", ["A main clause and a subordinate clause", "One word", "A sentence without a verb"], 0, "Grammar", "Complex sentences contain a main and subordinate clause."),
        Q("What is a rhetorical question?", ["A question asked to make a point", "A question that must always be answered", "A spelling mistake"], 0, "Persuasion", "It encourages the reader to think."),
        Q("What is a semantic field?", ["Words connected by a topic", "A type of poem", "A punctuation mark"], 0, "Language", "A semantic field groups related words."),
        Q("What is a synonym for reluctant?", ["Unwilling", "Excited", "Certain"], 0, "Vocabulary", "Reluctant means unwilling.")
    ],
    5: [
        Q("What is a relative clause?", ["A clause that gives more information about a noun", "A type of punctuation", "A paragraph ending"], 0, "Grammar", "Relative clauses add information about a noun."),
        Q("What is a persuasive technique?", ["Using evidence to support an argument", "Changing every noun", "Removing punctuation"], 0, "Writing", "Evidence can strengthen a persuasive argument."),
        Q("What is a narrator?", ["The voice telling a story", "The book cover", "The setting only"], 0, "Narrative", "The narrator tells the story."),
        Q("What is an oxymoron?", ["Two contradictory words together", "A long description", "A type of rhyme"], 0, "Language", "An oxymoron combines contrasting terms."),
        Q("What is inference?", ["Working out meaning using clues", "Copying a sentence", "Counting paragraphs"], 0, "Reading", "Inference uses evidence and reasoning.")
    ],
    6: [
        Q("What is a protagonist?", ["The main character", "The setting", "The narrator's enemy only"], 0, "Literature", "The protagonist is the central character."),
        Q("What is a theme?", ["A central idea in a text", "A punctuation mark", "A chapter number"], 0, "Literature", "Themes are important ideas explored in a text."),
        Q("What is a synonym for hostile?", ["Unfriendly", "Helpful", "Calm"], 0, "Vocabulary", "Hostile means unfriendly or aggressive."),
        Q("What is direct speech?", ["The exact words spoken by a character", "A summary", "A narrator's opinion"], 0, "Writing", "Direct speech records exact spoken words."),
        Q("What is a paragraph used for?", ["Grouping related ideas", "Changing the font", "Replacing all punctuation"], 0, "Structure", "Paragraphs organise related ideas.")
    ],
    7: [
        Q("What is dramatic irony?", ["The audience knows something a character does not", "A character tells a joke", "A story has no conflict"], 0, "Drama", "The audience has information a character lacks."),
        Q("What is a semantic field of conflict likely to include?", ["Battle, attack, weapon", "Flower, petal, garden", "Ocean, wave, beach"], 0, "Language", "These words are connected to conflict."),
        Q("What is an unreliable narrator?", ["A narrator whose account may not be trusted", "A narrator who never speaks", "A narrator who is always correct"], 0, "Narrative", "An unreliable narrator may distort events."),
        Q("What is a juxtaposition?", ["Placing contrasting ideas together", "Repeating a word", "Using only dialogue"], 0, "Language", "Juxtaposition highlights contrast."),
        Q("What does connotation mean?", ["An associated or implied meaning", "A spelling rule", "A sentence ending"], 0, "Language", "Connotations are ideas associated with words.")
    ],
    8: [
        Q("What is pathetic fallacy?", ["Using weather to reflect mood or atmosphere", "Giving a character a nickname", "Repeating a consonant"], 0, "Language", "Weather can reflect emotions or atmosphere."),
        Q("What is a cyclical structure?", ["An ending that links back to the beginning", "A story with no ending", "A list of characters"], 0, "Structure", "The ending echoes the opening."),
        Q("What is anaphora?", ["Repetition at the start of successive clauses", "A type of rhyme", "A comparison using as"], 0, "Language", "Anaphora repeats words at the beginning of clauses."),
        Q("What is a motif?", ["A recurring image, idea or symbol", "A one-time punctuation mark", "A chapter title"], 0, "Literature", "Motifs recur throughout a text."),
        Q("What does ambiguous mean?", ["Having more than one possible meaning", "Completely obvious", "Very short"], 0, "Vocabulary", "Ambiguous language can be interpreted in different ways.")
    ],
    9: [
        Q("What is a structural shift?", ["A change in focus, time or perspective", "A spelling correction", "A change in font"], 0, "Structure", "Structural shifts change how a text develops."),
        Q("What is a dual narrative?", ["A story told through two narrative perspectives", "A story with no narrator", "A poem with two lines"], 0, "Narrative", "Two perspectives tell parts of the story."),
        Q("What is an allegory?", ["A story with a deeper symbolic meaning", "A list of facts", "A type of punctuation"], 0, "Literature", "An allegory uses a story to represent wider ideas."),
        Q("What is subtext?", ["An implied meaning beneath the surface", "The title of a text", "A list of characters"], 0, "Language", "Subtext is meaning that is suggested rather than stated."),
        Q("What is a critical interpretation?", ["An argued explanation supported by evidence", "A plot summary only", "A list of quotations"], 0, "Analysis", "Critical interpretations use evidence to support ideas.")
    ],
    10: [
        Q("What is the effect of a semantic field in a literary text?", ["It develops a connected idea or atmosphere", "It always creates a rhyme", "It removes the narrator"], 0, "Analysis", "Related words can build a particular atmosphere or idea."),
        Q("What is an extended metaphor?", ["A metaphor developed over several lines or throughout a text", "A single adjective", "A type of punctuation"], 0, "Language", "An extended metaphor continues a comparison."),
        Q("What is an ambiguous ending?", ["An ending open to more than one interpretation", "An ending with no final paragraph", "An ending that explains everything"], 0, "Structure", "Ambiguity allows different readings."),
        Q("What is an authorial intention?", ["What the writer may aim to communicate", "The number of pages", "The reader's age"], 0, "Analysis", "It concerns the writer's possible purpose."),
        Q("What is a critical viewpoint?", ["A reasoned interpretation of a text", "A list of characters", "A spelling correction"], 0, "Analysis", "A critical viewpoint makes an argument about a text.")
    ],
    11: [
        Q("What is a conceptual interpretation?", ["An argument exploring a text's wider ideas", "A plot summary only", "A list of quotations"], 0, "GCSE Analysis", "It explores ideas and meanings beyond the surface."),
        Q("What is a writer's use of form?", ["How the type or format of a text shapes meaning", "The spelling of a title", "The number of characters"], 0, "Form", "Form includes choices such as poem, play or novel."),
        Q("What is an alternative interpretation?", ["A different reasonable reading supported by evidence", "A reading without evidence", "A summary of the same sentence"], 0, "Analysis", "Texts can support more than one interpretation."),
        Q("What is a structural contrast?", ["A difference between sections or moments in a text", "A repeated spelling error", "A type of rhyme only"], 0, "Structure", "Structural contrasts highlight changes or differences."),
        Q("Why should a quotation be analysed?", ["To explain how the writer creates meaning", "To increase word count only", "To avoid discussing the text"], 0, "Essay Skills", "Analysis explains the effect of the writer's choices.")
    ]
};

/* =========================================
   HISTORY: YEAR-SPECIFIC BANKS
========================================= */

const history = {
    1: [
        Q("What is history?", ["The study of the past", "The study of planets", "The study of plants"], 0, "History", "History studies past events."),
        Q("Who built the pyramids at Giza?", ["Ancient Egyptians", "Romans", "Vikings"], 0, "Ancient Egypt", "The ancient Egyptians built the pyramids."),
        Q("What is a timeline?", ["Events in time order", "A type of painting", "A map"], 0, "Chronology", "Timelines show chronological order."),
        Q("Which people used longships?", ["Vikings", "Aztecs", "Ancient Greeks"], 0, "Vikings", "Vikings travelled using longships."),
        Q("What is an archaeologist?", ["Someone who studies past remains", "A doctor", "A pilot"], 0, "Historical Skills", "Archaeologists investigate material remains.")
    ],
    2: [
        Q("What is a historical source?", ["Evidence about the past", "A modern toy only", "A weather forecast"], 0, "Sources", "Sources provide evidence about the past."),
        Q("Which civilisation built the pyramids?", ["Ancient Egyptians", "Vikings", "Anglo-Saxons"], 0, "Ancient Egypt", "The pyramids were built in ancient Egypt."),
        Q("What is a monarch?", ["A king or queen", "A soldier", "A farmer"], 0, "Monarchy", "A monarch is a king or queen."),
        Q("What does ancient mean?", ["Very old", "Brand new", "Tomorrow"], 0, "Chronology", "Ancient refers to the distant past."),
        Q("What is a museum used for?", ["Preserving and displaying objects", "Growing crops", "Building roads"], 0, "Historical Evidence", "Museums preserve and display objects.")
    ],
    3: [
        Q("In which year was the Battle of Hastings?", ["1066", "1215", "1485"], 0, "Norman Conquest", "The battle took place in 1066."),
        Q("Who was William the Conqueror?", ["The Norman duke who became King of England", "A Roman emperor", "A Tudor queen"], 0, "Normans", "William defeated Harold at Hastings."),
        Q("What was a medieval castle used for?", ["Defence and control", "Printing books", "Growing rice"], 0, "Medieval England", "Castles helped defend territory."),
        Q("What was the Domesday Book?", ["A survey of land and resources", "A book of poems", "A Roman law"], 0, "Normans", "It recorded landholding and resources."),
        Q("What was the Black Death?", ["A major plague", "A civil war", "A volcanic eruption"], 0, "Medieval England", "The plague spread through Europe in the 14th century.")
    ],
    4: [
        Q("Who was the first Tudor king?", ["Henry VII", "Henry VIII", "Edward VI"], 0, "Tudors", "Henry VII became king in 1485."),
        Q("What happened in 1215?", ["Magna Carta was agreed", "The Battle of Hastings", "The Great Fire of London"], 0, "Medieval England", "Magna Carta was agreed in 1215."),
        Q("Who was Henry VIII?", ["A Tudor king", "A Roman emperor", "A Viking leader"], 0, "Tudors", "Henry VIII ruled England from 1509 to 1547."),
        Q("What was the English Reformation?", ["A major religious change in England", "An industrial invention", "A Roman invasion"], 0, "Religion", "It changed the relationship between England and the Catholic Church."),
        Q("What was the Spanish Armada?", ["A Spanish fleet that attempted to invade England", "A Tudor parliament", "A medieval plague"], 0, "Elizabethan England", "The Armada was defeated in 1588.")
    ],
    5: [
        Q("What was the Industrial Revolution?", ["A period of major industrial change", "A Roman invasion", "A medieval plague"], 0, "Industrial Revolution", "It transformed manufacturing and transport."),
        Q("Who was monarch during much of the Victorian era?", ["Queen Victoria", "Elizabeth I", "Mary I"], 0, "Victorian Britain", "Victoria reigned from 1837 to 1901."),
        Q("What did the Spinning Jenny help produce?", ["Thread", "Cars", "Electricity"], 0, "Industrial Revolution", "It allowed several threads to be spun at once."),
        Q("What was the transatlantic slave trade?", ["The forced transportation and enslavement of Africans", "A peaceful migration", "A farming system"], 0, "Slavery", "Millions of Africans were forcibly transported and enslaved."),
        Q("What was one result of industrialisation?", ["Growth of factory towns", "The end of all trade", "The disappearance of cities"], 0, "Industrial Revolution", "Factory work contributed to urban growth.")
    ],
    6: [
        Q("What event helped trigger the First World War?", ["Assassination of Archduke Franz Ferdinand", "Fall of the Berlin Wall", "Great Fire of London"], 0, "First World War", "The assassination helped trigger the July Crisis."),
        Q("When was the First World War?", ["1914–1918", "1939–1945", "1900–1905"], 0, "First World War", "The war lasted from 1914 to 1918."),
        Q("What was trench warfare?", ["Fighting from long defensive trenches", "Fighting only at sea", "A peaceful agreement"], 0, "First World War", "Trenches were used extensively on the Western Front."),
        Q("What was the suffragette movement?", ["A campaign for women's voting rights", "A campaign for more factories", "A military alliance"], 0, "Women's Rights", "Suffragettes campaigned for votes for women."),
        Q("What was the Treaty of Versailles?", ["A peace treaty after the First World War", "A Roman law", "A medieval agreement"], 0, "First World War", "It was signed in 1919.")
    ],
    7: [
        Q("What was the Holocaust?", ["The genocide of Europe's Jews by Nazi Germany and its collaborators", "A medieval battle", "A peace treaty"], 0, "Second World War", "Six million Jews were murdered during the Holocaust."),
        Q("When did the Second World War begin?", ["1939", "1914", "1945"], 0, "Second World War", "It began in September 1939."),
        Q("What was appeasement?", ["Making concessions to avoid conflict", "Declaring war immediately", "Ending all trade"], 0, "Second World War", "Appeasement involved concessions to Nazi Germany."),
        Q("What was the Battle of Britain?", ["An air campaign in 1940", "A medieval battle", "A naval battle in 1914"], 0, "Second World War", "The RAF defended Britain against German air attacks."),
        Q("What was D-Day?", ["The Allied landings in Normandy in 1944", "The start of the First World War", "The fall of Rome"], 0, "Second World War", "The Normandy landings began on 6 June 1944.")
    ],
    8: [
        Q("Which two superpowers were central to the Cold War?", ["USA and USSR", "Britain and France", "Germany and Italy"], 0, "Cold War", "The United States and Soviet Union were central rivals."),
        Q("What was the Berlin Wall?", ["A barrier dividing East and West Berlin", "A Roman fort", "A medieval castle"], 0, "Cold War", "It divided Berlin from 1961 to 1989."),
        Q("What was the Cuban Missile Crisis?", ["A 1962 confrontation involving nuclear missiles", "A medieval rebellion", "A trade agreement"], 0, "Cold War", "The crisis brought the USA and USSR close to nuclear conflict."),
        Q("What was the purpose of NATO?", ["A collective defence alliance", "A trade union", "A medieval parliament"], 0, "Cold War", "NATO was established as a collective defence alliance."),
        Q("What happened in Russia in 1917?", ["The Bolsheviks came to power", "The Berlin Wall fell", "The Roman Empire began"], 0, "Russian Revolution", "The Bolsheviks took power during the revolution.")
    ],
    9: [
        Q("Why was the Treaty of Versailles controversial?", ["Its terms placed heavy penalties on Germany", "It ended the Roman Empire", "It created the United Nations"], 0, "First World War", "Many Germans considered the treaty harsh."),
        Q("What was the significance of the Berlin Wall falling in 1989?", ["It symbolised the weakening division of Europe", "It started the First World War", "It created NATO"], 0, "Cold War", "Its fall symbolised major changes in Eastern Europe."),
        Q("What is historical interpretation?", ["An explanation of the past based on evidence", "A list of dates only", "A modern news report"], 0, "Historical Skills", "Historians interpret evidence to explain events."),
        Q("Why might historians disagree?", ["They interpret evidence differently", "The past changes", "All sources are identical"], 0, "Historical Skills", "Different evidence and perspectives can lead to different conclusions."),
        Q("What was one aim of the civil rights movement in the USA?", ["Ending racial segregation and discrimination", "Restoring monarchy", "Expanding the Roman Empire"], 0, "Civil Rights", "The movement fought for equal rights.")
    ],
    10: [
        Q("What was the significance of the Russian Revolution?", ["It led to Bolshevik rule and a communist state", "It ended the Cold War", "It created the Roman Empire"], 0, "Russian Revolution", "The Bolsheviks took power and eventually established a communist state."),
        Q("What was the policy of containment?", ["Limiting the spread of communism", "Expanding the British Empire", "Ending all diplomacy"], 0, "Cold War", "The USA aimed to limit communist expansion."),
        Q("What was the significance of the Cuban Missile Crisis?", ["It exposed the danger of nuclear confrontation", "It ended the First World War", "It created the League of Nations"], 0, "Cold War", "The crisis showed how close the superpowers came to nuclear war."),
        Q("What is provenance when analysing a source?", ["Information about its origin and author", "The number of words", "Its colour"], 0, "Source Analysis", "Provenance includes who created a source, when and why."),
        Q("What is corroboration?", ["Comparing sources to see whether they support each other", "Ignoring all sources", "Changing a date"], 0, "Source Analysis", "Corroboration compares evidence from different sources.")
    ],
    11: [
        Q("What is the difference between a primary and secondary source?", ["Primary sources come from the period; secondary sources interpret it later", "They are exactly the same", "Secondary sources are always more accurate"], 0, "Historical Skills", "Primary sources originate from the period being studied."),
        Q("What does causation mean in history?", ["Explaining why an event happened", "Listing events alphabetically", "Describing only the weather"], 0, "Historical Skills", "Causation explores the reasons behind events."),
        Q("What does consequence mean in historical study?", ["The result or impact of an event", "The cause of every event", "The date a source was written"], 0, "Historical Skills", "Consequences are the effects of events."),
        Q("Why is context important when evaluating a source?", ["It helps explain the circumstances in which it was created", "It tells us the paper size", "It removes the need for evidence"], 0, "Source Analysis", "Context helps us understand purpose, audience and circumstances."),
        Q("What is a balanced historical judgement?", ["A conclusion that considers different evidence and arguments", "A conclusion based on one unsupported opinion", "A list of dates"], 0, "Historical Essays", "A balanced judgement weighs evidence and different viewpoints.")
    ]
};

/* =========================================
   GEOGRAPHY: YEAR-SPECIFIC BANKS
========================================= */

const geography = {
    1: [
        Q("Which is the largest ocean?", ["Pacific", "Atlantic", "Indian"], 0, "Oceans", "The Pacific is the largest ocean."),
        Q("Which direction does the Sun appear to rise from?", ["East", "West", "North"], 0, "Directions", "The Sun appears to rise in the east."),
        Q("What is a mountain?", ["A high natural area of land", "A lake", "A forest"], 0, "Landforms", "Mountains are high areas of land."),
        Q("Which continent is the UK in?", ["Europe", "Asia", "Africa"], 0, "Continents", "The UK is in Europe."),
        Q("What is a river?", ["A flowing body of water", "A type of hill", "A desert"], 0, "Rivers", "A river is a natural stream of flowing water.")
    ],
    2: [
        Q("What is the capital of France?", ["Paris", "Rome", "Madrid"], 0, "Cities", "Paris is the capital of France."),
        Q("What is a map used for?", ["Showing places and locations", "Measuring temperature", "Growing plants"], 0, "Maps", "Maps represent places."),
        Q("What is a volcano?", ["An opening where magma can reach the surface", "A river bend", "A cloud"], 0, "Volcanoes", "Volcanoes can release lava and ash."),
        Q("What is the Equator?", ["An imaginary line around Earth's middle", "The North Pole", "A mountain range"], 0, "Latitude", "The Equator is at 0° latitude."),
        Q("What is a desert?", ["A very dry environment", "A rainforest", "A lake"], 0, "Biomes", "Deserts receive very little precipitation.")
    ],
    3: [
        Q("What is erosion?", ["The wearing away and movement of rock or soil", "Cloud formation", "Plant growth"], 0, "Physical Geography", "Erosion wears away and transports material."),
        Q("What is a continent?", ["A large continuous area of land", "A small river", "A type of cloud"], 0, "Continents", "Continents are Earth's large landmasses."),
        Q("What is precipitation?", ["Water falling from the atmosphere", "Water evaporating", "Water flowing underground"], 0, "Weather", "Rain, snow and hail are precipitation."),
        Q("What is a renewable resource?", ["One that can be replenished naturally", "One that can never be replaced", "One made only of plastic"], 0, "Resources", "Renewable resources can be naturally replenished."),
        Q("What is a habitat?", ["The natural home of an organism", "A type of mountain", "A weather instrument"], 0, "Environment", "A habitat is where an organism lives.")
    ],
    4: [
        Q("What is urbanisation?", ["An increase in the proportion of people living in towns and cities", "A decrease in rainfall", "Plate movement"], 0, "Human Geography", "Urbanisation is the growth of urban populations."),
        Q("What is Earth's outermost solid layer?", ["Crust", "Mantle", "Core"], 0, "Earth Structure", "The crust is Earth's outermost solid layer."),
        Q("What is a meander?", ["A bend in a river", "A volcano", "A cliff"], 0, "Rivers", "A meander is a winding river bend."),
        Q("What is a population?", ["The people living in an area", "The number of mountains", "The amount of rainfall"], 0, "Population", "Population is the number of people in an area."),
        Q("What is a natural resource?", ["Something from nature that people use", "A plastic toy", "A computer game"], 0, "Resources", "Natural resources come from the environment.")
    ],
    5: [
        Q("What causes the seasons?", ["Earth's tilted axis as it orbits the Sun", "The Moon's light", "The oceans stopping"], 0, "Climate", "Earth's tilt changes sunlight during the year."),
        Q("What is a population pyramid?", ["A diagram showing age and sex structure", "A mountain map", "A rainfall chart"], 0, "Population", "It shows the age and sex distribution."),
        Q("What is a sustainable city?", ["One designed to reduce environmental impact", "One with no transport", "One without people"], 0, "Sustainability", "Sustainable cities aim to balance environmental and social needs."),
        Q("What is a drainage basin?", ["An area drained by a river and its tributaries", "A desert", "A coastal cliff"], 0, "Rivers", "A drainage basin collects water for a river."),
        Q("What is migration?", ["Movement of people from one place to another", "Movement of tectonic plates", "The growth of a mountain"], 0, "Population", "Migration is the movement of people.")
    ],
    6: [
        Q("What is the difference between weather and climate?", ["Weather is short-term; climate is long-term", "They are identical", "Climate changes every hour"], 0, "Climate", "Climate describes long-term patterns."),
        Q("What is a tectonic plate?", ["A large section of Earth's lithosphere", "A cloud", "A river channel"], 0, "Tectonics", "Earth's lithosphere is divided into plates."),
        Q("What is a settlement?", ["A place where people live", "A type of rock", "A weather system"], 0, "Settlements", "Settlements are places where people live."),
        Q("What is a land-use map?", ["A map showing how land is used", "A map of stars", "A temperature chart"], 0, "Maps", "It shows uses such as housing, farming and industry."),
        Q("What is a natural hazard?", ["A natural event that can threaten people", "A school subject", "A type of road"], 0, "Hazards", "Natural hazards can cause damage and disruption.")
    ],
    7: [
        Q("What causes tectonic plate movement?", ["Processes within Earth's mantle", "Moonlight", "Ocean tides only"], 0, "Tectonics", "Heat-driven mantle movement helps drive plate motion."),
        Q("What is a longshore drift?", ["Movement of sediment along a coast", "Movement of clouds", "Movement of magma"], 0, "Coasts", "Waves move sediment along the coastline."),
        Q("What is rural-urban migration?", ["Movement from countryside to towns and cities", "Movement from cities to oceans", "International trade"], 0, "Migration", "People move from rural areas to urban areas."),
        Q("What is a biome?", ["A large ecosystem with characteristic climate and organisms", "A single animal", "A type of map"], 0, "Ecosystems", "Biomes have characteristic plants, animals and climates."),
        Q("What is a renewable energy source?", ["Wind", "Coal", "Oil"], 0, "Energy", "Wind is naturally replenished.")
    ],
    8: [
        Q("What is the greenhouse effect?", ["Warming caused when atmospheric gases absorb and re-emit infrared radiation", "Cooling caused by tides", "The reflection of all sunlight"], 0, "Climate Change", "Greenhouse gases absorb and re-emit infrared radiation."),
        Q("What is globalisation?", ["Increasing connections between countries", "Separating all countries", "Movement of tectonic plates"], 0, "Globalisation", "Globalisation increases international connections."),
        Q("What is a drainage basin's watershed?", ["The boundary separating neighbouring drainage basins", "The river mouth", "The river's deepest point"], 0, "Rivers", "A watershed marks the edge of a drainage basin."),
        Q("What is urban sprawl?", ["The outward spread of a built-up area", "The shrinking of a glacier", "The growth of a coral reef"], 0, "Urban Geography", "Urban sprawl is the outward expansion of urban areas."),
        Q("What is development?", ["Improvement in people's quality of life and opportunities", "Only an increase in rainfall", "A change in rock type"], 0, "Development", "Development includes economic and social improvements.")
    ],
    9: [
        Q("What is a country's development indicator?", ["A measure used to assess development", "A type of mountain", "A weather instrument"], 0, "Development", "Indicators help compare levels of development."),
        Q("What is the difference between a hazard and a disaster?", ["A disaster occurs when a hazard causes serious impacts", "They always mean exactly the same thing", "A hazard is always harmless"], 0, "Hazards", "A disaster involves serious disruption and impacts."),
        Q("What is the water cycle?", ["The continuous movement of water around Earth", "The movement of tectonic plates", "The formation of mountains"], 0, "Physical Geography", "Water moves through evaporation, condensation and precipitation."),
        Q("What is carbon sequestration?", ["Capturing and storing carbon dioxide", "Burning coal", "Removing all oxygen"], 0, "Climate Change", "Carbon can be stored in vegetation, soils and other reservoirs."),
        Q("What is a demographic transition?", ["A model of population change as a country develops", "A type of river erosion", "A map projection"], 0, "Population", "The model describes changes in birth and death rates.")
    ],
    10: [
        Q("What is the main cause of global sea-level rise?", ["Thermal expansion and melting land ice", "More earthquakes", "The Moon moving closer"], 0, "Climate Change", "Warming expands seawater and melts land-based ice."),
        Q("What is the urban heat island effect?", ["Urban areas being warmer than surrounding rural areas", "Cities receiving more snow", "Rivers becoming colder"], 0, "Urban Geography", "Buildings and surfaces store and release heat."),
        Q("What is a country's dependency ratio?", ["The relationship between dependent and working-age populations", "The number of rivers per person", "The percentage of forest"], 0, "Population", "It compares dependants with the working-age population."),
        Q("What is coastal management?", ["Actions to reduce erosion and flood risk along coasts", "Building roads inland only", "Measuring rainfall"], 0, "Coasts", "Coastal management aims to protect people and places."),
        Q("What is food security?", ["Reliable access to sufficient safe and nutritious food", "Having only imported food", "Growing food without water"], 0, "Resources", "Food security means people can access enough suitable food.")
    ],
    11: [
        Q("What is the difference between mitigation and adaptation to climate change?", ["Mitigation reduces causes; adaptation manages impacts", "They mean exactly the same thing", "Adaptation increases emissions"], 0, "Climate Change", "Mitigation reduces greenhouse gas emissions; adaptation responds to impacts."),
        Q("What is a feedback loop in a climate system?", ["A process where a change influences further changes", "A type of map", "A river source"], 0, "Climate Systems", "Feedbacks can amplify or reduce an initial change."),
        Q("What is an optimum population?", ["A population size that makes best use of available resources", "The world's largest city", "A population with no children"], 0, "Population", "The concept compares population size with resources."),
        Q("What is a sustainable development strategy?", ["A plan balancing environmental, social and economic needs", "A plan to use every resource immediately", "A plan to stop all trade"], 0, "Sustainability", "Sustainable development considers present and future needs."),
        Q("Why do geographers use different scales of analysis?", ["To understand patterns from local to global levels", "To avoid using evidence", "To change the weather"], 0, "Geographical Skills", "Different scales reveal different patterns and relationships.")
    ]
};


/* =========================================
   BUILD THE DATABASE
========================================= */

const subjectBanks = {
    math: maths,
    science: science,
    english: english,
    history: history,
    geography: geography
};

for (const subject of Object.keys(subjectBanks)) {

    questions[subject] = {};

    for (let year = 1; year <= 11; year++) {

        const yearKey = `year${year}`;
        questions[subject][yearKey] = {};

        const yearBank = subjectBanks[subject][year];

        for (let level = 1; level <= 5; level++) {

            const levelKey = `level${level}`;

            // Give each level its own copy of the questions
            // from the correct year.
            questions[subject][yearKey][levelKey] =
                yearBank.map(question => ({
                    ...question,
                    options: [...question.options],
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
    explanation,
    topic
) {

    const yearKey = `year${year}`;
    const levelKey = `level${level}`;

    if (
        !questions[subject]?.[yearKey]?.[levelKey]
    ) {
        console.error("Invalid subject, year or level.");
        return false;
    }

    if (
        typeof question !== "string" ||
        !question.trim() ||
        !Array.isArray(options) ||
        options.length < 2 ||
        !options.every(option => typeof option === "string") ||
        !Number.isInteger(answer) ||
        answer < 0 ||
        answer >= options.length
    ) {
        console.error("Invalid question details.");
        return false;
    }

    questions[subject][yearKey][levelKey].push({
        q: question,
        options: [...options],
        answer: answer,
        explanation: explanation || "",
        topic: topic || "General Knowledge",
        year: Number(year),
        level: Number(level)
    });

    return true;
}

/* =========================================
   DATABASE CHECK
========================================= */

console.log("School Quiz Learning Hub database loaded!");

console.log("Subjects:", Object.keys(questions));
console.log("Years: 1–11");
console.log("Levels: 1–5");

console.log(
    "Year 1 Maths Level 1:",
    questions.math.year1.level1
);

console.log(
    "Year 1 Maths Level 5:",
    questions.math.year1.level5
);

console.log(
    "Year 11 Maths Level 5:",
    questions.math.year11.level5
);

console.log(
    "Year 1 Maths questions:",
    questions.math.year1.level1.length
);

console.log(
    "Year 11 Maths questions:",
    questions.math.year11.level5.length
);

console.log("All 275 subject/year/level combinations created.");

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
    explanation,
    topic
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
        !options.every(option => typeof option === "string") ||
        !Number.isInteger(answer) ||
        answer < 0 ||
        answer >= options.length
    ) {
        console.error("Invalid question details.");
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
   DATABASE CHECK
========================================= */

console.log("School Quiz Learning Hub database loaded!");

console.log("Subjects:", Object.keys(questions));
console.log("Years: 1–11");
console.log("Levels: 1–5");

console.log(
    "Year 1 Maths Level 5:",
    questions.math.year1.level5
);

console.log(
    "Year 11 Maths Level 5:",
    questions.math.year11.level5
);

console.log("All 275 subject/year/level combinations created.");
