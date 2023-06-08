// const ProductReviewItem = ({review}) => {

//   const updatedAt = review.updatedAt;
//   const parsed = new Date(updatedAt);
//   const formattedDate = parsed.toLocaleDateString();


//   return (
//     <div id='reviewContainer'>
//       <h1 id='individualReviewTitle'>{review.title}</h1>
//       <span>{review.rating} in stars</span>
//       <span>"verified purchase"</span>
//       {review.body}
//       reviewed on {formattedDate} 
//     </div>
//   )
// }

// export default ProductReviewItem;


const ProductReviewItem = ({ review }) => {
  const updatedAt = review.updatedAt;
  const parsed = new Date(updatedAt);
  const formattedDate = parsed.toLocaleDateString();

  const filledStars = review.rating;
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
      &#9733;
    </span>
  ));

  return (
    <div id='individualReviewContainer'>
      <h1 id='individualReviewTitle'>{review.title}</h1>
      <div className="star-rating">{stars}</div>
      <h2 id='verified'>Verified Purchase</h2>
      <p>{review.body}</p>
      <p id='reviewDate'>Reviewed on {formattedDate}</p>
    </div>

  );
};

export default ProductReviewItem;


