const Lexer = require('./lexer/lexer');
const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

class Parser {
    constructor(string) {
        this.lexer = new Lexer(string);
        this.curToken;
        this.peekToken;
        this.i = 0;
        this.nextToken();
        this.nextToken();
    }

    nextToken() {
        this.curToken = this.peekToken;
        this.peekToken = this.lexer.tokens[i];
        i++;
    }

}