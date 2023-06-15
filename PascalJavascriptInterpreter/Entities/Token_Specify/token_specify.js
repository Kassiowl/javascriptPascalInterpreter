const TokenSpecify = {
    keywords: [
      'and', 'div', 'mod', 'record', 'while', 'array',
      'do', 'nil', 'repeat', 'with', 'as', 'downto', 'not',
      'set', 'xor', 'begin', 'else', 'of', 'then', 'case', 'end',
      'or', 'to', 'const', 'file', 'packed', 'type', 'constructor',
      'for', 'procedure', 'var', 'destructor', 'function', 'program', 'if'
    ],
  
    operators: [
      '+', '-', '*', '/',
      '=', '<>', '<', '>',
      '<=', '>=',
      ':=',
      'and', 'or', 'not',
      'and', 'or', 'xor', 'shl', 'shr',
      '+', '-'
    ],
  
    punctuation: [
      '(', ')',
      '[', ']',
      ':',
      '.',
      ','
    ],
  
    comments: [
      '//'
    ],

    numbers: [
        /^[0-9]+$/,
        /^[0-9]+\.[0-9]+$/,
        /^[0-9]+[Ee][+\-]?[0-9]+$/
      ],
    
      stringLiterals: [
        /'([^']*)'/,
        /"([^"]*)"/,
      ],
      directives: [
        /^\$[A-Za-z_][A-Za-z0-9_]*$/
      ]
};

module.exports = TokenSpecify;