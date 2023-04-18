class LexicalAnalysis{
    constructor(expression)
    {
        this.expression = expression   
    }
    run()
    {
        const words = this.expression.split(/\s+/);

        const cleanedWords = words.map(word => word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, ''));

        const filteredWords = cleanedWords.filter(word => word !== '');

        return filteredWords;
    }
}

