const { BUY_CAKE, BUY_ICECREAM } = require('../constants/constants');

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "buying cake"
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "buying ice cream"
    }
}

module.exports = { buyCake, buyIceCream };