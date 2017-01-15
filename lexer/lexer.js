const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

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
                if(this.isLetter(this.ch)) {
                    token = new Token(Types.IDENT, this.readIdentifier());
                }else {
                    token = new Token(Types.ILLEGAL, '');
                }
            
        }
            
        if(token.type != Types.EOF){
            this.readChar();
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

    readIdentifier() {
        let position = this.position;
        while(this.isLetter(this.ch)) {
            this.readChar();
        }
        return this.input.substring(position, this.position);
    }
}


module.exports = Lexer;