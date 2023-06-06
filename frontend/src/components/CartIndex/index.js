import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIndexItem from './CartIndexItem';
import { fetchCartItems } from "../../store/cart_items";
import './CartIndex.css';


const CartIndex = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems));

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const CartListItems = cartItems.map((cartItem) => <CartIndexItem cartItem={cartItem}/>)

    const cartTotal = 0.00;

    const handleCheckout = (e) => {
        e.preventDefault();

        //checkout logic (set current cart_items boolean to true)
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
                  {/* <p>testing</p> */}
                  <p>if empty, 'click here to browse our items!' or something</p>
                </div>
          </div>
          <div id='cartIndexRight'>
              <div>
                <span>Subtotal: </span><span id='subtotalSpan'>${cartTotal}</span>
              </div>
              <button id='checkoutButton' onClick={handleCheckout}>Complete Purchase</button>
          </div>
        </div>
    )
}


export default CartIndex;