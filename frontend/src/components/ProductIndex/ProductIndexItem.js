import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'; //maybe use this to create a link TO THE ITEM on the image
import Placeholder from '../../assets/images/Placeholder.jpg';

const ProductIndexItem = ({product}) => {
    // const dispatch = useDispatch();

    // const handleClick = e => {
    //     //logic for navigating to show page - which might not be necessary if these render with an a-link already
    // }

    return (
          <div id="productContainer">
              <div id="productListingImage">
              <Link to={`/product/${product.id}`}>
                <img src={Placeholder}/>
              </Link>
              </div>
              <Link id="productListingName">
                {product.name}
              </Link>
              <div id="productListingRating">
                Rating: product.rating (oopsy)
              </div>
              <div id="productListingPrice">
                ${product.price}
              </div>
          </div>
    )
}

export default ProductIndexItem;