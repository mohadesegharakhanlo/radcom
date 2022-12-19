import { OPEN_DRAWER } from "../constant";

export const openDrawerAction = (flag) => {
    return {
        type : 'OPEN_DRAWER',
        payload : flag
    }
}