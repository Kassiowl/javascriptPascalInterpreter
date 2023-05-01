const keyword_list = require('./keyword')
const operators = require('./operators')
const utilities = require('./utilities')

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
      
      for(const element of utilities.utilities_static_list)
      {
        if(element === token_data){
          this.token_specify = {'type': 'utilities', 'data': token_data}
          return
        }
      }
  
      this.token_specify = { 'type': 'identifier', 'data': token_data };
    }
  }
  
