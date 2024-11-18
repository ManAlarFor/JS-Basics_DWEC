/**
 * Recieves a character by the given random number
 * @param {int} id 
 * @returns 
 */
async function recieveAPIData(id){

    console.log(id) ;

    const wish = await fetch(`https://fakestoreapi.com/products/${id}`) ;

    if (!wish.ok) {

        throw new Error(`Response status: ${wish.status}`);

    }

    const data = await wish.json();

    let element = {
        name: data.title, 
        img: data.image 
    }

    return element;

}
