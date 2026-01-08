const quizData = [
    {
        question: `The Statue of Unity, the world's tallest statue, is located on the banks of which river in India?`,
        options: ["Tapti", "Narmada", "Ganga", "Yamuna"],
        answer: 1,
    },
    {
        question: `Which of these particles is not found inside an atomic nucleus?`,
        options: ["Electrons", "Neutrons", "Protons", "Muons"],
        answer: 0,
    },
    {
        question: `Who was the first President of independent India?`,
        options: ["Lal Bahadur Shastri", "Subhash Chandra Bose", "Jawaharlal Nehru", "Rajendra Prasad"],
        answer: 3,
    },
    {
        question: `The largest city in India by population is?`,
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: 1,
    },
    {
        question: `Which country has won the most FIFA World Cups?`,
        options: ["Brazil", "Italy", "Germany", "Argentina"],
        answer: 0,
    },
    {
        question: `The largest ocean in the world is?`,
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: 0,
    },
    {
        question: `Which country is known as the "Land of the Rising Sun"?`,
        options: ["China", "South Korea", "Japan", "Thailand"],
        answer: 2,
    },
    {
        question: `Who is known as the destroyer in the Hindu trinity (Trimurti)?`,
        options: ["Lakshmi", "Vishnu", "Brahma", "Shiva"],
        answer: 3,
    },
    {
        question: `What does the 'T' stand for in GPT, as in ChatGPT?`,
        options: ["Text", "Transcript", "Transformer", "Terminal"],
        answer: 2,
    },
    {
        question: `Which of these films was India's official entry to the Oscars but did not receive a nomination in the Best Foreign Language Film category?`,
        options: ["Lagaan", "Newton", "Mother India", "Salaam Bombay"],
        answer: 1,
    }, 
    {
        question: `Which Indian scientiest is known as the "Missile Man  Of India"?`,
        options: ["Vikram Sarabhai", "A.P.J. Abdul Kalam", "Homi J. Bhabha", "C.V. Raman"],
        answer: 1,
    },
    {
        question: `Which of these countries is not a member of the G-20?`,
        options: ["United States", "Brazil", "India", "Spain"],
        answer: 3,
    },
    {
        question: `Which country is known as the "Land of the Midnight Sun"?`,
        options: ["Norway", "Sweden", "Finland", "Iceland"],
        answer: 0,
    },
    {
        question: `Which of these is not a programming language?`,
        options: ["Python", "Java", "HTML", "C++"],
        answer: 2,
    },
    {
        question: `Which team won the inaugral IPL (Indian Premier League) in 2008?`,
        options: ["Chennai Super Kings", "Kolkata Knight Riders", "Mumbai Indians", "Rajasthan Royals"],
        answer: 3,
    },
    {
        question: `Which Mughal Emporer built the Red Fort in Delhi?`,
        options: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
        answer: 1,
    },
    {
        question: `Which of these is not a type of music?`,
        options: ["Pop", "Rock", "Ballet", "Classical"],
        answer: 2,
    },
    {
        question: `Which of these is not a type of animal?`,
        options: ["Mammal", "Reptile", "Amphibian", "Fungus"],
        answer: 3,
    },
    {
        question: `Which is India's highest civilian award?`,
        options: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
        answer: 0,
    },
    {
        question: `India's highest-grossing film of all time, Worldwide is?`,
        options: ["Baahubali 2", "Dangal", "RRR", "Pathaan"],
        answer: 1,
    },
    {
        question: `Who is the author of the "Harry Potter" series?`,
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"],
        answer: 3,
    },
    {
        question: `In which year did Chandrayaan-2 launch?`,
        options: ["2018", "2019", "2020", "2021"],
        answer: 1,
    },
    {
        question: `What is the capital of United States?`,
        options: ["New York", "Los Angeles", "Washington, D.C.", "Chicago"],
        answer: 2,
    },
    {
        question: `Which of these is not a planet in our solar system?`,
        options: ["Earth", "Mars", "Venus", "Sun"],
        answer: 3,
    },
    {
        question: `Who composed the national anthem of India?`,
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru"],
        answer: 1,
    },
    {
        question: `Which is the only continent without a desert?`,
        options: ["Europe", "Asia", "South America", "Australia"],
        answer: 0,
    },
    {
        question: `Which of these is a prime number?`,
        options: ["21", "29", "35", "39"],
        answer: 1,
    },
    {
        question: `Which Indian movie won an Oscar for Best Original Song in 2023?`,
        options: ["Gully Boy", "Lagaan", "Slumdog Millionaire", "RRR"],
        answer: 3,
    },
    {
        question: `Which organ in the human body is responsible for pumping blood?`,
        options: ["Lungs", "Brain", "Heart", "Liver"],
        answer: 2,
    },
    {
        question: `Who was the first woman Prime Minister of India?`,
        options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        answer: 0,
    },
    {
        question: `Which Indian state has the longest coastline?`,
        options: ["Kerala", "Maharashtra", "Andhra Pradesh", "Gujarat"],
        answer: 3,
    },
    {
        question: `Which mountain is the highest in India?`,
        options: ["K2", "Kanchenjunga", "Nanda Devi", "Mount Everest"],
        answer: 1,
    },
    {
        question: `Who among these Bollywood actors is known as 'King Khan'?`,
        options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Saif Ali Khan"],
        answer: 2,
    },
    {
        question: `Which Bollywood movie is based on mathematician Anand Kumar?`,
        options: ["Super 30", "3 Idiots", "MS Dhoni", "Chhichhore"],
        answer: 0,
    },
    {
        question: `Which of the following is a not a web browser?`,
        options: ["Google Chrome", "Ubuntu", "Mozilla Firefox", "Microsoft Edge"],
        answer: 1,
    },
    {
        question: `Which gas do plants absorb from the atmosphere?`,
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2,
    },
    {
        question: `What is the planet that is called the Red Planet?`,
        options: ["Earth", "Jupiter", "Venus", "Mars"],
        answer: 3,
    },
    {
        question: `Who invented the light bulb?`,
        options: ["Thomas Edison", "Alexander Graham Bell", "Isaac Newton", "Nikola Tesla"],
        answer: 0,
    },
    {
        question: `Which dance form is associated with Kerala?`,
        options: ["Bharatanatyam", "Kathak", "Kuchipudi", "Kathakali"],
        answer: 3,
    },
    {
        question: `What is the capital of the Union Territory of Ladakh?`,
        options: ["Srinagar", "Leh", "Kargil", "Shimla"],
        answer: 1,
    },
    {
        question: `Which app is owned by Meta (formerly Facebook)?`,
        options: ["Telegram", "Snapchat", "WhatsApp", "X"],
        answer: 2,
    },
    {
        question: `How many players are there in a cricket team (on field)?`,
        options: ["11", "10", "9", "12"],
        answer: 0,
    },
    {
        question: `What is the name of the longest river in the world?`,
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        answer: 2,
    },
    {
        question: `Which Indian city is known as the 'City of Joy'?`,
        options: ["Mumbai", "Kolkata", "Bangalore", "Chennai"],
        answer: 1,
    },
    {
        question: `What is the largest mammal in the world?`,
        options: ["Elephant", "Giraffe", "Blue Whale", "Jaguar"],
        answer: 2,
    },
    {
        question: `Which chemical element has the atomic number 1?`,
        options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
        answer: 3,
    },
    {
        question: `Who is the author of the book "Hamlet"?`,
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1,
    },
    {
        question: `Which country is known for inventing pizza?`,
        options: ["France", "Italy", "Greece", "Spain"],
        answer: 1,
    },    
    {
        question: `What is the capital of Uttarakhand?`,
        options: ["Dehradun", "Haridwar", "Nainital", "Mussoorie"],
        answer: 0,
    },
    {
        question: `Which Indian festival is known as the 'Festival of Lights'?`,
        options: ["Holi", "Eid", "Diwali", "Christmas"],
        answer: 2,
    },
    {
        question: `Who in the Indian cricket team is known as the 'Jumbo'?`,
        options: ["Sachin Tendulkar", "Rahul Dravid", "Virendra Sehwag", "Anil Kumble"],
        answer: 3,
    },
    {
        question: `In computing, what does 'URL' stand for?`,
        options: ["Universal Resource Link", "Uniform Resource Locator", "Unified Reference Link", "User Retrieval Location"],
        answer: 1,
    },
    {
        question: `Which Indian state is known as the 'Land of Five Rivers'?`,
        options: ["Punjab", "Haryana", "Bihar", "Uttar Pradesh"],
        answer: 0,
    },
    {
        question: `Which Indian city is known as the 'Silicon Valley of India'?`,
        options: ["Hyderabad", "Chennai", "Bangalore", "Pune"],
        answer: 2,
    },
    {
        question: `Who is the founder of Microsoft?`,
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        answer: 1,
    },
]
const selectedQuestions = quizData.sort(() => Math.random() - 0.5).slice(0, 10); 
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const submit = document.getElementById("submit");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const optionspace = document.getElementById("options");
const startscreen = document.querySelectorAll(".start-screen");
const container = document.querySelector(".container");
const startbutton = document.getElementById("start-button");
const click = new Audio("click.mp3");
const bgsound = new Audio("bgsoundeffect.mp3");
const timerclock = new Audio("timerclock.mp3");
const correct = new Audio("correct.mp3");
const wrong = new Audio("wrong.mp3");
let timer;
let timeleft = 30;
let timerDisplay = document.getElementById("timer");

