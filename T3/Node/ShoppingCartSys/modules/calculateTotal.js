const cart = require("../data/cart");

function calculateTotal() {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    console.log(`Total: $${total}\n`);
}

module.exports = calculateTotal;
