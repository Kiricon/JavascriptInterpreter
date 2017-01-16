
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
    MINUS: '-',
    BANG: '!',
    ASTERISK: '*',
    SLASH: '/',
    LT: '<',
    GT: '>',


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

const Keywords = {
    'func': Types.FUNCTION,
    'let': Types.LET
}

module.exports = {Token, Types, Keywords};
