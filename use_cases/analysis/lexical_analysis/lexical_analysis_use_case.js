const Token = require("../../../entities/token")
const exception = require("../../../entities/exception")

class LexicalAnalysis{
    constructor(expression)
    {
        this.expression = expression   
    }

    separateWords(expression)
    {
        const words = this.expression.split(/\s+/);

        const cleanedWords = words.map(word => word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, ''));

        const filteredWords = cleanedWords.filter(word => word !== '');

        let word_token = []

        return filteredWords;
    }
    run()
    {
        let word = this.separateWords(this.expression)
        let word_token_list = []
        word.forEach(item => {
            word_token_list.push(new Token(item))
          });
        

        for (let i = 0; i < word_token_list.length; i++) {
            const excpt = new exception()
            if(word_token_list[i].token_specify['type'] == 'keyword' && !word_token_list[i+1])
            {
                excpt.syntax_error()
            }
            if(!word_token_list[i+1])
            {
                return
            }
            if(word_token_list[i].token_specify['type'] == 'identifier' && word_token_list[i+1].token_specify['type'] == 'identifier')
            {
                excpt.syntax_error()
            }
            if(word_token_list[i].token_specify['type'] == 'identifier' && word_token_list[i+1].token_specify['type'] == 'keyword')
            {
                const excpt = new exception()
                excpt.reserved_keyword()
            }

          }
    }
}


// teste
lexical = new LexicalAnalysis("x n")
lexical.run()
