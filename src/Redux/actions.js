import { PRODUCTS_DATA, PRODUCTS_FAILURE, PRODUCTS_REQ, PRODUCTS_SORT, PRODUCTS_SUCCESS } from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
    type:PRODUCTS_REQ,
    
});


export const getProductsSuccess = (payload) => ({
    type: PRODUCTS_SUCCESS,
    payload,
});

// action for get products failure

export const getProductsFailure = (payload) => ({
    type: PRODUCTS_FAILURE,
    payload,
});

// thunk call to fetch products  list
export const getproductsData = (payload) => ({
    type:PRODUCTS_DATA,
     payload,
});

// action object for sort  feature

export const sortProducts = (payload) => ({
    type:PRODUCTS_SORT,
    payload,
});
