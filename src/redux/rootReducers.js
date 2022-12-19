import { combineReducers } from "redux";
import {setProductsReducer} from './reducers/setProductsReducer'
import {addToCart} from './reducers/addToCartReducer' 
import {openDrawerReducer} from './reducers/openDrawerReducer'

const rootReducers = combineReducers({
    setProducts : setProductsReducer,
    addToCart : addToCart,
    openDrawer : openDrawerReducer,
});

export default rootReducers