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
    constructor(token) {
        super(token);
        this.name; //Identifier
        this.value; //Expression
    }
}

module.exports = {
    LetStatement: LetStatement,
}