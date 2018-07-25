//First, build out the list of variable questions that will be asked, they should have the same location in each array (question & answers)
//One of the arrays should have the answer 

var questions = [
        "Who's favorite dinosaur is the Megalodon?",
        "Who rides an eletric skateboard to work?",
        "Who plays in a band called 'Oh Adeona'?",
        "Who was the fastest high school sprinter in the US for several years?",
        "Who worked on the show 'My Cat From Hell'?",
        "Who owns an Insta-famous pet?",
        "Who has their own recorded rap song?",
        "Who is learning how to skateboard?",
        "Who is a part-time comedian?",
        "Who LOVES coffee?",
        "Who recently hosted a webinar focused on how to build a blockchain?",
        "Who is the office pun master?"
    ];

var correctAnswer = [
        "Kathy",
        "Jesusmar",
        "Nick",
        "Bryant",
        "Josh B",
        "Huy",
        "Joe",
        "Walker",
        "Julius",
        "Mark",
        "Christina",
        "Paul"
    ];

var correctImage = [
        ".\assets\images\Kathy.jpg",
        ".\assets\images\Jesusmar.jpg",
        ".\assets\images\Nick.jpg",
        ".\assets\images\Bryant.jpg",
        ".\assets\images\JoshB (2).jpg",
        ".\assets\images\Huy.jpg",
        ".\assets\images\Joe (2).jpg",
        ".\assets\images\Walker.jpg",
        ".\assets\images\Julius.jpg",
        ".\assets\images\Walker.jpg",
        ".\assets\images\Mark (2).jpg",
        ".\assets\images\Christina.jpg",
        ".\assets\images\Paul (2).jpg"
];

var randomAnswer = [
        "Joe",
        "Bryant",
        "Merziyah",
        "Julia",
        "Kathy",
        "Julius",
        "Huy",
        "Yang",
        "Ben",
        "Jeff",
        "Christina",
        "Josh B",
        "Paul",
        "Mark",
        "Keith",
        "Eric",
        "Yisselda",
        "Jack",
        "Josh H",
        "Nichole",
        "Tom",
        "Nick",
        "Jesusmar",
        "Vishal",
        "Randy"
    ];

var randomPlacement = [
    2,
    4,
    3,
    1,
    3,
    4,
    1,
    4,
    4,
    3,
    1,
    1,
    2
]

//We will need to set up variables for correct, incorrect, unanswered, and number of questions asked 

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var questionsAsked = 0;
var question = "";
var answerOne = "";
var answerTwo = "";
var answerThree = "";
var answerFour = "";
var countStartNumber = 15;
var timer;

//We will need a reset function that can run before a new question is asked (after on-click event)

var clearAnswers = function(){
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    questionsAsked = 0;
    question = "";
    answerOne = "";
    answerTwo = "";
    answerThree = "";   
    answerFour = "";
    countStartNumber = 15;
    $("#timer").html("15 seconds");
    $("#end-game-stats").html("");
    $("#answer-1").text("");
    $("#answer-2").text("");
    $("#answer-3").text("");
    $("#answer-4").text("");
    $("#question-div").html("");

}

clearAnswers();

//Next we need to generate random numbers that can be used to randomize the placement of the question/answer selected
//and the placement of the correct answer 

var randomQuestion = Math.floor(Math.random() * 9);
var randomAnswerOne = Math.floor(Math.random() * 13);
var randomAnswerTwo = Math.floor(Math.random() * 13);
var randomAnswerThree = Math.floor(Math.random() * 13);
var randomAnswerFour = Math.floor(Math.random() * 13);

//To start the game we need an on-click function that will populate in the first question/answers into the correct divs 
//Additionally we will need to start the timer 

