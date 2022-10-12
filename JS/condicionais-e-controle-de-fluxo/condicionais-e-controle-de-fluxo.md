## Control Flow

O controle de fluxo nos ajuda a criarmos o nosso algoritmo além de alterar o fluxo atual, que seria linha por linha para se algo faça tal coisa se não outra coisa e por ai vai.

## If e Else

A sintaxe do **if** e do **else** e bem simples, e a mesma do JAVA.
```js
if(condicional){
    // faça algo aqui
} else {
    // se não aqui
}
```
Além disso e permitido no JS o ```else if``` que facilita muito nas verificações com vários valores.

## Switch (Switch case)

Switch um dos principais controles de fluxos utilizados pois permite a infinidades de **cases** e bem simples de ser utilizado, sua sintaxe se compõem da seguinte maneira.
```js
switch(expressao){
    case 1:
        //codigo ...
        break;
    case 2: 
        // codigo ...
        break;
    
    default:
        // codigo ...
        break;
    // ......
}
```

## Throw e Try / Catch

A ideia seria o Throw em sua tradução livre (lançar) lançarmos um erro, e quando tentarmos executar um bloco de código (**try**), caso ocorrer algum erro ser capturado (**catch**). Abaixo a sintaxe do try / catch
```js
try {
    //codigo
} catch (parametro-Para-Receber) {
    //codigo
}
```
