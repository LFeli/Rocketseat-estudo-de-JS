/*

Buscando e contando dados de um Array

    * Contar o números de categorias e o números de livros em cada categoria
    * Contar números de autores
    * Mostrar livros do Autor Cury
    * Transforma a função acima em uma função que irá receber o nome do autor 
    e devolveros livos dels

*/


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalCategorys = booksByCategory.length

// total de categorias
console.log(`Total de categorias: ${totalCategorys}`);

// total de livros de cada categoria
for(let category of booksByCategory){
    console.log(`Total de livros da categoria: ${category.category}, são ${category.books.length}`);
}

// Contar numero de autores
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log(`Total de autores são: ${authors.length}`);
}

//Livros do autor Agusto Cury
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`livros do autor ${author}: ${books.join(", ")}`);
}

countAuthors()

booksOfAuthor('Augusto Cury')