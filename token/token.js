
class Token {
    constructor(t, l) {
        let type = t;
        let literal = l;
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
    RPAREN: '}',

    //Keywords
    FUNCTION:'FUNCTION',
    LET: 'LET',
}

module.exports = {Token, Types};