let questionCount = 0;
let score = 0;
startbutton.addEventListener("click", () => {
    startscreen[0].style.display = "none";
    container.style.display = "block";
    click.play();
    loadQuestion();
})
function startTimer() {
    timer = setInterval(function () {
        timeleft--;
        timerDisplay.innerHTML = timeleft;
        if (timeleft <= 0) {
            clearInterval(timer);
            handleTimer();
        }
    }, 1000);
    timerclock.play();
}
function handleTimer() {
    question.innerHTML += `
  <br><span style="display: block; margin-top: 10px; color: red; font-weight: bold; font-size: 1.2em; text-align: center;">
    ⏰ Time's up!
  </span>`;
    options[selectedQuestions[questionCount].answer].style.backgroundColor = "green";
    setTimeout(function () {
        questionCount++;
        if(questionCount < selectedQuestions.length){
            loadQuestion();
        }
        else{
            finalscore();
        }
    },3000);
}
function speak(text){
    window.speechSynthesis.cancel(); 
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-USA";
    speech.volume = 1;
    speech.rate = 1.1;
    speech.pitch = 4;
    window.speechSynthesis.speak(speech);
}
const loadQuestion = () => {
    correct.pause();
    correct.currentTime = 0;
    wrong.pause();
    wrong.currentTime = 0;
    timerclock.pause();
    timerclock.currentTime = 0;
    const questionList = selectedQuestions[questionCount];
    question.innerHTML = questionList.question;
    options.forEach((option, index) => {
        option.innerHTML = questionList.options[index];
        option.classList.remove("selected");
        option.style.backgroundColor = "";
    });

    timeleft = 30;
    timerDisplay.innerHTML = timeleft;
    clearInterval(timer);
    bgsound.currentTime = 0;
    bgsound.play();
    setTimeout(function(){
        startTimer();
        timerclock.pause();
        timerclock.currentTime = 0;
        timerclock.play();
    }, 6000);
    setTimeout(function(){
    bgsound.pause();
    const speakText = `${questionList.question}. Options are: ${questionList.options.join(", ")}.`;
    speak(speakText);
    }, 3000);
};
const getSelectedOption = () => {
    return Array.from(options).findIndex((opt) => opt.classList.contains("selected"));
};

