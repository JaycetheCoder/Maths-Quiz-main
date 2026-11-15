/* =========================================================
   SCHOOL QUIZ LEARNING HUB
   COMPLETE QUESTION DATABASE
   5 subjects | Years 1–11 | Levels 1–5
========================================================= */

const questions = {};

function Q(q, options, answer, topic, explanation) {
    return { q, options, answer, topic, explanation };
}

function shuffleWithSeed(items, seed) {
    const copy = [...items];
    let value = seed >>> 0;

    for (let i = copy.length - 1; i > 0; i--) {
        value = (value * 1664525 + 1013904223) >>> 0;
        const j = value % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function makeQuestion(prompt, correct, distractors, topic, explanation, seed) {
    const unique = [...new Set([
        String(correct),
        ...distractors.map(String)
    ])];

    const choices = shuffleWithSeed(unique.slice(0, 3), seed);

    return Q(
        prompt,
        choices,
        choices.indexOf(String(correct)),
        topic,
        explanation
    );
}

/* =========================================================
   MATHS
========================================================= */

function makeMathQuestions(year, level) {
    const out = [];
    const difficulty = year + level * 2;

    for (let i = 0; i < 10; i++) {
        const n = difficulty * 7 + i * 3 + 5;

        let a, b, answer, prompt, topic, explanation, distractors;

        switch ((i + level + year) % 8) {
            case 0:
                a = n;
                b = (level + i) % 9 + 2;
                answer = a + b;
                prompt = `Calculate ${a} + ${b}.`;
                topic = "Addition";
                explanation = `${a} + ${b} = ${answer}.`;
                distractors = [answer - 1, answer + 2];
                break;

            case 1:
                a = n + 15;
                b = (level + i) % 12 + 3;
                answer = a - b;
                prompt = `Calculate ${a} − ${b}.`;
                topic = "Subtraction";
                explanation = `${a} − ${b} = ${answer}.`;
                distractors = [answer + 1, answer - 2];
                break;

            case 2:
                a = (level + 2) * (i + 2);
                b = (i % 5) + 2;
                answer = a * b;
                prompt = `What is ${a} × ${b}?`;
                topic = "Multiplication";
                explanation = `${a} multiplied by ${b} equals ${answer}.`;
                distractors = [answer - b, answer + b];
                break;

            case 3:
                b = (i % 6) + 2;
                a = (level + 3) * b;
                answer = a / b;
                prompt = `What is ${a} ÷ ${b}?`;
                topic = "Division";
                explanation = `${a} divided by ${b} equals ${answer}.`;
                distractors = [answer + 1, answer - 1];
                break;

            case 4:
                a = (i + 2) * (level + 2);
                answer = a / 2;
                prompt = `What is half of ${a}?`;
                topic = "Fractions";
                explanation = `Half means divide by 2: ${a} ÷ 2 = ${answer}.`;
                distractors = [answer + 2, answer - 2];
                break;

            case 5:
                a = (i + 1) * 10 + level * 5;
                answer = a / 10;
                prompt = `What is 10% of ${a}?`;
                topic = "Percentages";
                explanation = `10% is one tenth, so ${a} ÷ 10 = ${answer}.`;
                distractors = [answer * 2, answer + 5];
                break;

            case 6:
                a = (i + 3) * (level + 2);
                b = (i % 4) + 2;
                answer = a * b;
                prompt = `A rectangle is ${a} cm long and ${b} cm wide. What is its area?`;
                topic = "Area";
                explanation = `Area = length × width = ${a} × ${b} = ${answer} cm².`;
                distractors = [a + b, 2 * (a + b)];
                break;

            default:
                a = (i + 2) * 5 + level;
                answer = Math.ceil(a / 10) * 10;
                prompt = `Round ${a} to the nearest 10.`;
                topic = "Rounding";
                explanation = `${a} rounds to ${answer} to the nearest 10.`;
                distractors = [answer - 10, answer + 10];
        }

        out.push(makeQuestion(
            prompt,
            answer,
            distractors,
            topic,
            explanation,
            year * 1000 + level * 100 + i
        ));
    }

    return out;
}

/* =========================================================
   SCIENCE
========================================================= */

const scienceFacts = [
    ["plants use sunlight to make food", "photosynthesis", ["respiration", "evaporation"], "Plants make glucose using light energy in photosynthesis."],
    ["the organ that pumps blood around the body", "heart", ["lungs", "stomach"], "The heart pumps blood around the body."],
    ["the gas humans need for aerobic respiration", "oxygen", ["nitrogen", "carbon dioxide"], "Humans use oxygen in aerobic respiration."],
    ["the process where liquid water becomes a gas", "evaporation", ["condensation", "freezing"], "Evaporation changes a liquid into a gas."],
    ["the force that pulls objects towards Earth", "gravity", ["friction", "magnetism"], "Gravity attracts objects towards Earth."],
    ["the smallest unit of a chemical element", "atom", ["cell", "organ"], "An atom is the smallest unit of an element that retains its properties."],
    ["the particle with a negative electrical charge", "electron", ["proton", "neutron"], "Electrons have a negative charge."],
    ["the part of a plant that absorbs most water", "root hair cells", ["petals", "stem"], "Root hair cells absorb water and mineral ions."],
    ["the change from a solid directly to a gas", "sublimation", ["melting", "condensation"], "Sublimation is a direct change from solid to gas."],
    ["the unit used to measure force", "newton", ["joule", "watt"], "Force is measured in newtons (N)."],
    ["the part of a cell that contains genetic material", "nucleus", ["cell membrane", "cytoplasm"], "The nucleus contains most of a cell's genetic material."],
    ["the gas plants take in for photosynthesis", "carbon dioxide", ["oxygen", "hydrogen"], "Plants take in carbon dioxide for photosynthesis."],
    ["the name for animals that eat only plants", "herbivores", ["carnivores", "omnivores"], "Herbivores eat plants."],
    ["the pH value of a neutral solution at room temperature", "7", ["1", "14"], "A neutral solution has a pH of 7 at room temperature."],
    ["the type of energy stored in a stretched spring", "elastic potential energy", ["sound energy", "thermal energy"], "A stretched spring stores elastic potential energy."],
    ["the process by which organisms produce offspring", "reproduction", ["digestion", "excretion"], "Reproduction produces new organisms."],
    ["the name for the change from gas to liquid", "condensation", ["evaporation", "melting"], "Condensation changes a gas into a liquid."],
    ["the metal that is liquid at typical room temperature", "mercury", ["iron", "copper"], "Mercury is liquid at typical room temperature."],
    ["the structure that controls what enters and leaves a cell", "cell membrane", ["cell wall", "nucleus"], "The cell membrane controls movement into and out of the cell."],
    ["the SI unit of electric current", "ampere", ["volt", "ohm"], "Electric current is measured in amperes (A)."]
];

function makeScienceQuestions(year, level) {
    return Array.from({ length: 10 }, (_, i) => {
        const index = (year * 3 + level * 5 + i * 2) % scienceFacts.length;
        const [description, correct, wrong, explanation] = scienceFacts[index];

        return makeQuestion(
            `Which term matches this description: ${description}?`,
            correct,
            wrong,
            "Science knowledge",
            explanation,
            year * 1000 + level * 100 + i
        );
    });
}

/* =========================================================
   ENGLISH
========================================================= */

const englishFacts = [
    ["Which word is a noun?", "garden", ["quickly", "bright"], "A noun names a person, place, thing or idea."],
    ["Which word is an adjective?", "enormous", ["jump", "slowly"], "An adjective describes a noun."],
    ["Which word is a verb?", "whisper", ["gentle", "silence"], "A verb expresses an action or state."],
    ["Which word is an adverb?", "carefully", ["careful", "care"], "An adverb can describe how an action is done."],
    ["Which punctuation mark ends a question?", "question mark", ["full stop", "comma"], "A question ends with a question mark."],
    ["Which is the correct plural of 'child'?", "children", ["childs", "childes"], "The plural of child is children."],
    ["Which sentence uses an apostrophe correctly?", "The dog's bowl is blue.", ["The dogs bowl is blue.", "The dogs' bowl is blue. (one dog)"], "An apostrophe can show possession: the dog's bowl."],
    ["What is a synonym for 'happy'?", "cheerful", ["furious", "empty"], "Cheerful has a similar meaning to happy."],
    ["What is an antonym of 'ancient'?", "modern", ["historic", "old"], "Modern is the opposite of ancient."],
    ["Which is a conjunction?", "although", ["under", "bright"], "Although is a subordinating conjunction."],
    ["What is the subject in 'The small dog barked loudly'?", "The small dog", ["barked loudly", "loudly"], "The subject is who or what the sentence is about."],
    ["Which sentence is written in the past tense?", "She walked home.", ["She walks home.", "She will walk home."], "Walked is the past-tense form."],
    ["What is a metaphor?", "A direct comparison saying one thing is another", ["A comparison using like or as", "A repeated consonant sound"], "A metaphor makes a direct comparison."],
    ["What is alliteration?", "Repeated initial consonant sounds", ["A comparison using like", "An exaggerated statement"], "Alliteration repeats consonant sounds at the beginning of nearby words."],
    ["Which word is a preposition?", "beneath", ["beautiful", "sing"], "Beneath shows a relationship of place."],
    ["Which sentence is in the passive voice?", "The window was broken by the ball.", ["The ball broke the window.", "The ball is bouncing."], "In the passive sentence, the subject receives the action."],
    ["What is personification?", "Giving human qualities to something non-human", ["Using a question for effect", "Repeating a vowel sound"], "Personification gives human characteristics to non-human things."],
    ["Which punctuation can show omitted words in a quotation?", "Ellipsis", ["Colon", "Hyphen"], "An ellipsis shows that words have been omitted or a pause."],
    ["What is the main purpose of a persuasive text?", "To convince the reader", ["To list random events", "To give only fictional dialogue"], "Persuasive writing aims to influence the reader."],
    ["Which word is a modal verb?", "might", ["garden", "yellow"], "Might is a modal verb expressing possibility."]
];

function makeEnglishQuestions(year, level) {
    return Array.from({ length: 10 }, (_, i) => {
        const index = (year * 4 + level * 3 + i * 3) % englishFacts.length;
        const [prompt, correct, wrong, explanation] = englishFacts[index];

        return makeQuestion(
            prompt,
            correct,
            wrong,
            "Grammar and language",
            explanation,
            year * 1000 + level * 100 + i
        );
    });
}

/* =========================================================
   HISTORY
========================================================= */

const historyFacts = [
    ["In which year did the Battle of Hastings take place?", "1066", ["1215", "1485"], "The Battle of Hastings took place in 1066."],
    ["Who was the first Tudor monarch of England?", "Henry VII", ["Henry VIII", "Richard III"], "Henry VII became king in 1485."],
    ["Which document was agreed in 1215?", "Magna Carta", ["Domesday Book", "Bill of Rights"], "Magna Carta was agreed in 1215."],
    ["Which civilisation built the pyramids at Giza?", "Ancient Egyptians", ["Ancient Romans", "Ancient Greeks"], "The pyramids at Giza were built by ancient Egyptians."],
    ["Which Roman town was buried by Mount Vesuvius in AD 79?", "Pompeii", ["Athens", "Carthage"], "Pompeii was buried during the eruption of Vesuvius in AD 79."],
    ["Who was the British monarch during most of the Victorian era?", "Queen Victoria", ["Queen Anne", "Elizabeth I"], "Queen Victoria reigned from 1837 to 1901."],
    ["In which year did the First World War begin?", "1914", ["1918", "1939"], "The First World War began in 1914."],
    ["In which year did the Second World War end?", "1945", ["1939", "1950"], "The Second World War ended in 1945."],
    ["Which invention is associated with Johannes Gutenberg?", "The printing press", ["The steam engine", "The telephone"], "Gutenberg developed a major form of movable-type printing in Europe."],
    ["Which empire was ruled from Constantinople for much of its history?", "Byzantine Empire", ["Mongol Empire", "Mali Empire"], "Constantinople was the capital of the Byzantine Empire."],
    ["Which movement campaigned to end the transatlantic slave trade?", "Abolitionism", ["Feudalism", "Mercantilism"], "Abolitionists campaigned to end the slave trade and slavery."],
    ["Which event began in France in 1789?", "French Revolution", ["Industrial Revolution", "Glorious Revolution"], "The French Revolution began in 1789."],
    ["Who was the leader of Nazi Germany during the Second World War?", "Adolf Hitler", ["Winston Churchill", "Joseph Stalin"], "Adolf Hitler led Nazi Germany during the war."],
    ["Which organisation was founded in 1945 to promote international cooperation?", "United Nations", ["League of Nations", "European Union"], "The United Nations was founded in 1945."],
    ["What was the name of the 1917 revolution that brought the Bolsheviks to power?", "October Revolution", ["French Revolution", "Glorious Revolution"], "The October Revolution brought the Bolsheviks to power in Russia."],
    ["Which ancient Greek city-state is associated with the development of democracy?", "Athens", ["Sparta", "Troy"], "Athens developed an early form of direct democracy."],
    ["What was the medieval system based on landholding and obligations called?", "Feudalism", ["Capitalism", "Socialism"], "Feudalism organised society around land, loyalty and service."],
    ["Which British law abolished slavery throughout most of the British Empire in 1833?", "Slavery Abolition Act", ["Reform Act", "Factory Act"], "The Slavery Abolition Act was passed in 1833."],
    ["Which wall divided Berlin during the Cold War?", "Berlin Wall", ["Hadrian's Wall", "Great Wall"], "The Berlin Wall divided East and West Berlin."],
    ["What term describes the period of tension between the USA and USSR after 1945?", "Cold War", ["Hundred Years' War", "Crimean War"], "The Cold War was a period of geopolitical tension after the Second World War."]
];

function makeHistoryQuestions(year, level) {
    return Array.from({ length: 10 }, (_, i) => {
        const index = (year * 5 + level * 2 + i * 3) % historyFacts.length;
        const [prompt, correct, wrong, explanation] = historyFacts[index];

        return makeQuestion(
            prompt,
            correct,
            wrong,
            "History",
            explanation,
            year * 1000 + level * 100 + i
        );
    });
}

/* =========================================================
   GEOGRAPHY
========================================================= */

const geographyFacts = [
    ["What is the largest ocean on Earth?", "Pacific Ocean", ["Atlantic Ocean", "Indian Ocean"], "The Pacific is the largest ocean."],
    ["What is the capital city of France?", "Paris", ["Rome", "Madrid"], "Paris is the capital of France."],
    ["Which imaginary line divides Earth into the Northern and Southern Hemispheres?", "Equator", ["Prime Meridian", "Tropic of Cancer"], "The Equator is at 0 degrees latitude."],
    ["What is the largest hot desert in the world?", "Sahara", ["Gobi", "Kalahari"], "The Sahara is the world's largest hot desert."],
    ["Which continent is the Amazon Rainforest mainly located in?", "South America", ["Africa", "Asia"], "Most of the Amazon Rainforest is in South America."],
    ["What is the capital of Japan?", "Tokyo", ["Kyoto", "Osaka"], "Tokyo is Japan's capital."],
    ["What is the name of the line at 0 degrees longitude?", "Prime Meridian", ["Equator", "International Date Line"], "The Prime Meridian is at 0 degrees longitude."],
    ["Which process wears away rock and transports sediment?", "Erosion", ["Deposition", "Condensation"], "Erosion wears away and transports material."],
    ["What type of plate boundary is formed when plates move apart?", "Constructive", ["Destructive", "Conservative"], "At a constructive boundary, tectonic plates move apart."],
    ["Which gas is a major contributor to human-caused global warming?", "Carbon dioxide", ["Oxygen", "Helium"], "Carbon dioxide is a major greenhouse gas."],
    ["What is the capital city of Australia?", "Canberra", ["Sydney", "Melbourne"], "Canberra is Australia's capital."],
    ["Which river flows through Egypt?", "Nile", ["Amazon", "Danube"], "The Nile flows north through Egypt."],
    ["What is a population pyramid used to show?", "The age and sex structure of a population", ["Daily weather", "Rock types"], "A population pyramid shows population structure by age and sex."],
    ["What is urbanisation?", "An increase in the proportion of people living in towns and cities", ["A fall in sea level", "The movement of tectonic plates"], "Urbanisation is the growth in the proportion of people living in urban areas."],
    ["Which scale measures earthquake magnitude in modern seismology?", "Moment magnitude scale", ["Beaufort scale", "Richter temperature scale"], "The moment magnitude scale is commonly used for earthquake magnitude."],
    ["What is the movement of people into a country called?", "Immigration", ["Emigration", "Erosion"], "Immigration is movement into a country."],
    ["Which biome is characterised by permanently frozen subsoil?", "Tundra", ["Tropical rainforest", "Savanna"], "Permafrost is characteristic of tundra environments."],
    ["What is the term for the total value of goods and services produced in a country in a year?", "Gross Domestic Product", ["Birth rate", "Life expectancy"], "GDP measures the value of goods and services produced."],
    ["What is a long period of unusually low rainfall called?", "Drought", ["Monsoon", "Blizzard"], "A drought is a prolonged period of unusually low rainfall."],
    ["Which natural hazard is caused by movement along a fault?", "Earthquake", ["Hurricane", "Drought"], "Earthquakes occur when energy is released as rocks move along faults."]
];

function makeGeographyQuestions(year, level) {
    return Array.from({ length: 10 }, (_, i) => {
        const index = (year * 2 + level * 7 + i * 3) % geographyFacts.length;
        const [prompt, correct, wrong, explanation] = geographyFacts[index];

        return makeQuestion(
            prompt,
            correct,
            wrong,
            "Geography",
            explanation,
            year * 1000 + level * 100 + i
        );
    });
}

/* =========================================================
   BUILD ALL SUBJECTS, YEARS AND LEVELS
========================================================= */

const generators = {
    math: makeMathQuestions,
    science: makeScienceQuestions,
    english: makeEnglishQuestions,
    history: makeHistoryQuestions,
    geography: makeGeographyQuestions
};

for (const [subject, generator] of Object.entries(generators)) {
    questions[subject] = {};

    for (let year = 1; year <= 11; year++) {
        const yearKey = `year${year}`;
        questions[subject][yearKey] = {};

        for (let level = 1; level <= 5; level++) {
            const levelKey = `level${level}`;

            questions[subject][yearKey][levelKey] =
                generator(year, level).map(question => ({
                    ...question,
                    options: [...question.options],
                    year,
                    level
                }));
        }
    }
}

/* =========================================================
   ADD EXTRA QUESTIONS SAFELY
========================================================= */

function addQuestion(subject, year, level, question, options, answer, explanation, topic) {
    if (!generators[subject]) {
        console.error("Invalid subject:", subject);
        return false;
    }

    if (!Number.isInteger(year) || year < 1 || year > 11) {
        console.error("Year must be between 1 and 11.");
        return false;
    }

    if (!Number.isInteger(level) || level < 1 || level > 5) {
        console.error("Level must be between 1 and 5.");
        return false;
    }

    if (typeof question !== "string" || !question.trim()) {
        console.error("Question text is required.");
        return false;
    }

    if (!Array.isArray(options) || options.length < 2 ||
        options.some(option => typeof option !== "string" || !option.trim())) {
        console.error("At least two valid answer options are required.");
        return false;
    }

    if (!Number.isInteger(answer) || answer < 0 || answer >= options.length) {
        console.error("Answer must be the zero-based index of a valid option.");
        return false;
    }

    questions[subject][`year${year}`][`level${level}`].push({
        q: question,
        options: [...options],
        answer,
        explanation: explanation || "",
        topic: topic || "General",
        year,
        level
    });

    return true;
}

/* =========================================================
   DATABASE VALIDATION
========================================================= */

let totalQuestions = 0;
let validCombinations = 0;

for (const subject of Object.keys(generators)) {
    for (let year = 1; year <= 11; year++) {
        for (let level = 1; level <= 5; level++) {
            const bank = questions[subject][`year${year}`][`level${level}`];

            totalQuestions += bank.length;

            if (bank.length >= 10) {
                validCombinations++;
            }

            for (const item of bank) {
                if (
                    typeof item.q !== "string" ||
                    !Array.isArray(item.options) ||
                    !Number.isInteger(item.answer) ||
                    item.answer < 0 ||
                    item.answer >= item.options.length
                ) {
                    console.error(
                        "Invalid question:",
                        subject,
                        year,
                        level,
                        item
                    );
                }
            }
        }
    }
}

console.log("School Quiz Learning Hub database loaded!");
console.log("Subjects:", Object.keys(questions));
console.log("Years: 1–11 | Levels: 1–5");
console.log("Question combinations:", validCombinations);
console.log("Total generated questions:", totalQuestions);
console.log("Expected total: 2750");

if (totalQuestions === 2750 && validCombinations === 275) {
    console.log("Question database validation passed!");
} else {
    console.error("Question database validation failed.");
}
