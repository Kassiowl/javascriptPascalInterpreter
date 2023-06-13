const LexicalAnalysis = require("../lexical_analysis")


lexical = new LexicalAnalysis()
console.log(lexical.lexical_analysis("if x < 5 then writeln('Hello, World!');"))