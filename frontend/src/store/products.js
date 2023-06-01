import csrfFetch from "./csrf";

// action type constants
const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';

// action creators
const receiveProducts = (products) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}

const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

// THUNKs
export const fetchProducts = () => async dispatch => {
    const response = await csrfFetch('/api/products')
    const products = await response.json();

    dispatch(receiveProducts(products))
}

export const fetchProduct = () => async dispatch => {
    const response = await csrfFetch('/api/products')
    const product = await response.json();

    dispatch(receiveProduct(product))
}

// Reducer
const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, ...action.products};
        case RECEIVE_PRODUCT:
            nextState[action.product] = action.product;
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;