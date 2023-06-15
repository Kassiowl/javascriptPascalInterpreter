const Token = require("../Entities/Token/token")
const natural = require('natural');
const word_separator = new natural.WordTokenizer();
const tokenSpecify = require('../Entities/Token_Specify/token_specify');

class LexicalAnalysis{

    separate_setences_into_words(sentence) {
        const word_list_tokanable = sentence.match(/('[^']*'|"[^"]*")|\b\w+\b/g) || [];
        return word_list_tokanable;
      }
    createToken(word){
        const token = new Token(word)
        token.token_specify = this.getSpecification(token.token_data)
        return token
    }

    lexical_analysis(sentence){

        const separate_words_tokanable = this.separate_setences_into_words(sentence)
        let token_list = []
        separate_words_tokanable.forEach(word => {
            let token = this.createToken(word)
            token_list.push(token)
        })

        return token_list 
    }

    getSpecification(token_data) {
            if (tokenSpecify.keywords.includes(token_data)) {
                return 'KEYWORD';
            }

            if (tokenSpecify.operators.includes(token_data)) {
                return 'OPERATOR';
            }

            if (tokenSpecify.punctuation.includes(token_data)) {
                return 'PUNCTUATION';
            }

            if (tokenSpecify.comments.includes(token_data)) {
                return 'COMMENT';
            }

            for (const regex of tokenSpecify.numbers) {
                if (regex.test(token_data)) {
                    return 'NUMBER';
                }
            }
                    
            for (const regex of tokenSpecify.stringLiterals) {
                    if (regex.test(token_data)) {
                        return 'LITERAL';
                    }
                }

            if (tokenSpecify.directives[0].test(token_data)) {
                return 'DIRECTIVE';
            }

                return 'IDENTIFIER';
    }

}


module.exports = LexicalAnalysis;