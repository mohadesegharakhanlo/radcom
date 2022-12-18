import {SET_ALL_PRODUCTS , SET_PRODUCT} from '../constant'

const initialState = {
    products : [] ,
    product : null

};

export const setProductsReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case SET_ALL_PRODUCTS:

            return {...state , products : payload}

        case SET_PRODUCT :
            
            return {...state , product : payload}

        default:
            return state
            break;
    }
}
