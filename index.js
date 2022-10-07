//Accessing the package readline-sync 
import readlineSync from "readline-sync"
import chalk from "chalk"

//Global variable initiaization
var score = 0

//Take input from the user
var userName = readlineSync.question("Please enter your name")

console.log(chalk.blue("Welcome " + userName + " Do you know about our country"))

//Function that takes the parameters question and answer 
function knowMe(question, answer) {
  //Take answer from user
  var userAnswer = readlineSync.question(question)
  //checking the condition is true/false using branch
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!")
    score = score + 1
  }
  else {
    console.log("Wrong!")
  }
  console.log("Current Score: ", score)
  console.log("--------------------")

}

//array of objects containing questions and aswers
var questions = [
  {
    question: `which of the following is our national animal?
    a)Tiger
    b)Lion
    c)Hippo
    `,
    answer: "a"
  },
  {
    question: `which of the following is our national bird?
    a)Peacock
    b)Parrot
    c)Duck
    `,
    answer: "a"
  },
  {
    question: `which of the following is our national flower
    a)Rose
    b)Lotus
    c)Datura
    `,
    answer: "b"
  },
  {
    question: `which of the following is our national game
    a)Cricket
    b)Football
    c)Hockey
    `,
    answer: "c"
  },
  {
    question: `which of the following is our national fruit
    a)Lemon
    b)Mango
    c)Apple
    `,
    answer: "b"
  }
]

var topScores = [
  {
    name: "Vikas",
    score: 5
  },
  {
    name: "Ram",
    score: 4
  }
]

//Running loop over the array
for (var i = 0; i < questions.length; i++) {
  knowMe(questions[i].question, questions[i].answer)

}

console.log(chalk.blue.bgRed.bold("Your Final Score Is: ", score))
console.log("Top Scored Guys: ")
for (var i = 0; i < topScores.length; i++) {
  console.log(topScores[i].name + " " + topScores[i].score)
}
console.log(chalk.rgb(20,60,100).underline("You scored higher? Please send the screen shot "))
