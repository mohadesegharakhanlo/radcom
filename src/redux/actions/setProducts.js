import axios from "axios";
import {SET_ALL_PRODUCTS , SET_PRODUCT} from '../constant'

export const setProductsAction = () => {
    return async (dispatch) => {
        const {data} = await axios.get("https://api.escuelajs.co/api/v1/products");
        const sliceData = data.slice(0 , 50)
        dispatch({
            type : SET_ALL_PRODUCTS ,
            payload : sliceData
            
        })
    }
};

export const setProductAction = (id) => {
    return async (dispatch) => {
        const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        dispatch({
            type: SET_PRODUCT ,
            payload : data
        })
    }
}
