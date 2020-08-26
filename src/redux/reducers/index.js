import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart
});

export default rootReducer;