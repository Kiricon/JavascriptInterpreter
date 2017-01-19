const Lexer = require('./../lexer/lexer');
const Token = require('./../token/token').Token;
const Types = require('./../token/token').Types;
const Ast = require('./../ast/ast');

const LOWEST = 1;
const EQUALS = 2;       // ==
const LESSGREATER = 3;  // > or <
const SUM = 4;          // +
const PRODUCT = 5;      // *
const PREFIX = 6;       // -X or !X
const CALL = 7;         // myFunction(X)

/**
 * This is where we parse our tokens in to our 
 * abstract syntax tree
 */
class Parser {
    constructor(string) {
        this.lexer = new Lexer(string);
        this.curToken;
        this.peekToken;
        this.i = 0;
        this.statements = [];
        this.errors = [];
        this.prefixParseFunctions = {};
        this.registerPrefix(Types.IDENT, this.parseIdentifier);
        this.infixParseFunctions = {};
        this.nextToken();
        this.nextToken();
        this.parse();
    }

    /**
     * Itterate to the next token 
     */
    nextToken() {
        this.curToken = this.peekToken;
        this.peekToken = this.lexer.tokens[this.i];
        this.i++;
    }

    /**
     * Loop through all tokens and parse out statements
     */
    parse() {
        while(this.curToken.type != Types.EOF){
            let statement = this.parseStatement();
            if(statement != null) {
                this.statements.push(statement);
            }
            this.nextToken();
        }
        if(this.errors.length == 0) {
           this.statements.forEach(stat => {
               console.log(stat);
           });
        }else {
            console.log(this.errors);
        }
    }
    
    parseStatement() {
        switch(this.curToken.type) {
            case Types.LET:
                return this.parseLetStatement();
            case Types.RETURN:
                return this.parseReturnStatement();
            default:
                return this.parseExpressionStatement();
        }
    }

    parseLetStatement() {
        let statement = new Ast.LetStatement(this.curToken);

        if(!this.expectPeek(Types.IDENT)) {
            return null;
        }

        statement.name = new Ast.Identifier(this.curToken, this.curToken.literal);

        if(!this.expectPeek(Types.ASSIGN)) {
            return null;
        }

        while(!this.curTokenIs(Types.SEMICOLON)) {
            this.nextToken();
        }

        return statement;
    }

    parseReturnStatement() {
        let statement = new Ast.ReturnStatement(this.curToken);
        this.nextToken();

        while(!this.curTokenIs(Types.SEMICOLON)) {
            this.nextToken();
        }

        return statement;
    }

    curTokenIs(type) {
        return this.curToken.type == type;
    }

    peekTokenIs(type) {
        return this.peekToken.type == type;
    }

    expectPeek(t) {
        if(this.peekTokenIs(t)) {
            this.nextToken()
            return true;
        }else {
            this.errors.push('Expected: '+t+', but got:' + this.peekToken.type);
            return false;
        }
    }

    registerPrefix(type, func) {
        this.prefixParseFunctions[type] = func;
    }

    registerInfix(type, func) {
        this.prefixParseFunctions[type] = func;
    }

    parseExpressionStatement() {
        let statement = new Ast.ExpressionStatement(this.curToken);

        statement.expression = this.parseExpression(LOWEST);

        if(this.peekTokenIs(Types.SEMICOLON)) {
            this.nextToken();
        }

        return statement;
    }

    parseExpression(precedence) {
        let prefix = this.prefixParseFunctions[this.curToken.type];

        if(prefix == null) {
            return null;
        }

        let leftExp = prefix(this);

        return leftExp;
    }

    parseIdentifier(ctx) {
        return new Ast.Identifier(ctx.curToken, ctx.curToken.literal);
    }
}

module.exports = Parser;
