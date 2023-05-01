const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {
    // Separate words on whitespace, parentheses, braces, quotes, and semicolons
    const words = this.expression.split(/([\s(){}\[\]'"`’‘“”‘’;.])/);
  
    // Remove empty and whitespace-only words
    const filteredWords = words.filter(word => !word.match(/^\s*$/));
  
    // Separate semicolons at the end of a word
    const semicolonSeparatedWords = [];
    filteredWords.forEach((word, index) => {
      const lastChar = word.slice(-1);
      if (lastChar === ';') {
        semicolonSeparatedWords.push(word.slice(0, -1), ';');
      } else {
        semicolonSeparatedWords.push(word);
      }
    });
  
    // Separate semicolons at the start of a word
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