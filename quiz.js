const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "What does XML stand for?\n",
        options: ["A: Extended Markup Language", "B: Extensible Markup Language", "C: Extensible Mobile Language", "D: None of these"],
        answer: "B"
    },
    {
        question: "Which language or framework make mobile app front end?\n",
        options: ["A: Java", "B:React native", "C: Python", "D: JavaScript"],
        answer: "D"
    },
    {
        question: "What is the capital city of Rwanda\n",
        options: ["A:Kigali", "B: Musanze", "C: Nyarugenge", "D: None of these"],
        answer: "A"
    }
];

let currentQuestion = 0;
let score = 0;

const askQuestion = (index) => {
    const questionObj = questions[index];
    console.log(questionObj.question);
    questionObj.options.forEach(option => {
        console.log(option);
    });

    rl.question('Your answer (A, B, C, D): ', (userInput) => {
        if (userInput.toUpperCase() === questionObj.answer) {
            score++;
            console.log("Correct!\n");
        } else {
            console.log(`Wrong! The correct answer is ${questionObj.answer}\n`);
        }

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            askQuestion(currentQuestion);
        } else {
            console.log(`Quiz completed! Your final score is: ${score}/${questions.length}`);
            rl.close();
        }
    });
};

console.log("Welcome to the Quiz!");
askQuestion(currentQuestion);
