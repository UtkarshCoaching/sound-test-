const questions = [
  {
    "question": "‘ভারতীয় জাতীয় কংগ্রেস’-এর প্রথম অধিবেশন কোথায় অনুষ্ঠিত হয়েছিল?",
    "options": ["বোম্বাই", "কলকাতা", "মাদ্রাজ", "দিল্লি"],
    "answer": "বোম্বাই",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘অধিবেশন’ (Session) শব্দটি কোন অনুচ্ছেদে উল্লেখ আছে?",
    "options": ["অনুচ্ছেদ ৮৩", "অনুচ্ছেদ ৮৫", "অনুচ্ছেদ ৯০", "অনুচ্ছেদ ১০০"],
    "answer": "অনুচ্ছেদ ৮৫",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘মৌলিক কর্তব্য’ ভারতীয় সংবিধানে কবে যুক্ত হয়েছিল?",
    "options": ["১৯৫০", "১৯৭৬", "১৯৬২", "১৯৮৫"],
    "answer": "১৯৭৬",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘গদর পার্টি’ কোথায় প্রতিষ্ঠিত হয়েছিল?",
    "options": ["লন্ডন", "আমেরিকা", "জার্মানি", "কলকাতা"],
    "answer": "আমেরিকা",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘বঙ্গভঙ্গ’ কবে ঘটেছিল?",
    "options": ["১৯০৫", "১৯১১", "১৯০৯", "১৯২১"],
    "answer": "১৯০৫",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘ডান্ডি অভিযান’ (নমক সত্যাগ্রহ) কে নেতৃত্ব দেন?",
    "options": ["ভগৎ সিং", "মহাত্মা গান্ধী", "সুভাষ চন্দ্র বসু", "লালা লাজপত রায়"],
    "answer": "মহাত্মা গান্ধী",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘রক্তচোষা রঞ্জিত’ নামে কাকে বলা হত?",
    "options": ["লর্ড কর্নওয়ালিস", "লর্ড কার্জন", "লর্ড লিটন", "লর্ড ডালহৌসি"],
    "answer": "লর্ড ডালহৌসি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘গোবিন্দ স্বামী’ কোন ধর্মের সঙ্গে যুক্ত ছিলেন?",
    "options": ["বৌদ্ধ", "শৈব", "বৈষ্ণব", "জৈন"],
    "answer": "বৈষ্ণব",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Black Hole Tragedy’ কোন সালে ঘটেছিল?",
    "options": ["১৭৫৭", "১৭৫৬", "১৭৬১", "১৭৪৮"],
    "answer": "১৭৫৬",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘ভারত ছাড়ো আন্দোলন’ কবে শুরু হয়েছিল?",
    "options": ["১৯৪০", "১৯৪২", "১৯৩৫", "১৯৪৫"],
    "answer": "১৯৪২",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Octroi Duty’ কোন করের অন্তর্ভুক্ত ছিল?",
    "options": ["প্রত্যক্ষ কর", "পরোক্ষ কর", "প্রগতিশীল কর", "সরাসরি ভর্তুকি"],
    "answer": "পরোক্ষ কর",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন ভিটামিনের অভাবে রাত্রিকানা রোগ হয়?",
    "options": ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন ডি"],
    "answer": "ভিটামিন এ",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Indian Councils Act 1861’ কাদের দ্বারা প্রণীত হয়েছিল?",
    "options": ["লর্ড রিপন", "লর্ড ক্যানিং", "লর্ড লিটন", "লর্ড ডালহৌসি"],
    "answer": "লর্ড ক্যানিং",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Right to Education’ সংবিধানের কোন অনুচ্ছেদে যুক্ত হয়েছে?",
    "options": ["অনুচ্ছেদ ২১", "অনুচ্ছেদ ২১এ", "অনুচ্ছেদ ২২", "অনুচ্ছেদ ২৯"],
    "answer": "অনুচ্ছেদ ২১এ",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতীয় রেলওয়ের সদর দপ্তর কোথায় অবস্থিত?",
    "options": ["দিল্লি", "কলকাতা", "মুম্বাই", "চেন্নাই"],
    "answer": "দিল্লি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Virus’ শব্দটির অর্থ কী?",
    "options": ["ক্ষুদ্র অণুজীব", "বিষাক্ত তরল", "সংক্রমক কণা", "জীবিত অণুজীব"],
    "answer": "বিষাক্ত তরল",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘জাতীয় আয়’ প্রথম কোন ভারতীয় অর্থনীতিবিদ গণনা করেছিলেন?",
    "options": ["দাদাভাই নওরোজি", "পি. সি. মহলানবিস", "কে. এন. রাজ", "রাজ কৃষ্ণ"],
    "answer": "দাদাভাই নওরোজি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন নদীকে ‘বিহারের শোক’ বলা হয়?",
    "options": ["গঙ্গা", "কোশি", "গোদাবরী", "মহানদী"],
    "answer": "কোশি",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Vellore Mutiny’ কবে হয়েছিল?",
    "options": ["১৮০৬", "১৮৫৭", "১৮২৪", "১৮৩১"],
    "answer": "১৮০৬",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Somnath Mandir’ কে পুনর্নির্মাণ করেছিলেন?",
    "options": ["রাজেন্দ্র প্রসাদ", "সর্দার বল্লভভাই প্যাটেল", "নেহেরু", "মহাত্মা গান্ধী"],
    "answer": "সর্দার বল্লভভাই প্যাটেল",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "কোন কমিশন ‘Government of India Act 1935’ এর ভিত্তি স্থাপন করেছিল?",
    "options": ["সাইমন কমিশন", "হান্টার কমিশন", "হুইলার কমিশন", "সার্জেন্ট কমিশন"],
    "answer": "সাইমন কমিশন",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘Mahajanapada’ কতটি ছিল?",
    "options": ["১২", "১৬", "২০", "২৪"],
    "answer": "১৬",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘দ্বিতীয় পাঁচবার্ষিক পরিকল্পনা’ কোন নীতি অনুসরণে করা হয়েছিল?",
    "options": ["কৃষি ভিত্তিক", "নেহেরু-মহলানবিস মডেল", "আমদানি ভিত্তিক", "উদার নীতি"],
    "answer": "নেহেরু-মহলানবিস মডেল",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘জাতীয় ভোক্তা দিবস’ কবে পালিত হয়?",
    "options": ["১৫ মার্চ", "২৪ ডিসেম্বর", "৫ জুন", "২ অক্টোবর"],
    "answer": "২৪ ডিসেম্বর",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "‘International Date Line’ কোন মহাসাগরের মধ্যে দিয়ে যায়?",
    "options": ["আটলান্টিক মহাসাগর", "ভারত মহাসাগর", "প্রশান্ত মহাসাগর", "আর্কটিক মহাসাগর"],
    "answer": "প্রশান্ত মহাসাগর",
    "userAnswer": null,
    "status": null
  }

];


