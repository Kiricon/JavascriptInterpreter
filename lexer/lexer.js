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
            this.ch = -1;
        }else {
            this.ch = this.input[this.readPosition]
        }
        this.position = this.readPosition;
        this.readPosition++;
    }

    nextToken() {
        let token;
        let skipChar = false;
        this.skipWhiteSpace();
        switch(this.ch) {
            case '=':
                if(this.peekChar() == '=') {
                    this.readChar();
                    token = new Token(Types.EQ, '==');
                }else {
                    token = new Token(Types.ASSIGN, this.ch);
                }
                break;
            case '+':
                token = new Token(Types.PLUS, this.ch);
                break;
            case '-':
                token = new Token(Types.MINUS, this.ch);
                break;
            case '!':
                if(this.peekChar() == '=') {
                    this.readChar();
                    token = new Token(Types.NOT_EQ, '!=');
                }else {
                    token = new Token(Types.BANG, this.ch);
                }
                break;
            case '/':
                token = new Token(Types.SLASH, this.ch);
                break;
            case '*':
                token = new Token(Types.ASTERISK, this.ch);
                break;
            case '<':
                token = new Token(Types.LT, this.ch);
                break;
            case '>':
                token = new Token(Types.GT, this.ch);
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
            case -1:
                token = new Token(Types.EOF, '');
                break;
            default:
                if(this.isLetter(this.ch)) {
                    skipChar = true;
                    let literal = this.readIdentifier();
                    token = new Token(this.identifierType(literal), literal);
                }else if(this.isNumber(this.ch)){
                    skipChar = true;
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
        return '0' <= ch && ch <= '9';
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

    skipWhiteSpace(){
        while(this.ch == ' ' || this.ch == '\t' || this.ch == '\n' || this.ch == '\r'){
            console.log(this.ch);
            this.readChar();
        }
    }

    peekChar(){
        if(this.readPosition >= this.input.length){
            return -1;
        }else {
            return this.input[this.readPosition];
        }
    }

}


module.exports = Lexer;