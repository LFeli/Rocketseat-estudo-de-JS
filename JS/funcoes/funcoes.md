## Estrutura base
Para criar uma função qualquer e necessário uma estrutura miníma, sua declaração .
```js
function nomeDaFuncao() {}
```

Para chamar a função basta chamar a função ```nomeDaFuncao()```
<br>

E possivel criar funções em variáveis.
```js
//Função anonima
const sum = function(){}
```
## Passagem de parâmetros
E possivel nas funções nos passarmos algum tipo de parametro para que ela posse executar uma determinada função, para isso quando fomos criar dentro do parenteses e possivel dar um nome para esses parametros.  
```js
const sum = funcition(number1, number2){
    console.log(number1 + number2)
}

sum(2,3)
```
Difrente do **Java** que precisamos declarar que tipo de variavel os parametros são, aqui basta digitar o nome que quiser e passar os dados em sequência.


## Retornar valores
Se tentarmos criar um ```console.log``` com interpolação e chamando essa função acima do jeito que esta teremos um erro de **undefined** pois ela irá chamar,executar e retornar algo. Para retornarmos como valor essa função precisamos altera-lá um pouco.
```js
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let n1 = 2
let n2 = 3

console.log(`O resultado da soma e: ${sum(n1,n2)}`)
```

Uma curiosidade se notar não declaramos o total como variavel, porém se dermos um console.log chamando ela, ela irá mostrar o resultado, e isso e um perigo pois pode ocorrer de termos essas variaveis "fantasmas" dentro do nosso código e pode ocorrer problemas futuros.

## Function scope (Scopo da função)
A função dependendo se há passagem de parâmetros ela pode alterar o seu scopo.
```js
let subject

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject);
console.log(createThink())
console.log(subject);
```
Por exemplo, o no codigo acima nos temos uma variávek '**subject**' que esta **undefined**, e após chamar a função ele atualiza a variavel, agr se tivesse um valor ja desiginado e passagem de parâmetros ocorreria uma saída diferente.
```js
let subject = 'create a video'

function createThink() {
    let  subject = 'study'
    return subject
}

console.log(subject);
console.log(createThink())
console.log(subject);
```
Neste caso só irá alterar a saída quando rodarmos a função vai exebir '**study**', caso contrário ele ficará exibindo '**create a video**'.

## Function Hoisting
Ocorre quando nós chamamos uma função antes de ser criada, porém o JS embaixo dos panos ele eleva a criação da função antes de sua chamada e executa normalmente.
```js
sayMyName();

function sayMyName(){
    console.log('Mayk')
}
```
Porém se fizermos uma variável com uma função anônima isso não irá ocorrer. 

## Arrow function
E uma forma mais compacta e atual de escrever funções do tipo expression.  
Geralmente atribuimos ela como constante, porém ela não sofre o **Hoisting**, Abaixo uma function express comun e uma arrow funcition
```js
//Função comun

const sayMyName = function(){
    console.log('Lucas')
}

sayMyName()
```
```js
//Arrow function
const sayMyName = () => {
    console.log('Lucas')
}

sayMyName()
```

## Callback function
E nada mais que uma função que está passando de parâmetro para outra função, abaixo um exemplo de callback.
```js
function sayMyName(name){
    console.log('Antes da callback');

    name()

    console.log('Depois da callback');
}

sayMyName(
    () =>{
        console.log('Estou em uma callback');
    }
)
```

## Funções construtoras
Para criarmos uma função construtura e um pouco semelheante ao Java, inicialmente você irá criar uma função como qualquer outra, mas com um simples detalhe que seu nome a primeira letra está em maiúsculo(Não e obrigatório mas e uma boa prática).
```js
function VideoGame(){}
```
E depois basta apenas instanciar.
```js
function VideoGame(){}

const PlayStation 4 = new VideoGame()
```
Após isso ja temos uma função construtora, e estará herdando as infromações da função mãe, E para setarmos parâmetros e igual no Java.
```js
function VideoGame(modelo){
    this.modelo = modelo
}
```