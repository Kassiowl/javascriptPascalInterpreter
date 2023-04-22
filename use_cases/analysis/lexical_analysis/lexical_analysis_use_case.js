const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {
 
    const words = this.expression.split(/([^a-zA-Z0-9])/);

    const filteredWords = words.filter(word => word !== '');

    return filteredWords;
  }

  run() {
    let words = this.separateWords();
    let word_token_list = [];
    words.forEach(item => {
      word_token_list.push(new Token(item));
    });

    return word_token_list;
  }
}

let lexical = new LexicalAnalysis("const X = 20 // {10}");
console.log(lexical.run());