const redux = require('redux');
const createStore = redux.createStore;
const { cakeReducer, iceCreamReducer } = require('./reducers/reducer');
const { buyCake, buyIceCream } = require('./actions/action');
const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });
const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
