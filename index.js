var readlinesync = require("readline-sync");

var score =0; 

console.log("\nKAUSHIK'S BACHELORS PARTY!\n\n");

var userName = readlinesync.question("Please enter your name\n\n")

console.log("\nHi "+userName.toUpperCase()+", \n\nThis is a fun test to check if you are eligible for Kaushik's bachelor party. Please answer by typing in the first 3 characters/alphabet in lowercase ONLY.\nFor Eg: If the answer is 'anaconda', you type just'ana'. You need a minimum score of 4 to pass\n")

questionOne = {
  question: "Name of Kaushik's first bike? ",
  answer: "cbz"
}

questionTwo = {
  question: "Kaushik's native city? ",
  answer: "che"
}

questionThree = {
  question: "Name of Kaushik's ex? ",
  answer: "mal"
}

questionFour = {
  question: "The DJ's name who played in Kaushik's first and last EDM concert? ",
  answer: "har"
}

questionFive = {
  question: "Kaushik's birthday month? ",
  answer: "jul"
}


function qnA(answer, rightAnswer) {
  if (answer === rightAnswer) {
    score = score + 1;
    console.log("Your answer is correct!! your score is "+score+"\n")
  } else {
    console.log("Your answer is wrong, your score is " +score+"\n")
  }
}

var q1 = readlinesync.question(questionOne.question)

qnA(q1, questionOne.answer);

var q2 = readlinesync.question(questionTwo.question);

qnA(q2, questionTwo.answer);

var q3 = readlinesync.question(questionThree.question);

qnA(q3, questionThree.answer);

var q4 = readlinesync.question(questionFour.question);

qnA(q4, questionFour.answer);

var q5 = readlinesync.question(questionFive.question);

qnA(q5, questionFive.answer);

if(score>3){
  console.log("\nGreat going "+userName+". Your final score is: "+score+"!! Congragulations, you seem to know Kaushik well enough to attend his Bachelor's party");
}
else {
  console.log("\nThat's bad "+userName+". Your final score is: "+score+" :( You do not seem to know Kaushik well enough, please retry this test to attend his Bachelor's party");
}
