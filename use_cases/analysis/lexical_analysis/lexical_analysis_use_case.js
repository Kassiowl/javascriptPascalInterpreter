const Token = require("../../../entities/token")

class LexicalAnalysis {
  constructor(expression) {
    this.expression = expression;
  }

  separateWords() {
    const symbols = ["(", ")", "{", "}", "'", '"', ";"];
    let currentWord = "";
    let wordList = [];
  
    for (let i = 0; i < this.expression.length; i++) {
      let currentChar = this.expression[i];
  
      if (symbols.includes(currentChar)) {
        if (currentWord !== "") {
          wordList.push(currentWord);
          currentWord = "";
        }
        wordList.push(currentChar);
      } else if (currentChar === " ") {
        if (currentWord !== "") {
          wordList.push(currentWord);
          currentWord = "";
        }
      } else {
        currentWord += currentChar;
      }
    }
  
    if (currentWord !== "") {
      wordList.push(currentWord);
    }
  
    let finalWordList = [];
    for (let i = 0; i < wordList.length; i++) {
      let currentWord = wordList[i];
      if (currentWord[currentWord.length - 1] === ";") {
        finalWordList.push(currentWord.slice(0, -1));
        finalWordList.push(";");
      } else if (currentWord[0] === ";") {
        finalWordList.push(";");
        finalWordList.push(currentWord.slice(1));
      } else {
        finalWordList.push(currentWord);
      }
    }
  
    return finalWordList;
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