const Token = require("../../../entities/token")
const ErrorHandling = require("../error_handling/error_handling")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {

  let noSpaces = this.expression.replace(/\s/g, "");
  let words = noSpaces.split(/[^a-zA-Z0-9]+/);
  words = words.filter(word => word !== "");

  return words;
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

let lexical = new LexicalAnalysis("program Hello;begin writeln ('Hello, world.');end.");
console.log(lexical.run());