var newQuestion = function() {
    questionsAsked++;
    console.log(questionsAsked);

    var randomQuestion = Math.floor(Math.random() * 9);
    var randomAnswerOne = Math.floor(Math.random() * 13);
    var randomAnswerTwo = Math.floor(Math.random() * 13);
    var randomAnswerThree = Math.floor(Math.random() * 13);
    var randomAnswerFour = Math.floor(Math.random() * 13);

    
    $("#answer-1").text(randomAnswer[randomAnswerOne + randomQuestion]);
    $("#answer-2").text(randomAnswer[randomAnswerTwo + randomQuestion]);
    $("#answer-3").text(randomAnswer[randomAnswerThree + randomQuestion]);
    $("#answer-4").text(randomAnswer[randomAnswerFour + randomQuestion]);
    $("#question-div").html(questions[randomQuestion]);
    $("#answer-" + randomPlacement[questionsAsked]).text(correctAnswer[randomQuestion]);

//console.log to make sure everything is getting placed/generated correctly 

    console.log(randomQuestion);
    console.log(randomAnswerOne);
    console.log(randomAnswerTwo);
    console.log(randomAnswerThree);
    console.log(randomAnswerFour);
    console.log(questionsAsked);
    console.log("#answer-" + randomPlacement[questionsAsked]);

    console.log(questions[randomQuestion]);
    console.log(correctAnswer[randomQuestion]);

    console.log(randomAnswer[randomAnswerOne]);
    console.log(randomAnswer[randomAnswerTwo]);
    console.log(randomAnswer[randomAnswerThree]);
    console.log(randomAnswer[randomAnswerFour]);  

};

var timesUp = function() {
    clearInterval(timer);
    questionTimer.counter = 16;
    questionTimer.countdown(); 
    timer = setInterval(questionTimer.countdown, 1000);
    console.log("Times Up");
    unanswered++;
    newQuestion();
}

var questionTimer = {

    counter: countStartNumber,
    
    countdown: function(){
    questionTimer.counter--;
    $("#timer").text(questionTimer.counter + " seconds left");
        if (questionTimer.counter === 0) {
        console.log("Times Up!");
        timesUp();
        }
    },
}

var answeredCorrectly = function(){
    questionTimer.countdown(); 
    timer = setInterval(questionTimer.countdown, 1000);
    newQuestion();
}


$("#start-game").on("click", function(){
    clearAnswers();
    clearInterval(timer);
    questionTimer.counter = 16;
    questionTimer.countdown(); 
    timer = setInterval(questionTimer.countdown, 1000);
    newQuestion();
});


$(".user-selection-1").on("click", function(){
        if (randomPlacement[questionsAsked]===1) {
            correctAnswerSelected();
        }
        else {
            alert("Incorrect!");
            correctAnswerSelected();
        }
});

$(".user-selection-2").on("click", function(){
        if (randomPlacement[questionsAsked]===2) {
            correctAnswerSelected();
        }
        else {
            alert("Incorrect!");
        }
});

$(".user-selection-3").on("click", function(){
        if (randomPlacement[questionsAsked]===3) {
            correctAnswerSelected();
        }
        else {
            alert("Incorrect!");
        }
});

$(".user-selection-4").on("click", function(){
        if (randomPlacement[questionsAsked]===4) {
            correctAnswerSelected();
        }
        else {
            incorrectAnswerSelected();
        }
});

$("#end-game").on("click", function(){
    questionTimer.timesUp();
    clearAnswers();
});

//Create a function that will run to show the next question 

var correctAnswerSelected = function(){
    if (questionsAsked <= 5) {
    clearInterval(timer);
    questionTimer.counter = 16;
    questionTimer.countdown(); 
    timer = setInterval(questionTimer.countdown, 1000);
    console.log("Correct!");
    correct++;
    console.log(correct);
    newQuestion();
    }
    else {
    $("#headline-text").html("<h1>Game Over</h1>");
    $("#end-game-stats").html("<div id='results'> Correct: " + correct + " </div><br><div id='results'> Inccorrect: " + incorrect + " </div><br><div id='results'> Unanswered: " + unanswered + "</div>");
    questionTimer.timesUp();
    }

}

var incorrectAnswerSelected = function(){
    console.log("Incorrect!");
    incorrect++;
    newQuestion();

}
//Next we will want to randomly populate content into the into the question div 

//Then we will want to randomly populate the answer into an answer div and fill in the remaining answer divs with random Answers 

//We will need an on-click event for each of the buttons 
//When the user clicks on any of the buttons the following logic will run: 
//...is the answer the correct answer, if yes add a point to wins and move to next question, if no add a point to losses and move to next question
//If the answer is correct have a time-out event that will show the image of the correct answer before moving onto the next question
//If the user clicks on "End Game" it will take them to the final screen 
//If the user clicks on "Start Game" it will clear wins and losses and start the game count again 
//After 5 randomly selected trivia questions are asked the program should fill in wins and losses 
//The program will display the final stats for "Unanswered", "Correct", "Incorrect"
