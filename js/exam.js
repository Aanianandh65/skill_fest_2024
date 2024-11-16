document.addEventListener("DOMContentLoaded", function () {
    shuffleQuestions(); // Shuffle questions before starting the exam
    loadQuestion(); // Ensure the script runs after the DOM is fully loaded
    startTimer(); // Optionally, start the timer here
});

const questions = [
    {
        text: "Who was the first Chief Minister of Kerala?",
        options: ["Pattom A Thanu Pillai", "A. K. Antony", "E. M. S. Namboodiripad", "C. Achutha Menon"],
        answer: 3 // Index of the correct answer
    },
    {
        text: "Which is the longest river in India?",
        options: ["Yamuna", "Brahmaputra", "Ganga", "Godavari"],
        answer: 3
    },
    {
        text: "Who is known as the 'Iron Man of India'?",
        options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        answer: 2
    },
    {
        text: "Who was the first woman to become the Prime Minister of India?",
        options: ["Sonia Gandhi", "Indira Gandhi", "Sarojini Naidu", "Pratibha Patil"],
        answer: 2
    },{
        text: "Kerala was formed as a state on which date?",
        options: ["November 1, 1956", "November 1, 1947", "November 1, 1960", "November 1, 1970"],
        answer: 1
    },{
        text: "When was the Kerala Legislative Assembly (Niyamasabha) first constituted?",
        options: ["1947", "1956", "1960", "1970"],
        answer: 2
    },{
        text: "How many members are there in the Kerala Legislative Assembly?",
        options: ["180", "160", "145", "140"],
        answer: 4
    },{
        text: "What is the minimum age required to become a member of the Kerala Legislative Assembly?",
        options: ["18 Years", "25 Years", "30Years", "32 Years"],
        answer: 2
    },{
        text: "Who is known as the 'Father of Malayalam Literature'?",
        options: ["Kumaran Asan", "Thunchath Ezhuthachan", "V. P. Menon", "K. Madhavan Nair"],
        answer: 2
    },{
        text: "What is the state bird of Kerala?",
        options: ["Indian Peafowl", "House Sparrow", "Great Indian Hornbill", "Common Myna"],
        answer: 3
    },{
        text: "What is the official state flower of Kerala?",
        options: ["Lotus", "Hibiscus", "Jasmine", "Golden Shower Tree"],
        answer: 4
    },{
        text: "What is the state animal of Kerala?",
        options: ["Cow", "Asian Elephant", "Lion", "Tiger"],
        answer: 2
    },{
        text: "Who is known as the 'Little Master' in cricket?",
        options: ["Sachin Tendulkar", "Brian Lara", "Sunil Gavaskar", "Ricky Ponting"],
        answer: 3
    },{
        text: "Who is the highest run-scorer in One Day Internationals (ODIs)?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma", "Ricky Ponting"],
        answer: 2
    },{
        text: "Who was the captain of the Indian cricket team when they won the 1983 Cricket?",
        options: ["Kapil Dev", "Sunil Gavaskar", "Sachin Tendulkar", "Sourav Ganguly"],
        answer: 1
    },{
        text: "Which Indian athlete won a gold medal in javelin at the Tokyo 2020 Olympics?",
        options: ["Anju Bobby George", "Vikas Gowda", "Milkha Singh", "Neeraj Chopra"],
        answer: 4
    },{
        text: "Who is the first Indian woman to win a Grand Slam title in tennis?",
        options: ["Leander Paes", "Rohan Bopanna", "Sania Mirza", "Mahesh Bhupathi"],
        answer: 3
    },{
        text: "Who has won the most Ballon d'Or awards as of 2023?",
        options: ["Cristiano Ronaldo", "Michel Platini", "Lionel Messi", " Johan Cruyff"],
        answer: 3
    },{
        text: "Which club has won the most Premier League titles as of 2023?",
        options: ["Arsenal", "Manchester United", "Chelsea", "Liverpool"],
        answer: 2
    },{
        text: "Which Indian footballer is known as the 'Captain Fantastic' of the Indian national team?",
        options: ["Sunil Chhetri", "Gurpreet Singh Sandhu", "Bhaichung Bhutia", "Sandesh Jhingan"],
        answer: 1
    },{
        text: "Who is known as the 'King of Football'?",
        options: ["Pele", "Ronaldinho", "Diego Maradona", "Cristiano Ronaldo"],
        answer: 1
    },{
        text: "What was the primary objective of the Chandrayaan-3 mission launched by ISRO?",
        options: [" Study the Sun’s outer atmosphere", "Mars surface exploration", "Lunar south pole landing", "Comet sample return"],
        answer: 3
    },{
        text: "What does '5G' in telecommunications stand for?",
        options: ["Fifth Grade", "Fifth Generation", "Five Gigabytes", " Fast Global Network"],
        answer: 2
    },{
        text: "Bluetooth technology is primarily used for what type of communication?",
        options: ["Long-range wireless communication", "Internet-based communication", " Short-range wireless communication", "All the Above"],
        answer: 3
    },{
        text: "What does 'CPU' stand for in computer terminology?",
        options: ["Central Processing Unit", "Control Program Unit", "Computer Processing Unit", "Central Power Unit"],
        answer: 1
    },{
        text: "What does 'URL' stand for?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Registry Link", "Uniform Registration Locator"],
        answer: 2
    },{
        text: "What does 'IP' stand for in 'IP address'?",
        options: ["Internet Protocol", "Internal Protocol", " Intranet Protocol", "Interconnected Protocol"],
        answer: 1
    },{
        text: "What does  'HTML' stand for?",
        options: ["Hyperlink Text Management Language", "Hyper Text Markdown Language", "Hyper Text Markup Language", "Hyperlink and Text Markup Language"],
        answer: 3
    },{
        text: "Which of the following is not a programming language?",
        options: ["Python", "JavaScript", "HTML", "Django"],
        answer: 4
    },{
        text: "Which of the following is an example of a search engine?",
        options: ["Google", "Microsoft Word", "WhatsApp", "Linux"],
        answer: 1
    },{
        text: "What does 'RAM' stand for in computer hardware?",
        options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Random Allocation Memory"],
        answer: 3
    },{
        text: "Choose the correct form of the verb: ' She ____ to the market every day.'",
        options: ["go", "goes", "going", "gone"],
        answer: 2
    },{
        text: "Which article correctly completes the sentence? '___ apple a day keeps the doctor away ' ",
        options: ["A", "An", "The", "No article"],
        answer: 2
    },{
        text: "Choose the passive form of 'The teacher explains the lesson.' ",
        options: ["The lesson explains the teacher.", "The lesson explained the teacher.", "The teacher is explaining the lesson.", "The lesson is explained by the teacher."],
        answer: 4
    },{
        text: "Convert the following to indirect speech: 'He said, 'I am going to the market.' ' ",
        options: ["He said that I am going to the market.", "He said he will go to the market.", "He said that he was going to the market.", " He said that he had gone to the market."],
        answer: 3
    },{
        text: "Choose the correct conditional form: 'If it ____ tomorrow, we will cancel the picnic.'Choose the correct conditional form: 'If it ____ tomorrow, we will cancel the picnic.' ",
        options: ["rain", "rains", "rained", "raining"],
        answer: 2
    },{
        text: " Which of the following is a subject pronoun?",
        options: ["Her", "Him", "They", "Them"],
        answer: 3
    },{
        text: "Which of these is an interrogative sentence?",
        options: ["She is happy.", "Are you coming to the party?", " He likes chocolate.", "They are playing football."],
        answer: 2
    },{
        text: "Choose the correct form: 'I enjoy ____ to music.' ",
        options: ["listen", "listened", "to listen", " listening"],
        answer: 4
    },{
        text: "Find the next number in the sequence: 3, 8, 15, 24, ___?",
        options: ["31", "35", "39", "42"],
        answer: 2
    },{
        text: "What is 25% of 240?",
        options: ["60", "55", "70", "65"],
        answer: 1
    },{
        text: "If the ratio of boys to girls in a class is 3:4 and there are 24 girls, how many boys are there?",
        options: ["26", "16", "22", "18"],
        answer: 4
    },{
        text: "If it takes 5 hours for 3 workers to paint a house, how long would it take for 6 workers to paint the same house?",
        options: ["2 Hr 30 Minutes", "2 Hr 45 Minutes", "2 Hr 15 Minutes", "1 Hr 45 Minutes"],
        answer:1 
    },{
        text: "What is the simple interest on a sum of ?2,000 at a rate of 5% per annum for 3 years?",
        options: ["200", "300", "250", "350"],
        answer: 2
    },{
        text: "The average of 5, 10, 15, and 20 is:",
        options: ["10", "12", "15", "20"],
        answer: 2
    },{
        text: "Find the LCM of 12 and 18.",
        options: ["72", "54", "36", "48"],
        answer: 3
    },{
        text: "If 2x+3=9, What is the value of 3x-2?",
        options: ["7", "4", "6", "8"],
        answer: 3
    },{
        text: "What is the least number that should be added to 1500 to make it a perfect square?",
        options: ["15", "16", "25", "21"],
        answer: 4
    },{
        text: "The length of a rectangle is twice its breadth. If the perimeter is 60 meters, what is the area of the rectangle?",
        options: ["100 sq. meters", "150 sq. meters", "180 sq. meters", "200 sq. meters"],
        answer: 2
    },{
        text: "A shirt is marked at ?1,200 and sold at a discount of 10%. What is the selling price?",
        options: ["1080", "1090", "1100", "1020"],
        answer: 1
    }
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30 * 60; // 30 minutes in seconds

