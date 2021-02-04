/* 
    # Buscando e contando dados em Arrays #

 Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

  - Contar o número de categorias e o número de Livros em cada categoria
  - Contar o número de autores
  - Mostrar livros do Autor Augusto Curry
  - Transformar a função acima em uma função que irá receber o nome do autor
    e devolver os livros desse autor
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
            title: "Pai rico, Pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficaez",
                author: "Stephen R. Corvey",
            },

        ],
    },
];

// Contar o número de categorias
const totalCategories = booksByCategory.length

// o número de Livros em cada categoria
console.log(totalCategories)
for(let category of booksByCategory) {
    console.log('Total de livro da categoria: ', category.category)
    console.log(category.books.length)
}

// - Contar o número de autores
function countAuthors () {
    let authors = [];

    for(let category of booksByCategory) { // Esse pega as categorias
        for(let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

// - Mostrar livros do Autor Augusto Curry

function booksOfAugustoCury () {
    let books = [];

    for(let category of booksByCategory) { // Esse pega as categorias
        for(let book of category.books) {
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}
booksOfAugustoCury();

// Transformar a função acima em uma função que irá receber o nome do autor
// e devolver os livros desse autor

function booksOfAuthor (author) {
    let books = [];

    for(let category of booksByCategory) { // Esse pega as categorias
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books}`)
}
booksOfAuthor('Augusto Cury');
