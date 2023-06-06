import csrfFetch from "./csrf";

// action type constants
const RECEIVE_CART_ITEMS = 'cart_items/RECEIVE_CART_ITEMS';
const RECEIVE_CART_ITEM = 'cart_items/RECEIVE_CART_ITEM';
const REMOVE_CART_ITEM = 'cart_items/REMOVE_CART_ITEM';

// action creators
const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}

//custom selectors if necessary


// THUNK
export const fetchCartItems = () => async dispatch => {
    const response = await csrfFetch('/api/cart_items')
    const cartItems = await response.json();

    dispatch(receiveCartItems(cartItems))
}

// export const fetchCartItem = (cartItemId) => async dispatch => { //not needed?

// }

export const createCartItem = (cartItem) => async dispatch => {
    const response = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })
    const data = await response.json();

    dispatch(receiveCartItem(data.item))
}

export const updateCartItem = (cartItem) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartItem)
    })
    const data = await response.json();

    dispatch(receiveCartItem(data.item))
}

export const deleteCartItem = (cartItemId) => async dispatch => {
    await csrfFetch(`api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    })
    dispatch(removeCartItem(cartItemId))
}

// reducer

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...state, ...action.cartItems };
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return state;
    }
}

export default cartItemsReducer;