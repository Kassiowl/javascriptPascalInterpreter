module.exports = class InterpreterException{

    reserved_keyword()
    {
        throw new Error('Reserved Keyword!');
    }

    syntax_error()
    {
        throw new Error('Syntax error!');
    }

}