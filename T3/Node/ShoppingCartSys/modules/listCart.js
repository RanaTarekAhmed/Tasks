const cart = require("../data/cart");

function listCart() {
    console.log("\n==== Cart ====\n");
    if (cart.length === 0) 
    {
        console.log("Cart is empty.\n");
        return;
    }
    cart.forEach(product => {
        console.log(`${product.id} || ${product.name} || $${product.price}`);
        console.log(`========================\n`);
    });
}

module.exports = listCart;
