import csrfFetch from "./csrf";

// action type constants
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

// action creators
const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

// custom selectors if necessary
export const getReviews = (state) => state.reviews ? Object.values(state.reviews) : []

// THUNKs
export const fetchReviews = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/?product_id=${productId}`)
    const reviews = await response.json();

    dispatch(receiveReviews(reviews))
}
// more conventional would be a nested route /api/products/review

export const fetchReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)
    const review = await response.json();

    dispatch(receiveReview(review))
}

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    const data = await response.json();

    dispatch(receiveReview(data))
}

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    })
    const data = await response.json();

    dispatch(receiveReview(data))
}

export const deleteReview = (reviewId) => async dispatch => {
    await csrfFetch('/api/reviews', {
        method: 'DELETE'
    })
    dispatch(removeReview(reviewId))
}

// reducer
const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return {...action.reviews};
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;