const obj = [
    {
        "Title":"10 Things I Hate About You",
        "Year":"1999",
        "Rated":"PG-13",
        "Released":"31 Mar 1999",
        "Runtime":"97 min",
        "Genre":"Comedy, Drama, Romance",
        "Director":"Gil Junger",
        "Writer":"Karen McCullah, Kirsten Smith",
        "Actors":"Heath Ledger, Julia Stiles, Joseph Gordon-Levitt, Larisa Oleynik",
        "Plot":"A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
        "Language":"English, French",
        "Country":"USA",
        "Awards":"2 wins & 13 nominations."
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 86 wins & 129 nominations."
    },
    {
        "Title":"Inception",
        "Year":"2010",
        "Rated":"PG-13",
        "Released":"16 Jul 2010",
        "Runtime":"148 min",
        "Genre":"Action, Adventure, Sci-Fi, Thriller",
        "Director":"Christopher Nolan",
        "Writer":"Christopher Nolan",
        "Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "Language":"English, Japanese, French",
        "Country":"USA, UK",
        "Awards":"Won 4 Oscars. Another 152 wins & 217 nominations."
    },
    {
        "Title":"Doctor Strange",
        "Year":"2016",
        "Rated":"PG-13",
        "Released":"04 Nov 2016",
        "Runtime":"115 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Scott Derrickson",
        "Writer":"Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)",
        "Actors":"Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
        "Plot":"While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 20 wins & 65 nominations."
    },
    {
        "Title":"The Truman Show",
        "Year":"1998",
        "Rated":"PG",
        "Released":"05 Jun 1998",
        "Runtime":"103 min",
        "Genre":"Comedy, Drama, Sci-Fi",
        "Director":"Peter Weir",
        "Writer":"Andrew Niccol",
        "Actors":"Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        "Plot":"An insurance salesman discovers his whole life is actually a reality TV show.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 3 Oscars. Another 40 wins & 66 nominations."
    }
]


// 6) Do arquivo filmes.js retorne no terminal o Titulo, Ano e Genero. (desafio: apresente cada Genero em linhas separadas)

// (......................................................................................................)

// # 1 Trata-se de uma Array de objetos, sendo que as chaves e o valores dos objetos estão em formato de string, o Índice de cada objeto da array eu denominei como i, (pode ser demoninado como elemento, j e k para facilitar o entendimento na hora da construção e leitura do códico, (índice no caso em especifico é a posição do objeto que se encontra na array, lembrando que a contagem dos índices da array começa no zero)

// Iniciei meu código com um FOR para percorrer a array  "for( let i = 0; i < obj.length; i++){}'

// O índice "i" foi ultilizado para indicar o objeto dentro da array. A variável "let i = 0" começa no zero, ou seja, percorre o primeiro objeto da array, mas pode ser definido um outro inicio, a exemplor: 1, 2 ,3..
// O For funciona até que a condição seja verdadeira. condição: "i < obj.length"

// Você pode colocar "i < obj.length;" pois inclui todos os objetos da Array, pois dessa forma não será necessário saber quantos objetos tem na dentro da array. Mas se você souber quantos objetos tem dentro da array, pode colocar como por exemplo "i < 5.;" ou "i <= 4;"ou "i < 4 + 1;"

// // O "i++" é igual a "i + 1"


// // 1.1 Testando o que retorna no terminal(----------------------------------------)

// // console.log(obj)    -retornar a array com todos os objetos.

// // let retornar = obj[i]  - não retorna nada, pois eu não defini o "i" ( dentro do For retorna, pois eu havia definido)
// // console.log(retornar)

// // let retornar = obj[0]  -retorna o primeito elemento da array que eu definir dentro do colchete, ou seja, retorna todo o primeiro objeto
// // console.log(retornar)

// // let retornar = obj[2].Genre  -retorna somente o genero(eu quiz só o genero "Genre") do objeto definido dentro do colchete.
// // console.log(retornar)

// console.log(obj[3].Genre)          - sem criar varia´vel -retorna somente o genero(eu quiz só o genero "Genre") do objeto definido dentro do colchete.


// // for( let i = 0; i < obj.length; i++){  - Nesse exemplo, como o "i" está definido no for, eu consigo retorno. 
// //     let retornar = obj[i]              - Essa variável criada retorna ao terminal todos os objetos da array, porém não aparece os colchetes da array, porque o for está percorrendo a array( dentro da array). OBS: como eu queria percorre chave e valor do objeto, eu ultilizei esse método e depois tentei transformar os objetos em array( achei que seria mais fácil pecorrer em forma de array), porém não deu certo transformar o objeto em array.  
// //     console.log(retornar)              - Então, para percorrer elementos da array eu usei o For, e para percorrer os objetos ultizei um novo for entro do for da array.
// // }

// // for( let i = 0; i < obj.length; i++){   - Percorre toda a array e retorna todos os Tille "titulos" dos filmes 
// //     let retornar = obj[i]
// //     let tiulo = retornar.Title
// //     console.log(tiulo)
// }

// for( let i = 0; i < obj.length; i++){   - Também percorre toda a array e retorna todos os year "anos", igual no exemplo acima, porém de forma diferente.
//     let retornar = obj[i]
//     console.log(retornar.Year)
// }


// 1.2 Resoluções(---------------------------------------)

// for( let i = 0; i < obj.length; i++){
//     let retornar = obj[i]

//     let tiulo = retornar.Title
//     let ano = retornar.Year
//     let genero = retornar.Genre

//     console.log(tiulo)
//     console.log(ano)

//     let retornarGenero = genero.split(",")   - Como o genero esta retornando um do lado do outro, o desafio é retornar em linhas separadas, por tal motivo criei uma variável transformando o genero que estava em string para Array, e após fiz um for para percorrer a array e imprimir os generoem linhas separadas

//     for(let j = 0; j < retornarGenero.length; j++){ - como transformei em uma array, esse for percorre a array e retorna em linhas separads
//         console.log(retornarGenero[j])

//     }

// }


// Obs: A maioria dos retonos que coloquei acima aparecem no terminal somente os valores ( não aparecem as chaves)
