const { BUY_CAKE, BUY_ICECREAM } = require('../constants/constants');

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
        default:
            return state;
    }
}

module.exports = {
    initialCakeState,
    cakeReducer,
    iceCreamReducer
}