const Token = require("../../../entities/token")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

    separateTokens(expression) {
    expression = this.expression.trim();
    const tokenRegex = /(\d+)|([a-zA-Z]\w*)|([\+\-\*\/\(\)])|('(?:\\.|[^'])*')/g;
    let tokens = expression.match(tokenRegex);
    console.log("tokens__")
    console.log(tokens)
    return tokens;
  }
  
  run() {
    let token_list = this.separateTokens();
    let def_token_list = [];
    token_list.forEach(item => {
      def_token_list.push(new Token(item));
    });

    return def_token_list;
  }
}


module.exports = LexicalAnalysis;