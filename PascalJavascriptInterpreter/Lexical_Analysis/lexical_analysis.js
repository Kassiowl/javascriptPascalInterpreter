const Token = require("../Entities/Token/token")
const natural = require('natural');
const word_separator = new natural.WordTokenizer();
const tokenSpecify = require('../Entities/Token_Specify/token_specify');

class LexicalAnalysis{

    separate_setences_into_words(sentence){
        const word_list_tokanable = word_separator.tokenize(sentence)
        return word_list_tokanable
    }

    createToken(word){
        const token = new Token(word)
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

    getSpecification(token) {
        if (tokenSpecify.keywords.includes(token)) {
            return 'KEYWORD';
        }

        if (tokenSpecify.operators.includes(token)) {
            return 'OPERATOR';
        }

        if (tokenSpecify.punctuation.includes(token)) {
            return 'PUNCTUATION';
        }

        if (tokenSpecify.comments.includes(token)) {
            return 'COMMENT';
        }

        if (tokenSpecify.numbers.includes(token)) {
            return 'NUMBER';
        }

        if (tokenSpecify.stringLiterals.includes(token)) {
            return 'LITERAL';
        }

        if (tokenSpecify.directives.includes(token)) {
            return 'DIRECTIVE';
        }

        return 'IDENTIFIER';
    }

}


module.exports = LexicalAnalysis;