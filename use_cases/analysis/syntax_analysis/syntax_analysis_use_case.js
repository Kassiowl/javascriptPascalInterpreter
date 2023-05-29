
const exception_list = require("../../../entities/exception");
const LexicalAnalysis = require("../lexical_analysis/lexical_analysis_use_case")
class SyntaxAnalysis {
  constructor(tokens) {
    this.tokens = tokens;
    this.tree = undefined;

    if (this.tokens[0].token_data != "program") {
      exception_list.syntax_error();
    }
  }
  verifyRule(token1, token2, token3 = undefined, token4 = undefined, token5 = undefined, token6 = undefined) {
  
    if (token1.token_data === "if" && token2.token_data === "then") {
      return true;
    }
  
    if (token1.token_data === "while" && token2.token_data === "do") {
      return true;
    }
  
    if (
      token1.token_data === "for" &&
      token2.token_data === ":=" &&
      token3.token_specify === "identifier" &&
      token4.token_data === "to" &&
      token5.token_specify === "number" &&
      token6.token_data === "do"
    ) {
      return true;
    }
  
    if (token1.token_data === "var" && token2.token_specify === "identifier" && token3.token_data === ":") {
      return true;
    }
  
    if (token1.token_data === "begin" && token2.token_data === "end") {
      return true;
    }
  
    if (token1.token_data === "repeat" && token2.token_data === "until") {
      return true;
    }
  
    if (token1.token_data === "procedure" && token2.token_specify === "identifier" && token3.token_data === ";") {
      return true;
    }
  
    if (token1.token_data === "function" && token2.token_specify === "identifier" && token3.token_data === ":") {
      return true;
    }
  
    if (token1.token_data === "const" && token2.token_specify === "identifier" && token3.token_data === "=") {
      return true;
    }
  
    if (token1.token_data === "array" && token2.token_specify === "identifier" && token3.token_data === "[") {
      return true;
    }
  
    if (token1.token_specify === 'keyword' && token2.token_specify === 'identifier') {
      return true;
    }
  
    if (token1.token_data === "writeln" && token2.token_data === "(" && token3.token_specify === "string literal" && token4.token_data === ")") {
      return true;
    }
  
   
    if (token1.token_specify === "identifier" && token2.token_specify === "keyword"){
      return true;  
    } 
    
    if (token1.token_data === "begin" && token2.token_specify === "keyword"){
      return true;  
    } 
    
    if (token1.token_data === "writeln" && token2.token_specify === "delimiters"){
      return true;  
    } 
    if (token1.specify === "delimiters" && token2.token_specify === "string literal"){
      return true;  
    } 
    
    exception_list.syntax_error();
  }
  
  syntax_analysis() {
    for (let i = 0; i < this.tokens.length - 5; i++) {
        const token1 = this.tokens[i];
        const token2 = this.tokens[i + 1];
        const token3 = this.tokens[i + 2];
        const token4 = this.tokens[i + 3];
        const token5 = this.tokens[i + 4];
        const token6 = this.tokens[i + 5];
      
        this.verifyRule(token1, token2, token3, token4, token5, token6);
      }
      
  }
}

let lexical = new LexicalAnalysis("program HelloWorld;begin writeln('Hello, World!');end.");
tokens = lexical.run()

const syntaxAnalyzer = new SyntaxAnalysis(tokens);
syntaxAnalyzer.syntax_analysis();
