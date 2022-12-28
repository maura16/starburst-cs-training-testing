/*
Additional ideas: 
- If the answer is wrong, add a reference for docs 
- Quiz continues until user gets a passing score
- validation = passing quiz 
- could be a mixture of MC, fill in the blank, etc. 
*/ 

const rs =require('readline-sync');
//import chalk from 'chalk';
const chalk = require('chalk');
console.log(chalk.green.bold("Hive MinIO connector Quiz \n"));

var score = 0;

//function checks whether user answer is correct or not
function gamePlay(listOfAnswers, questions, correctAnswer){
    console.log(chalk.bgGray.cyanBright(questions), '\n');
    for(let i=0; i<listOfAnswers.length; i++){ console.log(chalk.cyanBright(listOfAnswers[i], '\n'))}
    
    //reads answer given from terminal for us in conditional check
    var answer = rs.question("Answer: ");
    
    if(answer == correctAnswer){
        console.log(chalk.green('\nCorrect!'));
        score=score+2;
    }
    else{
        console.log(chalk.redBright('\nWrong :('));
        //console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-1;
    }
    console.log(chalk.yellowBright('Your score is: ' + score));    
    console.log(chalk.blue('\n----------------\n'));  
}

var mcqList = [
    {
        array: ['A) Secure Socket Layer', 'B) Straight Socket Loop', 'C) Secure Server Layout', 'D) Special Security License'],
        question: '1. What does "SSL" stand for?',
        answer: 'A'
    },
    {
        array: ['A. Bob private key', 'B. Alice public key', 'C. Bob public key', 'D. Alice private key'],
        question: '2. If Bob wants to send an encrypted message to Alice, which key does he use?',
        answer: 'B'
    }
]
for(let i =0; i<mcqList.length;i++){
    gamePlay(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
    //console.log('********************* \n');
}

if(score >= 4){
    console.log(chalk.green('Congratulations, you passed! Score: ',score));
}
else{
    console.log(chalk.red('You did not pass the quiz :( \nYour score was: ',score, "\nPlease try again."));
}