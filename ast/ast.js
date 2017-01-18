const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;

class Node {

    constructor(token) {
        this.token = token;
    }

    tokenLiteral() {
        this.token.literal;
    }
}

class Statement extends Node {
    constructor(token){
        super(token);
    }
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

class ReturnStatement extends Statement {
    constructor(token){
        super(token)
        this.returnValue; //Expression
    }
}

class Identifier {
    constructor(t, string){
        this.token = t;
        this.value = string;
    }
}

module.exports = {
    LetStatement: LetStatement,
    Identifier: Identifier,
    ReturnStatement: ReturnStatement,
}