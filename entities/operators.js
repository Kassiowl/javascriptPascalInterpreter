module.exports = class Operators{
    static get operators_static_list()
    {
        const operators = [
            '+',
            '-',
            '*',
            '/',
            '%',
            '=',
            '<>',
            '>',
            '<',
            '>=',
            '<=',
            'and',
            'and then',
            'or',
            'or else',
            'not',
          ];
        return operators
    }
}