## Prototype

Podemos dizer o JS e uma linguagem baseada em protótipo, e um exemplo disso seria se digitassimos ```{}``` em um console em algum navegador ele irá mostrar um objeto ```[Prototype]```, e nesse prototipos já temos funcionalidades e propriedades. Assim visualizando a **Prototype chain**. Cada um dos tipos de dados são "embrulhados" e assim uma série de funcionalidades ja criada

Para acessar o prototipo de algum item basta colocar ```__proto__``` 

A vantagen de usar e que se usarmos o ".", acessar algumas "funcionalidades ja criada" como exemplo o "**Lenght**". (**OBS:** Para números do tipo float para acessarmos o proto e necessario seguir uma regra mais específica, ```13.1.__proto__```)


## Type conversion (typecasting) e Type coersion
Alteração de um tipo de dado. A diferença mais clara que a **type conversion** ela converte explicitamente um tipo de dado, já a type coersion e o JS implicitamente fazendo essa troca.

## String em Números
Para transformar string para números usamos o ```Number()```, e para números em string o ```String()```

## Contando Caracteres e dígitos
Para contar caracteres usamos o ```.Lenght```, para numeros nos transformamos ele em string e aplicamos o mesmo para contar caracter.

## Casas decimais
Para limitarmos as casas exibidas nos usamos a propriedade Number, junto com um método ".ToFixed", assim ficando ```Number(suaVariavel).toFixed(numeroParaLimitar)```.

Para trocarmos o ponto por vírgula nos iremos usar o método replace passando como argumento o que queremos trocar pelo o que, ```Number(suaVariavel).toFixed(numeroParaLimitar).replace(".",',')```

## Minúsculo e maiúsculo
Para Maiúsculo e ```toUpperCase()``` e Minúsculo e ```toLowerCase()```.

## Separando strings
No JS podeser usar uma método chamado ```slipt``` que faz uma "separação". E para juntarmos podemos utilizar o ```join``` que ele irá juntar palavras e so precisamos passar como parâmetro o que queremos por entre as frases.
```js
let pharseSeparated = myArray.join("-")
```

## Verificando palavras
Para verificarmos se existe uma palavra especifica em uma String e nos retornar um resultado Boolean podemos utilizar o método ```includes("suaPalavraAqui")``` OBS : O includes ele e **caseSensitive**, então uppercase e lowcase fazem diferença.  

## Array com construtor
Para criarmos um array com construtor no JS e muito simples basta apenas utilizar a seguinte sintaxe.
```js
let myArray = new Array(10)
```

## Contar elementos de um array
Contar elementos de um array e bem simples, e a mesma ideia de String então basta apenas utilizar ```.lenght```

## String para um array
No JS podemos transformar uma string em um array utilizando um método muito simples chamado ```Array.from(suaString)``` assim ele vai pegar sua frase e separar palavra por palavra e colocando em uma posição do array

## Mais manipulações de Arrays

O método ```.push()``` nos permite adicionar um item no final do array, enquanto o ```.unshift()``` ele adicona no começo do array. Para remoções podemos utilizar o método ```.pop()``` ele puro mesmo e irá remover o item que está no final do array, ja para começo ```.shift()```.

Para selecionarmos uma quantidade específica de elementos no array usamos o ```.slice(p1, p2)``` que vai receber como **p1** o inicio do array e o **p2** até aonde e para ir. Para remover vários elementos de um array utilizamos o seguinte método ```.splice(p1 , p2)``` e a mesma lógica do slice de p1 e p2 se aplica no splice.

Para acharmos a posição de um elemento especifico, nos utilizamos o ```.indexOf('seuItemAqui')```