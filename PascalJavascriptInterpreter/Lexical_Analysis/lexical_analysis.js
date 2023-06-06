const Token = require("../Entities/Token/token")
const natural = require('natural');
const word_separator = new natural.WordTokenizer();

class LexicalAnalysis{

    separate_setences_into_words(sentence){
        const word_list_tokanable = word_separator.tokenize(sentence)
        return word_list_tokanable
    }

    createToken(word){
        const token = new Token(word)
        const token_mock = {type: "keyword", token_data: word}
        return token_mock
    }

    lexical_analysis(sentence){

        const separate_words_tokanable = this.separate_setences_into_words(sentence)
        let token_list = []
        separate_words_tokanable.forEach(word => {
            let token = this.createToken(word)
            token_list.push(token)
        })

        return token_list // temporary return function, this just return all words in a list, later it will return a list of tokens
    }

}


module.exports = LexicalAnalysis;