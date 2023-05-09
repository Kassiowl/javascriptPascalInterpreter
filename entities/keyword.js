module.exports = class KeyWords{
    static get keywords_static_list()
    {
        const keywords = [
            'array', 'begin', 'case', 'const',
            'div', 'do', 'downto', 'else', 'end',
            'file', 'for', 'function', 'goto', 'if',
            'in', 'label', 'mod', 'nil', 'not',
            'of', 'packed', 'procedure', 'program',
            'record', 'repeat', 'set', 'then', 'to',
            'type', 'until', 'var', 'while', 'with',
            'writeln'
          ];
          
        return keywords
    }
}