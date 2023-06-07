import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Placeholder from '../../assets/images/Placeholder.jpg';
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../store/cart_items";
// import { fetchCartItem } from "../../store/cart_items";
import { deleteCartItem } from "../../store/cart_items";

const CartIndexItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleAdjustQuantity = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity); //apparently this is async??

    // const updatedItem = {quantity: newQuantity, ...cartItem};
    const updatedItem2 = {...cartItem, quantity: newQuantity};
    // console.log(updatedItem)
    console.log(updatedItem2)
    dispatch(updateCartItem(updatedItem2));
  }



  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(deleteCartItem(cartItem.id))
  }


  // ***the .product association doesn't give me access to the product??
  // const cartImage = cartItem.product.photo ? cartItem.product.photo.url : Placeholder;
  // const product = Product.find() <-- how to do this in js :(
  const cartImage = Placeholder;

  return (
    <>
    <div id='cartItemContainer'>
      <div id='cartItemImage'>
        <Link to={`/products/${cartItem.productId}`}>
          <img id="cartImg" src={cartImage} alt='cartItemImage' />
        </Link>
      </div>
      <div id='cartItemEditOptions'>
        <Link id='cartItemName' to={`/products/${cartItem.productId}`}>
          {cartItem.product.name}
          {/* product.name isn't working */}
        </Link>
        {/* <div>Qty: {cartItem.quantity}</div> */}
        <div id='changeQuantityOrDelete'>Qty:
          <select id="cartItemQuantityDropdown" value={quantity} onChange={handleAdjustQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button id='cartItemDelet' onClick={handleDelete}>TO THE TRASH</button>
        </div>
      </div>
      <div id='quantityTimesPrice'>
        {quantity} x ${cartItem.product.price}
      </div>
    </div>
    <hr id='cartItemDividers'></hr>
    </>
  )
}

export default CartIndexItem;