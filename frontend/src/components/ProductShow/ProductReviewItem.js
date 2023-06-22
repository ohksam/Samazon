import { deleteReview } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";

const ProductReviewItem = ({ review }) => {
  const updatedAt = review.updatedAt;
  const parsed = new Date(updatedAt);
  const formattedDate = parsed.toLocaleDateString();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const filledStars = review.rating;
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
      &#9733;
    </span>
  ));

  const handleDeleteReview = e => {
    e.preventDefault();

    dispatch(deleteReview(review.id))
  }

  const reviewButton = sessionUser?.id === review.reviewerId ? (
    <button id="reviewDeleteButton" onClick={handleDeleteReview}>Delete</button>
  ) : null;



  return (
    <div id='individualReviewContainer'>
      <h1 id='individualReviewTitle'>{review.title}</h1>
      <div className="star-rating">{stars}</div>
      <h2 id='verified'>Verified Purchase</h2>
      <p>{review.body}</p>
      <p id='reviewDate'>Reviewed on {formattedDate}</p>
      {reviewButton}
    </div>

  );
};

export default ProductReviewItem;


