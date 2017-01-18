const Parser = require('./parser/parser');
const Repl = require('./repl/repl');


if(process.argv.indexOf('-i') > -1){
    Repl.start();
}else {
    let parser = new Parser(`
        let hotdog = 111;
        return 5;
        return 10;
        return 838383;
    `);
}

