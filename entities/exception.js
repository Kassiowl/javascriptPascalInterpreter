module.exports = class InterpreterException{

    static reserved_keyword()
    {
        throw new Error('Reserved Keyword!');
    }

    static syntax_error()
    {
        throw new Error('Syntax error!');
    }

}