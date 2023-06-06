import React from "react";
import { Link } from "react-router-dom";
import Placeholder from '../../assets/images/Placeholder.jpg';

const CartIndexItem = ({cartItem}) => {
    // debugger

    // ***the .product association doesn't give me access to the product??
    // const cartImage = cartItem.product.photo ? cartItem.product.photo.url : Placeholder;
    // const product = Product.find() <-- how to do this in js :(
    const cartImage = Placeholder;

    return (
        <div id='cartItemContainer'>
            <div id='cartItemImage'>
              <Link to={`/products/${cartItem.productId}`}>
                <img id="cartImg" src={cartImage} alt='cartItemImage'/>
              </Link>
            </div>
            <Link id='cartItemName' to={`/products/${cartItem.productId}`}>
                {cartItem.product.name}
                {/* product.name isn't working */}
            </Link>
        </div>
    )
}

export default CartIndexItem;