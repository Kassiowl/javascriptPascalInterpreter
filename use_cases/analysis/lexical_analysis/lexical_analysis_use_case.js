const Token = require("../../../entities/token")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {
    const words = this.expression.split(/([^a-zA-Z0-9\s])/);
    const filteredWords = words.filter(word => word !== '' && !word.match(/^\s+$/));
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

let lexical = new LexicalAnalysis("program Hello; begin writeln ('Hello, world.');end.");
console.log(lexical.run());