const obj = [
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
    }
]

"Country":"USA, UK",
        "Awards":"Won 4 Oscars. Another 152 wins & 217 nominations."
    }
]


for(let i=0; i<obj.length; i++){
    let filmes= obj[i]
    console.log(filmes.Title);
    console.log(filmes.Year)

    let genero= filmes.Genre.split(","); 

    for(let j=0; j<genero.length; j++){
        console.log(genero[j])
    }
}