module.exports = class Comments{
    static get delimiters_static_list()
    {
        const delimiters = [
            ',', ':', ';', '.', '(', ')',
            '[', ']', '{', '}'
          ];
        return delimiters
    }
}