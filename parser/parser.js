const Lexer = require('./lexer/lexer');
const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

class Parser {
    constructor(string) {
        this.lexer = new Lexer(string);
        this.curToken;
        this.peekToken;
        this.i = 0;
        this.statements = [];
        this.nextToken();
        this.nextToken();
        this.parse();
    }

    nextToken() {
        this.curToken = this.peekToken;
        this.peekToken = this.lexer.tokens[i];
        i++;
    }

    parse() {
        while(this.curToken.type != Types.EOF){
            let statement = this.parseStatement();
            if(statement != null) {
                this.statements.push(statement);
            }
            this.nextToken();
        }
    }

}