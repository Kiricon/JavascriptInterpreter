const Lexer = require('./lexer/lexer');
const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

/**
 * This is where we parse our tokens in to our 
 * abstract syntax tree
 */
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

    /**
     * Itterate to the next token 
     */
    nextToken() {
        this.curToken = this.peekToken;
        this.peekToken = this.lexer.tokens[i];
        i++;
    }

    /**
     * Loop through all tokens and parse out statements
     */
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