const exception = require("../../../entities/exception")

module.exports =  class error_handling
{
    constructor(word_token_list)
    {
        const excpt = new exception()
        if(word_token_list[0].token_specify['type'] == 'identifier')
        {
            excpt.syntax_error()
        }
        for (let i = 0; i < word_token_list.length; i++) {

            if(word_token_list[i].token_specify['type'] == 'keyword' && !word_token_list[i+1])
            {
                excpt.syntax_error()
            }
            if(!word_token_list[i+1])
            {
                return
            }
            if(word_token_list[i].token_specify['type'] == 'identifier' && word_token_list[i+1].token_specify['type'] == 'keyword')
            {
                const excpt = new exception()
                excpt.reserved_keyword()
            }

          }
    }
}