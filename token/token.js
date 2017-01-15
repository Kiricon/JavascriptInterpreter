
class Token {
    constructor(t, l) {
        this.type = t;
        this.literal = l;
    }
}

const Types = {
    ILLEGAL: 'ILLEGAL',
    EOF: 'EOF',

    //Identifierss + Literals
    IDENT: 'IDENT',
    INT: 'INT',

    //Operators
    ASSIGN: '=',
    PLUS: '+',

    //Delimiters
    COMMA: ',',
    SEMICOLON: ';',
    LPAREN: '(',
    RPAREN: ')',
    LBRACE: '{',
    RBRACE: '}',

    //Keywords
    FUNCTION:'FUNCTION',
    LET: 'LET',
}

module.exports = {Token, Types};
