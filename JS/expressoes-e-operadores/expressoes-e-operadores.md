## Expressões e operadores

Expressão no e qualquer linha de código que resolve alguma coisa, o ponto e vírgula e opcional no JS. Já para operadores nós temos 3 tipos que são: **Binary , Urnary e Ternary**.

## New

Criar um novo objeto

## Operadores Unários

Typeof mostrará o tipo da variável, equanto o Delete ele exclui algo especifico de um objeto ( Desde que a propriedade exista ).

## Operadores aritméticos

Multiplicação nos utilizamos o ```*```, para divisão o operador e ```/```. Para soma o operador é ```+``` e subtração ```-```, para obtermos o resto de divisão e ```%```, incremeto utilizamos o ```++``` **OBS : O lugar aonde coloca o operador de incremento e decremento influência, pois quando colocamos antes da variável ele vai na linha e depoius será contando na proxima linha.** Exemplo : ```++variavel``` ele irá acrementar na mesma linha ```variavel++``` apenas na próxima linha o incremento estará na variável o mesmo vale par5a o decremento que seu operador é ```--``` e por ultimo temos o exponencial que seu operador e donominado por ```**```, e para usar precisa de dois parametros, exemplo: ```(variavel-1 ** variavel-2)```. 

## Grouping operator

São os ```()``` pois ele irá dar prioridade e agrupar.

## Operadores de comparação

Irá comparar dois valores e retornar um boolean, para comparações de iguais temos o ```==```, o diferente ```!=```.

Na mesma ideia de comparações iguais e diferente o JS nos permite comparar estritamente, pois ele compara não so o valor igual o normal, mas também seu tipo de elemento. E seu operadores são estritamente igual ```===``` e estritamente diferente ```!==```

Há também os operadores de maior e menor (igual), que e muito utilizado que são eles o Maior que ```>```, maior igual ```>=```, menor que ```<```, menor igual ```<=```.

## Operadores de atribuição

Atribuição simples, ```variavel = valor```, atribuição com operadores aritméticos, soma ```x += 4```, irá pegar a variável **x**, o seu valor atual e somar 4, o mesmo vale para subtração ```x -= 4```, multiplicação ```x *= 2```, divisão ```x /= 2```, resto de divisão ```x %= 3``` e exponencial ```x **= 2```.

## Operadores lógicos

Dois valores booleans que quando verificados retornam true ou false.

Operando AND ou ```&&```, so retornará como true se ambos operadores forém verdadeiros, diferente do OR ou ```||``` que apenas um precisa ser verdadeiro e por ultimo temos o NOT ou ```!``` que irá inverter os valores, exemplo: se x e falso, ao por ```!x``` ele se vai ficar verdadeiro.

## Operador condicional ternário

O operador ternário dependende das das condições ele pode retornar dois valores diferentes, como que fazemos na prática ? Muito simples, sua lógica e a seguinte ```condição ? valor-1 : valor-2```.

## Operadores para String

Operadores para strings nos temos o de comparação ```==```, o de concatenação que e o ```+``` no meio das strings que retorna a união de duas strings.

## Falsy e Truthy

### Falsy

Quando um valor e considerado false em contextos onde um boolean é obrigatório ( condicionais e loops).
```js
false
0
-0
null
undefined
NaN
```
Basicamente o JS ele faz um type coersion (Typecasting para os mais íntimos) para esses valores e atribui a falso nas situações especificadas acima.


### Truthy

E o inverso do **Falsy**, so que atribui o valor de true.
```js
true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
```

## Procedência de operadores (herarquia de operadores)

A ordem de operador mais importante para o menos importante no JS e a seguinte lista:
```
()                      // Grouping
! ++ --                 // Negação e incremento
* /                     // Multiplicação e divisão
+ -                     // Soma e subtração
< <= > >=               // Relacional
== != === !==           // Igualdade
&&                      // AND
||                      // OR
?:                      // Condicional
= += -= *=              // Atribuição
```

**Obs: essa tabela acima e apenbas uma pequena referência.**