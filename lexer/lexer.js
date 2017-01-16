const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;
const Keywords = require('./../token/token').Keywords;

class Lexer {
    constructor(string) {
        this.input = string;
        this.position = 0;
        this.readPosition = 0;
        this.ch = '';
        this.tokens = [];
        this.readChar()
        this.nextToken();
    }

    readChar() {
        if(this.readPosition >= this.input.length) {
            this.ch = 0;
        }else {
            this.ch = this.input[this.readPosition]
        }
        this.position = this.readPosition;
        this.readPosition++;
    }

    nextToken() {
        let token;
        let skipChar = false;
        switch(this.ch) {
            case '=':
                token = new Token(Types.ASSIGN, this.ch);
                break;
            case ';':
                token = new Token(Types.SEMICOLON, this.ch);
                break;
            case '(':
                token = new Token(Types.LPAREN, this.ch);
                break;
            case ')':
                token = new Token(Types.RPAREN, this.ch);
                break;
            case ',':
                token = new Token(Types.COMMA, this.ch);
                break;
            case '+':
                token = new Token(Types.PLUS, this.ch);
                break;
            case '{':
                token = new Token(Types.LBRACE, this.ch);
                break;
            case '}':
                token = new Token(Types.RBRACE, this.ch);
                break;
            case 0:
                token = new Token(Types.EOF, '');
                break;
            default:
                skipChar = true;
                if(this.isLetter(this.ch)) {
                    let literal = this.readIdentifier();
                    token = new Token(this.identifierType(literal), literal);
                }else if(this.isNumber(this.ch)){
                    let literal = this.readNumber();
                    token = new Token(Types.INT, literal);
                }else {
                    token = new Token(Types.ILLEGAL, '');
                }
            
        }
            
        if(token.type != Types.EOF){
            if(!skipChar){
                this.readChar();
            }
            this.tokens.push(token);
            this.nextToken();
        }else {
            console.log(this.tokens);
        }
    }

    isLetter(currentChar) {
        if (((currentChar > '@')&&(currentChar < '[')) || ((currentChar > '`')&& (currentChar<'{')))
        {
            return true;
        }else{
            return false;
        }
    }

    isNumber(ch){
        return 0 <= ch && ch <= '9';
    }

    readIdentifier() {
        let position = this.position;
        while(this.isLetter(this.ch)) {
            this.readChar();
        }
        return this.input.substring(position, this.position);
    }

    readNumber() {
        let position = this.position;
        while(this.isNumber(this.ch)){
            this.readChar();
        }
        return this.input.substring(position, this.position);
    }

    identifierType(identifier){
        if(Keywords[identifier] != undefined) {
            return Keywords[identifier];
        }else {
            return Types.IDENT;
        }
    }

}


module.exports = Lexer;