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
var number = 30;

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
    $("#timer").text("00:00");
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
var randomPlacement = Math.floor(Math.random() * 4) + 1;

//To start the game we need an on-click function that will populate in the first question/answers into the correct divs 
//Additionally we will need to start the timer 

$("#start-game").on("click", function() {
    console.log("Hello!");
    
    $("#answer-1").text(randomAnswer[randomAnswerOne + randomQuestion]);
    $("#answer-2").text(randomAnswer[randomAnswerTwo + randomQuestion]);
    $("#answer-3").text(randomAnswer[randomAnswerThree + randomQuestion]);
    $("#answer-4").text(randomAnswer[randomAnswerFour + randomQuestion]);
    $("#question-div").html(questions[randomQuestion]);
    $("#answer-" + randomPlacement).text(correctAnswer[randomQuestion]);

//console.log to make sure everything is getting placed/generated correctly 

    console.log(randomQuestion);
    console.log(randomAnswerOne);
    console.log(randomAnswerTwo);
    console.log(randomAnswerThree);
    console.log(randomAnswerFour);
    console.log(randomPlacement);
    console.log("answer-" + randomPlacement);

    console.log(questions[randomQuestion]);
    console.log(correctAnswer[randomQuestion]);

    console.log(randomAnswer[randomAnswerOne]);
    console.log(randomAnswer[randomAnswerTwo]);
    console.log(randomAnswer[randomAnswerThree]);
    console.log(randomAnswer[randomAnswerFour]);  
    
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }

            if (timer === 0){
                alert("Times Up!")
            }
        }, 1000);
    }
        var twoMinutes = 60 / 4,
            display = document.querySelector('#timer');
        startTimer(twoMinutes, display);

});


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