let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;
let userName = ''; // ব্যবহারকারীর নাম সংরক্ষণের জন্য ভেরিয়েবল
const passMarkPercentage = 60; // Changed to 60%

// DOM Elements
const nameInputScreen = document.getElementById('nameInputScreen');
const userNameInput = document.getElementById('userNameInput');
const proceedToStartScreenButton = document.getElementById('proceedToStartScreenButton');
const nameInputMessage = document.getElementById('nameInputMessage');

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// New: References to the result summary and detailed answers containers
const resultSummary = document.getElementById('resultSummary');
const detailedAnswersContainer = document.getElementById('detailedAnswersContainer');


const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');

const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;

const rankListElem = document.getElementById('rankList');

// New: Get the new buttons for detailed answers
const showAllAnswersButton = document.getElementById('showAllAnswersButton');
const showCorrectAnswersButton = document.getElementById('showCorrectAnswersButton');
const showWrongAnswersButton = document.getElementById('showWrongAnswersButton');
const showSkippedQuestionsButton = document.getElementById('showSkippedQuestionsButton');
const backToResultsButton = document.getElementById('backToResultsButton'); // Back button
const detailedAnswersTitle = document.getElementById('detailedAnswersTitle');
const questionsList = document.getElementById('questionsList');


// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// --- Event Listeners ---
proceedToStartScreenButton.addEventListener('click', handleNameInputAndShowStartScreen);
startButton.addEventListener('click', startQuiz);

// Disable manual interaction with buttons
nextButton.style.display = 'none';
skipButton.style.display = 'none';
submitButton.style.display = 'none';


// New: Event listeners for the detailed answer buttons
showAllAnswersButton.addEventListener('click', () => displayDetailedQuestions('all'));
showCorrectAnswersButton.addEventListener('click', () => displayDetailedQuestions('correct'));
showWrongAnswersButton.addEventListener('click', () => displayDetailedQuestions('wrong'));
showSkippedQuestionsButton.addEventListener('click', () => displayDetailedQuestions('skipped'));
backToResultsButton.addEventListener('click', backToSummaryScreen);


// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Name Input and Screen Flow ---
function handleNameInputAndShowStartScreen() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName; // ব্যবহারকারীর নাম সংরক্ষণ করুন
    nameInputMessage.textContent = ''; // মেসেজ মুছে ফেলুন

    nameInputScreen.classList.remove('active');
    startScreen.classList.add('active'); // নাম ইনপুট করার পর startScreen দেখান
}


function startQuiz() { // startScreen থেকে কুইজ শুরু করার ফাংশন
    // Shuffle questions at the start of the quiz
    shuffleArray(questions); // Add this line to shuffle questions
    questions.forEach(q => shuffleArray(q.options)); // Shuffle options for each question

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resetQuizState(); // কুইজ স্টেট রিসেট করুন কুইজ শুরু করার আগে
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    // Reset user answers and status for each question
    questions.forEach(q => {
        q.userAnswer = null;
        q.status = null;
    });
    clearInterval(questionTimerInterval); // নিশ্চিত করুন কোনো টাইমার চলছে না
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            // Only proceed if the question hasn't been answered yet
            if (questions[currentQuestionIndex].status === null) {
                // Check status
                handleTimeUp();
            }
        }
    }, 1000);
}

// Function to handle Text-to-Speech
function speak(text, onEndCallback) {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'bn-IN';
    speech.text = text;
    // Set up the onend callback
    if (onEndCallback) {
        speech.onend = onEndCallback;
    }
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Speech Synthesis not supported");
    // If speech is not supported, just call the callback immediately
    if (onEndCallback) {
        onEndCallback();
    }
  }
}

// Function to stop any ongoing speech
function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function loadQuestion() {
    stopSpeaking(); // Stop any previous speech
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    // Reset and add animation class to question box
    questionTextBox.classList.remove('active');
    void questionTextBox.offsetWidth; // Trigger reflow
    questionTextBox.classList.add('active');
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';

    // Add options to the DOM
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        optionsContainer.appendChild(button);

        setTimeout(() => {
            button.classList.add('active');
        }, index * 100);
    });

    // Speak the question after a short delay to ensure previous speech is canceled
    setTimeout(() => {
        speak(currentQuestion.question, handleAutoAnswer);
    }, 200); // 200ms delay
}

function handleAutoAnswer() {
    stopSpeaking(); // Stop question speech just in case
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion || currentQuestion.status !== null) {
        // Exit if no question is available or if it's already been handled
        return;
    }

    const correctAnswer = currentQuestion.answer;
    currentQuestion.userAnswer = correctAnswer;
    currentQuestion.status = 'correct';
    correctCount++;

    // Find and highlight the correct button
    Array.from(optionsContainer.children).forEach(optionBtn => {
        if (optionBtn.textContent === correctAnswer) {
            optionBtn.classList.add('selected', 'correct');
        }
    });

    score++;
    scoreDisplayElem.textContent = score.toFixed(2);

    // Speak the correct answer and then load the next question when done
    speak(correctAnswer, () => {
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1500); // 1.5-second pause before moving to the next question
    });
}


function handleSubmitQuiz() {
    stopSpeaking(); // Stop speech before showing results
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    displayResults();
    // Save results to Firebase
    saveQuizResult(userName, score, correctCount, wrongCount);
}

// Function to display quiz results
function displayResults() {
    const finalScoreElem = document.getElementById('finalScore');
    const correctAnswersElem = document.getElementById('correctAnswers');
    const wrongAnswersElem = document.getElementById('wrongAnswers');
    const skippedQuestionsElem = document.getElementById('skippedQuestions');
    const percentageElem = document.getElementById('percentage');
    const percentageBarFill = document.getElementById('percentageBarFill');
    const userStatusElem = document.getElementById('userStatus');

    finalScoreElem.textContent = score.toFixed(2);
    correctAnswersElem.textContent = correctCount;
    wrongAnswersElem.textContent = wrongCount;
    skippedQuestionsElem.textContent = skippedCount;

    const totalQuestions = questions.length;
    const percentage = (correctCount / totalQuestions) * 100;
    percentageElem.textContent = percentage.toFixed(2);
    percentageBarFill.style.width = percentage.toFixed(2) + '%';

    if (percentage >= passMarkPercentage) {
        userStatusElem.textContent = 'অভিনন্দন! আপনি পাশ করেছেন।';
        userStatusElem.style.color = 'green';
        percentageBarFill.style.backgroundColor = '#4CAF50';
    } else {
        userStatusElem.textContent = 'দুঃখিত! আপনি পাশ করতে পারেননি।';
        userStatusElem.style.color = 'red';
        percentageBarFill.style.backgroundColor = '#f44336';
    }
}


