import { OPEN_DRAWER } from "../constant";

const initialState = {
    drawerFlag : false
}

export const openDrawerReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case OPEN_DRAWER:

            return {...state , drawerFlag : payload}

        default:
            return state
            break;
    }

}