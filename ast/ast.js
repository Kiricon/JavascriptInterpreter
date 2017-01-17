const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

class Node {

    constructor(token) {
        this.token;
    }

    tokenLiteral() {
        this.token.literal;
    }
}

class Statement extends Node {
    statementNode() {
        return 'hotdog';
    }
}

class Expression extends Node {
    expressionNode() {
        return 'hotdog';
    }
}

class LetStatement extends Statement {
    constructor() {
        this.name; //Identifier
        this.value; //Expression
    }
}