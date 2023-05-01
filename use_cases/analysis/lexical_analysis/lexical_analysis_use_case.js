const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {

    const words = this.expression.split(/([\s(){}\[\]'"`’‘“”‘’;.])/);
  
    const filteredWords = words.filter(word => !word.match(/^\s*$/));
  
    const semicolonSeparatedWords = [];
    filteredWords.forEach((word, index) => {
      const lastChar = word.slice(-1);
      if (lastChar === ';') {
        semicolonSeparatedWords.push(word.slice(0, -1), ';');
      } else {
        semicolonSeparatedWords.push(word);
      }
    });
  
    const finalWords = [];
    semicolonSeparatedWords.forEach(word => {
      if (word.charAt(0) === ';') {
        finalWords.push(';', word.slice(1));
      } else {
        finalWords.push(word);
      }
    });
  
    return finalWords;
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

let lexical = new LexicalAnalysis("begin writeln('Hello, World!'); readkey;end.");
console.log(lexical.run());