/**
 * Recieves a character by the given random number
 * @param {int} id 
 * @returns 
 */
async function recieveAPIData(id){

    let cont = true; 

    while(cont){

        const ship = await fetch(`https://swapi.dev/api/starships/${id}`) ;

        if (ship.ok) {

            const data = await ship.json();

            cont = false ;

            let element = {
                name: data.name 
            }

            return element;

        } else {

            id = randomNum(1,36)

        }
    }

}
