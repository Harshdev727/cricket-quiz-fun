var readLineSync = require("readline-sync");
var score = 0;

var username = readLineSync.question("Hey, What's your name: ");
console.log("Welcome "+username+"\n"+"Let's Start Cricket Quiz");

var questionOne={
  question:"Which is first Indian cricket tournament? ",
  option1:"a. Bombay Series",
  option2:"b. epsi Cup",
  option3:"c. Bobay Triangular",
  answer:"c"
}

var questionTwo={
  question:"For how many days is a Test match scheduled? ",
  option1:"a. five days",
  option2:"b. one day",
  option3:"c. 50 overs",
  answer:"a"
}

var questionThree={
  question:"In which year were the first laws of cricket believed to have been written? ",
  option1:"a. 1882",
  option2:"b. 1774",
  option3:"c. 1709",
  answer:"b"
}

var questionFour={
  question:"Which two countries played the first T20 International game? ",
  option1:"a. India and South Africa (men)",
  option2:"b. England and New Zealand (women)",
  option3:"c. Australia and England (women)",
  answer:"b"
}

var questionFive={
  question:"Who scored the first T20 International century? ",
  option1:"a. Chris Gayle",
  option2:"b. Suresh Raina",
  option3:"c. Brendon McCullum",
  answer:"a"
}

var questionSix={
  question:"Who was the first Indian to win a T20 International Man of the Match award? ",
  option1:"a. Dinesh Karthik",
  option2:"b. Rohit Sharma",
  option3:"c. Yuvraj Singh",
  answer:"a"
}

var questionSeven={
  question:"Which country won the first T20 World Cup? ",
  option1:"a. Australia",
  option2:"b. New Zealand",
  option3:"c. India",
  answer:"c"
}

var highScores = [
  {
    user:"Harsh",
    score:5
  },
  {
    user:"Ravi",
    score:6
  }
]

var cricketQuiz = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven];

function play(question,option1,option2,option3,answer){

  console.log(question+"\n"+option1+"\n"+option2+"\n"+option3);

  useranswer = readLineSync.question();

  if(useranswer.toUpperCase() === answer.toUpperCase()){

    console.log("You Are Right!");
    score = score+1;
  }
  else{
    console.log("You Are Wrong!");
  }

  console.log("Your current score: ",score);

}

for(var i=0;i<cricketQuiz.length;i++){

  play(cricketQuiz[i].question,cricketQuiz[i].option1,cricketQuiz[i].option2,cricketQuiz[i].option3,cricketQuiz[i].answer);

}

console.log("Your final score is: ",score+"/"+cricketQuiz.length);

console.log("high Scorers in Quiz!");

for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].user+" : "+highScores[i].score);
}

function highScorer(){
  if(highScores[1].score < score ) {
    console.log("congratulations you beaten the highest score of "+ highScores[1].user+" kindly share your screenshot then i will update it");
  }
  else if(highScores[0].score < score){
    console.log("congratulations you beaten the highest score of "+ highScores[0].user+" kindly share your screenshot then i will update it");
  }
  else{
    console.log("Your score very low! try again");
  }
}

highScorer();