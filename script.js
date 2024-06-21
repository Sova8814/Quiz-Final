const questions = [
    {
        flag: 'https://i.imgur.com/jmlQOPX.png',
        answers: [
            { text: 'Latvia', correct: true },
            { text: 'Lithuania', correct: false },
            { text: 'Estonia', correct: false },
            { text: 'Austria', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/qQQ4sYW.png',
        answers: [
            { text: 'Canada', correct: false },
            { text: 'USA', correct: true },
            { text: 'Liberia', correct: false },
            { text: 'Germany', correct: false }
        ]
    },
   {
        flag: 'https://i.imgur.com/KL1aO84.png',
        answers: [
            { text: 'Denmark', correct: false },
            { text: 'Belgium', correct: false },
            { text: 'France', correct: false },
            { text: 'Germany', correct: true }
        ]
    },
    {
        flag: 'https://i.imgur.com/ykRoWHp.png',
        answers: [
            { text: 'USA', correct: false },
            { text: 'Canada', correct: true },
            { text: 'Lebanon', correct: false },
            { text: 'Mexico', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/lEOeAbe.png',
        answers: [
            { text: 'Canada', correct: false },
            { text: 'Austria', correct: false },
            { text: 'Switzerland', correct: true },
            { text: 'Germany', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/VSpjE5k.png',
        answers: [
            { text: 'Palestine', correct: false },
            { text: 'Israel', correct: true },
            { text: 'Syria', correct: false },
            { text: 'Iraq', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/YSOBbjS.png',
        answers: [
            { text: 'Austria', correct: true },
            { text: 'Germany', correct: false },
            { text: 'Latvia', correct: false },
            { text: 'Australia', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/sFrfE3I.png',
        answers: [
            { text: 'Austria', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Germany', correct: false },
            { text: 'United Kingdom', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/ODbW3i4.png',
        answers: [
            { text: 'Kosovo', correct: false },
            { text: 'Serbia', correct: false },
            { text: 'Albania', correct: true },
            { text: 'Montenegro', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/hDSPPcO.png',
        answers: [
            { text: 'Kazakhstan', correct: false },
            { text: 'Kyrgyzstan', correct: false },
            { text: 'Azerbaijan', correct: true },
            { text: 'China', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/r8xoxs7.png',
        answers: [
            { text: 'Egypt', correct: false },
            { text: 'Morocco', correct: false },
            { text: 'Libya', correct: false },
            { text: 'Algeria', correct: true }
        ]
    },
    {
        flag: 'https://i.imgur.com/B6P4MnQ.png',
        answers: [
            { text: 'Cote divoire', correct: true },
            { text: 'Ireland', correct: false },
            { text: 'United Kingdom', correct: false },
            { text: 'Russia', correct: false }
        ]
    },
     {
        flag: 'https://i.imgur.com/LkZBy3m.png',
        answers: [
            { text: 'Syria', correct: false },
            { text: 'Afghanistan', correct: true },
            { text: 'Iran', correct: false },
            { text: 'Iraq', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/K4sEKoT.png',
        answers: [
            { text: 'Antigua and Barbuda', correct: true },
            { text: 'Palau', correct: false },
            { text: 'New Zealand', correct: false },
            { text: 'Kiribati', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/OS2bpzC.png',
        answers: [
            { text: 'Bangladesh', correct: true },
            { text: 'Laos', correct: false },
            { text: 'Vietnam', correct: false },
            { text: 'Thailand', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/duxrzPl.png',
        answers: [
            { text: 'New Caledonia', correct: false },
            { text: 'Papua New Guinea', correct: false },
            { text: 'Kiribati', correct: false },
            { text: 'Guam', correct: true }
        ]
    },
    {
        flag: 'https://i.imgur.com/bfE1m8k.png',
        answers: [
            { text: 'Italy', correct: false },
            { text: 'Spain', correct: true },
            { text: 'France', correct: false },
            { text: 'Montenegro', correct: false }
        ]
    },
    {
        flag: 'https://i.imgur.com/kRtFKGD.png',
        answers: [
            { text: 'Solomon Islands', correct: false },
            { text: 'Guam', correct: false },
            { text: 'Palau', correct: true },
            { text: 'Indonesia', correct: false }
        ]
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

const flagImage = document.getElementById('flag-image');
const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.innerText = '';
    restartButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    flagImage.src = question.flag;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    resultElement.innerText = `Your score: ${score} out of ${questions.length}`;
    restartButton.classList.remove('hide');
}

restartButton.addEventListener('click', startGame);

startGame();
