const Lexer = require('./lexer/lexer');
const Repl = require('./repl/repl');


if(process.argv.indexOf('-i') > -1){
    Repl.start();
}else {
    let lexer = new Lexer('+=() func {} , ; hotdog 22 city )) let if return else != ==');
}

