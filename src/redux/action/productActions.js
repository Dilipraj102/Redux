import { Actiontypes } from "../contants/Action-types"

export const setProducts = (products) =>{
    return {
        type : Actiontypes.SET_PRODUCTS,
        payload:products
    };
};

export const selectedProduct = (product) =>{
    return{
        type : Actiontypes.SELECTED_PRODUCT,
        payload:product
    };
};

export const removeSelectedProduct = () =>{
    return{
        type : Actiontypes.REMOVE_SELECTED_PRODUCT,
    };
};


