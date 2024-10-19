"use strict"

const button = document.getElementById('button');

let text = document.getElementById("text") ;

/**
 * Takes a random movie from the given elements of the API 
 * and displays some information about it in the textarea
 */
async function movie() {

    const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '84958484e8msh584f53226ac0506p16f8d3jsn1eb205613475',
                'x-rapidapi-host': 'imdb188.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                limit: 200,
                releaseDate: {
                    releaseDateRange: {
                        end: '2029-12-31',
                        start: '2000-01-01'
                    }
                },
                userRatings: {
                    aggregateRatingRange: {max: 10, min: 8},
                    ratingsCountRange: {min: 1000}
                },
                runtime: {
                    runtimeRangeMinutes: {max: 120, min: 0}
                }
            })
        };

    text.value = "Loading Content..." ;

    stringMod(12) ;


    try {

        const response = await fetch(url,options);


        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();

        const min = 0;

        const max = data.data.list.length-1;

        let change = Math.floor(Math.random() * (max - min + 1) + min);

        text.value = `The movie "${data.data.list[change].title.titleText.text}" was released in ${data.data.list[change].title.releaseYear.year}`;

        image.src = `${data.data.list[change].title.primaryImage.imageUrl}` ;

    } catch (error) {

        text.textContent = 'Ocurrió un error al conseguir los datos.';
    }

}