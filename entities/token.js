const keyword_list = require('./keyword')

class Token {
    constructor(token_data) {
      this.token_data = token_data;
      console.log(keyword_list.keywords_static_list);
      for (const element of keyword_list.keywords_static_list) {
        console.log(element);
        if (element === token_data) {
          this.token_specify = { 'type': 'keyword', 'data': token_data };
          return;
        }
      }
  
      this.token_specify = { 'type': 'identifier', 'data': token_data };
    }
  }
  