options.forEach((option) => {
    option.addEventListener("click", (e) => {
        click.play();
        clearInterval(timer);
        timerclock.pause();
        const speakText = `Do you want to lock this answer?`;
        speak(speakText);
        const confirmlock = confirm("Do you want to lock this answer?");
        if (!confirmlock) {
            startTimer();
            return;
        }
        options.forEach((opt) => {
            opt.classList.remove("selected")
            opt.style.backgroundColor = "";
        });
        e.currentTarget.classList.add("selected");
        const selectedOption = getSelectedOption();
        if (selectedOption === selectedQuestions[questionCount].answer) {
            score++;
            options[selectedOption].style.backgroundColor = "yellow";
            setTimeout(function(){
                options[selectedOption].style.backgroundColor = "green";
                correct.play();
                clearInterval(timer);
                timerclock.pause();
            }, 2000);
        }
        else{
            options[selectedOption].style.backgroundColor = "yellow";
            setTimeout(function(){
                options[selectedOption].style.backgroundColor = "red";
                wrong.play();
                clearInterval(timer);
                timerclock.pause();
                options[selectedQuestions[questionCount].answer].style.backgroundColor = "green";
            }, 1500);
        }
        setTimeout(function(){
            questionCount++;
        if (questionCount < selectedQuestions.length) {
            loadQuestion();
        } else {
            options.forEach((option) => {
                option.classList.remove("selected");
                finalscore();
        });
        }}, 6000);
    });
});
function playagain(){
        click.play();
        setInterval(function(){
            location.reload();
        }, 500);
        
}
function finalscore(){
    clearInterval(timer);
    document.getElementById("time").style.display = "none";
    question.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!🎉`;
    question.style.textAlign="center";
    options.forEach((opt) => {
        opt.innerHTML = "";
        opt.style.backgroundColor = "";
    });

    optionspace.innerHTML = 
    `
    <div style="text-align: center;
            margin-top: 2rem;">
        <div style="text-align: center; font-size: 1.2rem; margin-bottom: 1rem;">
            That was awesome! Hope you enjoyed the quiz 😊
        </div>
        <img style="width: 300px; max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); margin-bottom: 1rem;" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhhbnFzazZ1ZDQ4Y3hvaGVkcWluZG03ajJld2oxc2plMHB1dWZyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vmGjjH1XOjViEfbBfZ/giphy.gif" alt="gif">
            <button 
            onclick="playagain();"
            style= "margin: 0.5rem 11rem;
                    padding: 0.4rem 4.5rem;
                    border-radius: 1.1rem;
                    background-color: #6532ac;
                    color: #ffffff;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);">
            ▶️Play Again
        </button>
    </div>`; 
}



