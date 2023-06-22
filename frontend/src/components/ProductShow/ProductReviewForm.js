import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReview } from "../../store/reviews";

const ProductReviewForm = ({ product }) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(1);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleReviewSubmit = e => {
        e.preventDefault()

        const reviewObject = {
            title: title,
            body: body,
            rating: rating,
            reviewer_id: sessionUser.id,
            product_id: product.id
        }
        dispatch(createReview(reviewObject))

        setTitle('');
        setBody('');
        setRating(1);
    }

    if (!sessionUser) return null
    return (
        <form id='reviewForm' onSubmit={handleReviewSubmit}>
            <label>Add a headline
                <br></br>
                <input
                    placeholder="What's most important to know?"
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>Add a written review
                <textarea
                    placeholder="Please provide details"
                    type='text'
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>Overall rating
                <select onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button>Submit</button>

        </form>
    )
}


export default ProductReviewForm;