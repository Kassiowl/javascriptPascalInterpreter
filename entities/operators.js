module.exports = class Operators{
    static get operators_static_list()
    {
        const operators = [
            '+', '-', '*', '/', '%',     
            '++', '--',                  
            '==', '!=', '>', '<',       
            '>=', '<=',               
            '!', '~',                  
            '&', '|', '^',           
            '&&', '||',              
            '<<', '>>',                   
            '>>>',                         
            '=', '+=', '-=', '*=', '/=',   
            '%=', '&=', '|=', '^=',        
            '<<=', '>>=', '>>>='           
          ];
        return operators
    }
}