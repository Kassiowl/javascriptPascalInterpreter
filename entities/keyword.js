module.exports = class KeyWords{
    static get keywords_static_list()
    {
        const keywords = [
            'abstract', 'else', 'import', 'super',
            'as', 'enum', 'in', 'switch',
            'assert', 'export', 'interface', 'synchronized',
            'async', 'extends', 'is', 'this',
            'await', 'false', 'namespace', 'throw',
            'break', 'finally', 'new', 'throws',
            'case', 'for', 'null', 'transient',
            'catch', 'function', 'of', 'true',
            'class', 'if', 'package', 'try',
            'const', 'implements', 'private', 'typeof',
            'continue', 'import', 'protected', 'var',
            'debugger', 'instanceof', 'public', 'void',
            'default', 'interface', 'return', 'volatile',
            'delete', 'let', 'static', 'while',
            'do', 'long', 'super', 'with',
            'double', 'native', 'switch', 'yield'
          ];
          
        return keywords
    }
}