const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const optionsForm = document.getElementById("options-form");
const progressBar = document.getElementById("progress-bar");
const timerElement = document.getElementById("timer");

// Shuffle the questions array
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Load the current question with a fade transition
function loadQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = `Question ${currentQuestion + 1}:`;
    questionText.textContent = question.text;

    // Clear and add options with alphabetical labels
    optionsForm.innerHTML = "";
    const labels = ["A", "B", "C", "D"]; // Labels for the options
    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${index}">
            ${labels[index]}. ${option}
        `;
        optionsForm.appendChild(label);
    });

    // Apply fade-in effect to the question container
    document.getElementById("question-container").classList.remove("fade-out");
    document.getElementById("question-container").classList.add("fade-in");
}

// Handle the next button click with fade transition
document.getElementById("next-btn").addEventListener("click", function () {
    const selectedOption = optionsForm.querySelector("input[name='option']:checked");
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestion].answer) {
        score += 2; // Add 2 points for the correct answer
    }

    currentQuestion++;
    updateProgress();

    if (currentQuestion < questions.length) {
        // Apply fade-out effect before loading the next question
        document.getElementById("question-container").classList.add("fade-out");

        // Wait for the fade-out animation to complete before loading the next question
        setTimeout(function () {
            loadQuestion();
        }, 1000); // Timeout should match the duration of the fade-out transition
    } else {
        finishExam();
    }
});

// Update the progress bar
function updateProgress() {
    const progress = ((currentQuestion / questions.length) * 100).toFixed(2);
    progressBar.style.width = `${progress}%`;
}

// Timer function (it’s only started once when the exam starts)
function startTimer() {
    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(interval); // Stop the timer when time runs out
            finishExam();
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
    }, 1000);
}

// Finish the exam
function finishExam() {
    // Store the student's score and username in sessionStorage for admin purposes
    const username = sessionStorage.getItem("currentStudent"); // Assuming the username was set during login
    const studentScore = { username: username, score: score };

    // Retrieve existing scores from localStorage
    const existingScores = JSON.parse(localStorage.getItem("studentScores")) || [];
    existingScores.push(studentScore);

    // Save updated scores back to localStorage
    localStorage.setItem("studentScores", JSON.stringify(existingScores));

    // Redirect to the thank-you page
    window.location.href = "thankyou.html";
}
