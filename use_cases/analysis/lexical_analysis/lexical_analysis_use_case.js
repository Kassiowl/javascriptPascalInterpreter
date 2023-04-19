const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

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

        return filteredWords;
    }
    run()
    {
        let word = this.separateWords(this.expression)
        let word_token_list = []
        word.forEach(item => {
            word_token_list.push(new Token(item))
          });

        new ErrorHandling(word_token_list)
    }
}

lexical = new LexicalAnalysis("let x = 30")
lexical.run()
