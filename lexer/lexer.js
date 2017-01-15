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
        let 
    }
}