// Firebase integration

// Note: You must initialize Firebase in your HTML file before using it.
// Here is the placeholder for the database reference.
// Make sure to configure your own Firebase project details in index.html
const dbRef = firebase.database().ref('quiz_results');

function saveQuizResult(userName, score, correctCount, wrongCount) {
    const totalQuestions = questions.length;
    const resultData = {
        name: userName,
        score: score,
        correct: correctCount,
        wrong: wrongCount,
        skipped: totalQuestions - correctCount - wrongCount,
        percentage: (correctCount / totalQuestions) * 100,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    dbRef.push(resultData, (error) => {
        if (error) {
            console.error("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
            fetchAndDisplayRankings();
        }
    });
}

function fetchAndDisplayRankings() {
    const rankListElem = document.getElementById('rankList');
    rankListElem.innerHTML = '';
    dbRef.orderByChild('percentage').limitToLast(10).once('value', (snapshot) => {
        const rankings = [];
        snapshot.forEach((childSnapshot) => {
            const result = childSnapshot.val();
            rankings.push(result);
        });

        rankings.sort((a, b) => b.percentage - a.percentage);

        rankings.forEach((result, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${result.name}: ${result.percentage.toFixed(2)}%`;
            rankListElem.appendChild(listItem);
        });
    });
}


// New: Detailed answers functionality
function displayDetailedQuestions(filter) {
    resultSummary.style.display = 'none'; // Hide summary
    detailedAnswersContainer.style.display = 'block'; // Show detailed view
    questionsList.innerHTML = ''; // Clear previous list

    let filteredQuestions = [];
    if (filter === 'all') {
        filteredQuestions = questions;
    } else if (filter === 'correct') {
        filteredQuestions = questions.filter(q => q.status === 'correct');
    } else if (filter === 'wrong') {
        filteredQuestions = questions.filter(q => q.status === 'wrong');
    } else if (filter === 'skipped') {
        filteredQuestions = questions.filter(q => q.status === 'skipped');
    }
    
    // Set the title
    if (filter === 'all') {
        detailedAnswersTitle.textContent = 'সকল উত্তর';
    } else if (filter === 'correct') {
        detailedAnswersTitle.textContent = 'সঠিক উত্তর';
    } else if (filter === 'wrong') {
        detailedAnswersTitle.textContent = 'ভুল উত্তর';
    } else if (filter === 'skipped') {
        detailedAnswersTitle.textContent = 'বাদ দেওয়া প্রশ্ন';
    }

    filteredQuestions.forEach(q => {
        const originalQuestionIndex = questions.findIndex(originalQ => originalQ.question === q.question);
        const listItem = document.createElement('li');
        listItem.classList.add('detailed-question-item');

        let statusClass = '';
        let statusText = '';
        if (q.status === 'correct') {
            statusClass = 'status-correct';
            statusText = 'সঠিক';
        } else if (q.status === 'wrong') {
            statusClass = 'status-wrong';
            statusText = 'ভুল';
        } else if (q.status === 'skipped') {
            statusClass = 'status-skipped';
            statusText = 'বাদ দেওয়া হয়েছে';
        }
        // Get original question index
        const questionNumber = originalQuestionIndex + 1; // 1-based index

        let questionHtml = `
            <div class="question-header">
                <span class="question-number">${questionNumber}.</span>
                <span class="question-text">${q.question}</span>
                <span class="status-indicator ${statusClass}">${statusText}</span>
            </div>
            <ul class="detailed-options">
        `;

        q.options.forEach(option => {
            let optionClass = '';
            if (q.userAnswer === option) {
                if (q.status === 'correct') {
                    optionClass = 'selected-correct';
                } else if (q.status === 'wrong') {
                    optionClass = 'selected-wrong';
                }
            }
            if (option === q.answer && q.status !== 'correct') { // Always show correct answer if user was wrong or skipped
                optionClass += ' correct-answer-highlight';
            }
            
            questionHtml += `<li class=\"${optionClass}\">${option}</li>`;
        });

        questionHtml += `</ul>`;
        listItem.innerHTML = questionHtml;
        questionsList.appendChild(listItem);
    });
}


// Function to go back to result summary
function backToSummaryScreen() {
    detailedAnswersContainer.style.display = 'none'; // Hide detailed view
    resultSummary.style.display = 'block'; // Show summary
}
