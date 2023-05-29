const keyword_list = require('./keyword')
const operators = require('./operators')
const comments = require('./comments')
const delimiters = require('./delimiters')

module.exports = class Token {
    constructor(token_data) {
      this.token_data = token_data;

      for (const element of keyword_list.keywords_static_list) {
        if (element === token_data) {
          this.token_specify = { 'type': 'keyword', 'data': token_data };
          return;
        }
      }
      for(const element of operators.operators_static_list)
      {
        if(element === token_data){
          this.token_specify = {'type': 'operator', 'data': token_data}
          return
        }
      }
      
      for(const element of comments.comments_static_list)
      {
        if(element === token_data){
          this.token_specify = {'type': 'comments', 'data': token_data}
          return
        }
      }

      for(const element of delimiters.delimiters_static_list)
      {
        if(element === token_data){
          this.token_specify = {'type': 'delimiters', 'data': token_data}
          return
        }
      }


      
        if(token_data.includes('"') || token_data.includes("'") && (token_data[token_data.length - 1] == "'" || token_data[token_data.length -1] == '"')){
          this.token_specify = {'type': 'string literal', 'data': token_data}
          return
        }
      
      this.token_specify = { 'type': 'identifier', 'data': token_data };
    }
  }
  
