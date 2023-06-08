import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIndexItem from './CartIndexItem';
import { fetchCartItems, thunkCheckout } from "../../store/cart_items";
import './CartIndex.css';
import { useHistory } from "react-router-dom";


const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems).filter(item => item.purchased === false));
    // don't need the cartitems in the state because they won't even show up if they're not there.
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const CartListItems = cartItems.map((cartItem) => <CartIndexItem cartItem={cartItem}/>)

    let cartTotal = 0;
    cartItems.forEach(item => cartTotal += (item.product.price * item.quantity));
    
    let numCartItems = 0;
    cartItems.forEach(item => numCartItems += item.quantity);

    const subtotalText = numCartItems === 1 ? '1 item' : `${numCartItems} items`;

    const handleCheckout = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {return null}

        const cartItemIDs = cartItems.map(item => item.id);
        dispatch(thunkCheckout(cartItemIDs));
        history.push('/thankyou')
    }



    return (
        <div id='cartIndexContainer'>
          <div id='cartIndexLeft'>
              <div id='cartHeader'>
                <div id='shoppingCartTextDiv'>
                    <p>Shopping Cart</p>
                </div>
                <div id='shoppingCartPriceDiv'>
                    <p>Price</p>
                </div>
                <hr id='cartHR'/>
              </div>
                <div id='allCartItems'>
                  {CartListItems}
                  {/* <p>go buy some items or something</p> */}
                </div>
          </div>
          <div id='cartIndexRight'>
              <div>
                <span>Subtotal ({subtotalText}): </span><span id='subtotalSpan'>${cartTotal.toFixed(2)}</span>
              </div>
              <button id='checkoutButton' onClick={handleCheckout}>Complete Purchase</button>
          </div>
        </div>
    )
}


export default CartIndex;