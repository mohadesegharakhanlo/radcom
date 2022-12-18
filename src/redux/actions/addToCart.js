import {ADD_CART , REMOVE_ITEM , UPDATE_ITEM } from '../constant';


export const addToCartAction = (item) => {
    return {
        type : ADD_CART,
        payload : item
    }
}

export const removeItemAction = (id) => {
    return {
        type : REMOVE_ITEM , 
        payload : id
    }
}

export const updateItemAction = (id) => {
    return {
        type : UPDATE_ITEM ,
        payload : id
    }
}
