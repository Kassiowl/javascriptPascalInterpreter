const Token = require("../../../entities/token")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

    separateTokens(expression) {
    expression = this.expression.trim();
    const tokenRegex = /(\d+)|([a-zA-Z]\w*)|([\+\-\*\/\(\)])/g;
    let tokens = expression.match(tokenRegex);
  
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

let lexical = new LexicalAnalysis("begin writeln('Hello, World!'); readkey;end.");
console.log(lexical.run());