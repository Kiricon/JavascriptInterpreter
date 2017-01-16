
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
    TRUE: 'TRUE',
    FALSE: 'FALSE',
    IF: 'IF',
    ELSE: 'ELSE',
    RETURN: 'RETURN',
}

const Keywords = {
    'func': Types.FUNCTION,
    'let': Types.LET,
    'true': Types.TRUE,
    'false': Types.FALSE,
    'if': Types.IF,
    'else': Types.ELSE,
    'return': Types.RETURN,
}

module.exports = {Token, Types, Keywords};
