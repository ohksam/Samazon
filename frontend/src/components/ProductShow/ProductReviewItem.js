import { useState } from "react";
import { deleteReview, updateReview } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";

const ProductReviewItem = ({ review }) => {
  const updatedAt = review.updatedAt;
  const parsed = new Date(updatedAt);
  const formattedDate = parsed.toLocaleDateString();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(review.title);
  const [editedBody, setEditedBody] = useState(review.body);
  const [editedRating, setEditedRating] = useState(parseInt(review.rating, 10));

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

  const deleteButton = sessionUser?.id === review.reviewerId ? (
    <button id="reviewDeleteButton" onClick={handleDeleteReview}>Delete</button>
  ) : null;

  const toggleEditable = () => {
    setEditable(true);
  }

  const handleEditSubmit = e => {
    e.preventDefault();

    const reviewObject = {
      ...review,
      title: editedTitle,
      body: editedBody,
      rating: editedRating
    }

    setEditable(false);
    dispatch(updateReview(reviewObject))
  }

  const editButton = sessionUser?.id === review.reviewerId ? (
    <button id="reviewEditButton" onClick={toggleEditable}>Edit</button>
  ) : null;

  // const editButton = sessionUser?.id !== review.reviwerId || editable ? null : (<button id="reviewEditButton" onClick={toggleEditable}>Edit</button>);




  return (
    <div id='individualReviewContainer'>
      {!editable ? (
        <>
          <h1 id='individualReviewTitle'>{review.title}</h1>
          <div className="star-rating">{stars}</div>
          <h2 id='verified'>Verified Purchase</h2>
          <p>{review.body}</p>
          <p id='reviewDate'>Reviewed on {formattedDate}</p>
          {deleteButton}
        </>
      ) : (
        <form id="editForm" onSubmit={handleEditSubmit}>
          <label>Title
            <br></br>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          </label>
          <label>Body
            <br></br>
          <textarea
            type="text"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
          </label>
          <label>Overall rating
                <select value={editedRating}onChange={(e) => setEditedRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
          <button>Save</button>
        </form>
      )}
      {editButton}
    </div>
  );
};

export default ProductReviewItem;


