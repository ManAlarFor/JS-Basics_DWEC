"use strict"

function movie() {

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

    

}