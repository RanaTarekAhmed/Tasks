const cart = require("../data/cart");

function removeFromCart(id) 
{
    const index = cart.findIndex(product => product.id === id);

    if (index === -1) 
    {
        console.log("Product not found in cart.\n");
        return;
    }
    const removed = cart.splice(index, 1)[0];
    console.log(`${removed.name} removed from cart.\n`);
}

module.exports = removeFromCart;
