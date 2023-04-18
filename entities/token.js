const keyword_list = require('./keyword')

module.exports = class Token {
    constructor(token_data) {
      this.token_data = token_data;
      for (const element of keyword_list.keywords_static_list) {
        if (element === token_data) {
          this.token_specify = { 'type': 'keyword', 'data': token_data };
          return;
        }
      }
  
      this.token_specify = { 'type': 'identifier', 'data': token_data };
    }
  }
  
