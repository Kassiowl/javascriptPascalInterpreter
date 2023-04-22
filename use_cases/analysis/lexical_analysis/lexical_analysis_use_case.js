const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

class LexicalAnalysis{
    constructor(expression)
    {
        this.expression = expression   
    }

    separateWords() {
        const words = this.expression.split(/[^a-zA-Z0-9=]+/);
      
        const filteredWords = words.filter(word => word !== '');
    
        return filteredWords;
      }
    run()
    {
        let word = this.separateWords(this.expression)
        let word_token_list = []
        word.forEach(item => {
            word_token_list.push(new Token(item))
          });

        return word_token_list
    }
}


// teste
lexical = new LexicalAnalysis("const X = 20")
console.log(lexical.run())
