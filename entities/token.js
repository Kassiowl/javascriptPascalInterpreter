const keyword_list = require('./keyword')
const operators = require('./operators')
const comments = require('./comments')
const delimiters = require('./delimiters')

module.exports = class Token {
    constructor(token_data) {
      this.token_data = token_data;

      for (const element of keyword_list.keywords_static_list) {
        if (element === token_data) {
          this.token_specify = 'keyword'
          return;
        }
      }
      for(const element of operators.operators_static_list)
      {
        if(element === token_data){
          this.token_specify = 'operator'
          return
        }
      }
      
      for(const element of comments.comments_static_list)
      {
        if(element === token_data){
          this.token_specify = 'comments'
          return
        }
      }

      for(const element of delimiters.delimiters_static_list)
      {
        if(element === token_data){
          this.token_specify = 'delimiters'
          return
        }
      }


      
        if(token_data.includes('"') || token_data.includes("'") && (token_data[token_data.length - 1] == "'" || token_data[token_data.length -1] == '"')){
          this.token_specify = 'string literal'
          return
        }
      
      this.token_specify =  'identifier';
    }
  }
  
