const readline = require('readline');
const Lexer = require('./../lexer/lexer');
const PROMPT = ">> ";

function start(){
    console.log('Welcome to my first scripting language "TestyTest"!');
    promptUser();
}

function promptUser() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(PROMPT, (answer) => {
        if(answer.toLowerCase().trim() == 'q') {
            rl.close();
        }else {
            let lexer = new Lexer(answer);
            rl.close();
            promptUser();
        }
    });
}

module.exports = {
    start: start,
}
