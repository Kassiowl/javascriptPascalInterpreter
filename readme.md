![Pascal Interpreter Architecture](pascalInterpreter.png)


program : 'program' identifier ';' block '.' ;

block : declarations compound_statement ;

declarations : 'var' (variable_declaration ';')* ;
variable_declaration : identifier (',' identifier)* ':' type_specifier ;

type_specifier : 'integer' | 'real' | 'boolean' ;

compound_statement : 'begin' statement_list 'end' ;

statement_list : statement (';' statement)* ;

statement : compound_statement | assignment_statement | if_statement | while_statement ;

assignment_statement : variable ':=' expression ;

if_statement : 'if' condition 'then' statement ('else' statement)? ;

while_statement : 'while' condition 'do' statement ;

condition : expression relational_operator expression ;

expression : term (('+' | '-') term)* ;

term : factor (('*' | '/') factor)* ;

factor : identifier | constant | '(' expression ')' ;

relational_operator : '=' | '<>' | '<' | '>' | '<=' | '>=' ;

identifier : letter (letter | digit)* ;
constant : digit+ ;

letter : 'a'..'z' | 'A'..'Z' ;
digit : '0'..'9' ;