const Token = require("../../../entities/token")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateTokens() {
    const tokenRegex = /(\d+)|\b([a-zA-Z]\w*)\b|([\+\-\*\/\(\)])|('(?:\\.|[^'])*')/g;
    let tokens = this.expression.match(tokenRegex);
  
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