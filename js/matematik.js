const quizData = [
    {
        question: "",
        a: "",
        b: "Y",
        c: "",
        d: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "d",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "b",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "c",
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${score}/${quizData.length} soruyu doğru cevapladın</h2>
            
            <button id="back" onclick="window.location.href = 'test.html';">Geri Dön</button>
            `
        }
    }
})