module.exports = class KeyWords{
    static get keywords_static_list()
    {
        const keywords = [
            'auto', 'break', 'case', 'char', 'const', 'continue',
            'default', 'do', 'double', 'else', 'enum', 'extern',
            'float', 'for', 'goto', 'if', 'int', 'long',
            'register', 'return', 'short', 'signed', 'sizeof', 'static',
            'struct', 'switch', 'typedef', 'union', 'unsigned', 'void',
            'volatile', 'while', 'class'
          ];
          
        return keywords
    }
}