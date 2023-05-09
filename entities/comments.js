module.exports = class Comments{
    static get comments_static_list()
    {
        const comments = [
            '(*', ')*',
            '{', '}'
          ];
        return comments
    }
}