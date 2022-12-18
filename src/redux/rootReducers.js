import { combineReducers } from "redux";
import {setProductsReducer} from './reducers/setProductsReducer'
import {addToCart} from './reducers/addToCartReducer'

const rootReducers = combineReducers({
    setProducts : setProductsReducer,
    addToCart : addToCart,
});

export default rootReducers