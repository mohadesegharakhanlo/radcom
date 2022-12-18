import {ADD_CART , REMOVE_ITEM , UPDATE_ITEM , TOTAL_PRICE} from '../constant';

const initialState = {
    cartItems : [] ,
    totalPrice : 0 ,
}

export const addToCart = (state = initialState , {type , payload}) => {
    switch (type) {
        case ADD_CART:
            const duplicate = state.cartItems.find(e => e.id == payload.id);
            if(duplicate) {
                return {
                    ...state ,
                    cartItems : state.cartItems.map((item) => {
                        if(item.id == duplicate.id ) {
                            item.count += payload.count
                        }
                        return item
                    })
                }

            } else {
                return {...state , cartItems : [...state.cartItems , payload]}
            }
        case REMOVE_ITEM : 
            return {
                ...state ,
                cartItems : state.cartItems.filter(e => e.id !== payload)
            }
        case UPDATE_ITEM : 
            const checkItem = state.cartItems.find(e => e.id == payload);
            if(checkItem) {
                return {
                    ...state , 
                    cartItems : state.cartItems.map((item) => {
                        if(item.id == payload){
                            item.count -= 1
                        }
                        return item
                    })
                }
            }
        
        default:
            return state
            break;
    }
}