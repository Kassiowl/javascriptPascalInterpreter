module.exports = class Operators{
    static get operators_static_list()
    {
        const operators = [
            "+",
            "-",
            "*",
            "/",
            "div",
            "mod",
            "and",
            "or",
            "not",
            "=",
            "<>",
            "<",
            "<=",
            ">",
            ">=",
            ":=",
            "..",
            "(",
            ")",
            "[",
            "]",
            "^",
            "@",
            ".",
            ",",
            ";",
            ":"
          ];
        return operators
    }
}