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
console.log(chalk.green.bold("\n \tHive MinIO connector Quiz \n"));

var score = 0;

//function checks whether user answer is correct or not
function gamePlay(listOfAnswers, questions, correctAnswer){
    var qCount = 1;
    console.log(chalk.bgBlue(qCount + ". ", questions));
    for(let i=0; i<listOfAnswers.length; i++){ 
        console.log(chalk.blue(String.fromCharCode(i + 97) + ") ", listOfAnswers[i]))
    
    }
    //reads answer given from terminal for us in conditional check
    var answer = rs.question("\nAnswer: ");
    
    if(answer == correctAnswer){
        console.log(chalk.green('\nCorrect!'));
        score=score+2;
    }
    else{
        console.log(chalk.redBright('\nWrong :('));
        //console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-1;
    }
    //console.log(chalk.yellowBright('Your score is: ' + score));    
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
        array: ['Internet layers', 'Internet protocols', 'Network layers', 'Cryptographic protocols'],
        question: 'What are TLS and SSL?',
        answer: 'd'
    },
    {
        array: ['True', 'False'],
        question: 'HTTPS is a combination of the Hypertext Transfer Protocol combined with the older SSL or newer TLS protocol to provide encryption and secure identification of the server.',
        answer: 'a'
    },
    {
        array: ['HTTP','SSL/TLS','SMTP','TCP/IP'],
        question: 'Which of the following protocols are primarily used to establish a secure connection between browsers and servers so that no data is lost?',
        answer: 'b'
        //optionally add explanations in cases of wrong answers on 3rd try? 
        //explanation: 'Both SSL and TLS protocols are used to implement a security mechanism with HTTPS.'
    },
    {
        array: ['True','False'],
        question: 'TLS offers stronger protection than SSL.',
        answer: 'a'
    },
    {
        array: ['To increase chances of testing encryption capabilities', 'Assure all of your information cannot be decrypted', 'Decrease resources', 'Prevent unauthorized access to private networks and sensitive information during its most vulnerable state'],
        question: 'Why is it crucial to encrypt data in transit?',
        answer: 'd'
    },
    {
        array: ['Asymmetric encryption', 'Symmetric encryption', 'Both', 'Neither'],
        question: 'What type of encryption does SSL/TLS use?',
        answer: 'c'
    },
    {
        array: ['Non-repudiation', 'Authentication','Integrity protection','All of the above'],
        question: 'Digital signatures provide which of the following?',
        answer: 'd'
    },
    {
        array: ['Private Key Infrastructure','Virtual Key Infrastructure', 'Public Key Infrastructure','All of the above.'],
        question: 'Which of the following enables secure and private data exchange/transfer on an unsecure public network?',
        answer: 'c'
    },
    {
        array: ['The user', 'The browser', 'The server','The Web application'],
        question: 'Who really checks the validity of a Digital certificate?',
        answer: 'b'
    },
    {
        array: ['Private Key','Free Key','Public Key','Personal Key'],
        question: 'What type of key is not shared and computers cannot decrypt a message without it?',
        answer: 'a'
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