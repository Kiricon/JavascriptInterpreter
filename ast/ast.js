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
