const Token = require("../../../entities/token")
class LexicalAnalysis{
    constructor(expression)
    {
        this.expression = expression   
    }

    separateWords() {
      const words = this.expression.split(/([^a-zA-Z0-9=])/).filter(word => word !== '');
      let bracketOpened = false;
      let filteredWords = [];
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
  
        if (word === "{") {
          bracketOpened = true;
          filteredWords.push(word);
        } else if (word === "}") {
          bracketOpened = false;
          filteredWords.push(word);
        } else if (bracketOpened) {
          filteredWords.push(word);
        } else {
          filteredWords.push(word.replace(/\s/g, ""));
        }
      }
  
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
lexical = new LexicalAnalysis("const X = {20} // {}")
console.log(lexical.run())
