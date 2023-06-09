import React from "react";
import { Link } from 'react-router-dom';
import Placeholder from '../../assets/images/Placeholder.jpg';

const ProductIndexItem = ({product}) => {

  const productImage = product.photoUrl || Placeholder;

    return (
      <div id="productContainer">
          <div id="productListingImageDiv">
            <Link to={`/products/${product.id}`}>
              <img src={productImage}/>
            </Link>
          </div>
          <Link id="productListingName" to={`/products/${product.id}`}>
            {product.name}
          </Link>
          {/* <div id="productListingRating">
            Rating: average product rating
          </div> */}
          <div id="productListingPrice">
            ${product.price}
          </div>
      </div>
    )
}

export default ProductIndexItem;