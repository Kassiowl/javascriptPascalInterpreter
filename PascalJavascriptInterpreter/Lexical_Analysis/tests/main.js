const LexicalAnalysis = require("../lexical_analysis")


lexical = new LexicalAnalysis()
console.log(lexical.lexical_analysis("program HelloWorld; var num1, num2, sum, product: integer; begin write('Hello, World! '); \
                                        num1 := 5; num2 := 3; sum := num1 + num2; product := num1 * num2; write\
                                        ('The sum of ', num1, ' and ', num2, ' is: ', sum, ' \
                                        The product of ', num1, ' and ', num2, ' is: ', product); readln; end."))