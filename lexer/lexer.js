const Token = require('./token/token').Token;
const Types = require('./token/token').Types;

class Lexer {
    constructor(string) {
        let input = string;
        let position = 0;
        let readPosition = 0;
        let ch = '';
        let tokens = [];
        this.readChar()
    }

    readChar() {
        if(this.readPosition > this.input.length) {
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
                token = new Token(Type.EOF, '');

            if(token.type != Type.EOF){
                this.readChar();
                this.tokens.push(token);
                this.nextToken();
            }else {
                console.log(this.tokens);
            }
        }
    }
}