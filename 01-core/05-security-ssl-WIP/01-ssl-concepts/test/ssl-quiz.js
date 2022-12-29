/*
Additional ideas: 
- If the answer is wrong, add a reference for docs 
- Quiz continues until user gets a passing score
- validation = passing quiz 
- could be a mixture of MC, fill in the blank, etc.
- can template better to just read questions/answers from a JSON file?  
*/ 

const rs =require('readline-sync');

//chalk makes console text pretty/easier to read for quiz format
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
function shuffleArray(mcqList){
    let cur = mcqList.length; 
    while (cur != 0){
        let randId = Math.floor(Math.random() * cur);
        cur -= 1;
        //swap
        let tmp = mcqList[cur];
        mcqList[cur] = mcqList[randId];
        mcqList[randId] = tmp;
    }
    return mcqList;
}

//list of multiple choice questions and answers
//can probably template this to populate this array from a json file
//if we want to use this quiz code in other areas 
var mcqList = [
    {
        array: ['A) Secure Socket Layer', 'B) Straight Socket Loop', 'C) Secure Server Layout', 'D) Special Security License'],
        question: '1. What does "SSL" stand for?',
        answer: 'A'
    },
    {
        array: ['A) Bob private key', 'B) Alice public key', 'C) Bob public key', 'D) Alice private key'],
        question: '2. If Bob wants to send an encrypted message to Alice, which key does he use?',
        answer: 'B'
    },
    {
        array: ['A) SSL', 'B) TLS', 'C) None', 'D) Both'],
        question: '3. What protocols are used with HTTPS for security mechanism?',
        answer: 'D',
        //optionally add explanations in cases of wrong answers on 3rd try? 
        //explanation: 'Both SSL and TLS protocols are used to implement a security mechanism with HTTPS.'
    },
    {
        array: ['A) SSL protocol is used for securing communication by sending and receiving data in the encrypted format.', 'B) SSL uses certificates to implement a secure mechanism.', 'C) SSL is used to save data into memory in a secure manner.', 'D) They are all correct.'],
        question: '4. Which of the following statements is not correct about SSL?',
        answer: 'C',
    }
]
var mcqShuffled = shuffleArray(mcqList);
for(let i =0; i<mcqShuffled.length;i++){
    gamePlay(mcqShuffled[i].array,mcqShuffled[i].question,mcqShuffled[i].answer);
}

if(score >= (mcqList.length - 2)){
    console.log(chalk.green('Congratulations, you passed! Score: ',score));
}
else{
    console.log(chalk.red('You did not pass the quiz :( \nYour score was: ',score, "\nPlease try again."));
}