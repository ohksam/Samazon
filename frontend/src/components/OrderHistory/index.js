import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './OrderHistory.css';
import { useEffect } from 'react';
import { fetchCartItems } from '../../store/cart_items';
import HistoryIndexItem from './HistoryIndexItem';


const OrderHistory = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => Object.values(state.cartItems).filter(item => item.purchased === true));
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [dispatch])

    const HistoryListItems = cartItems.reverse().map((cartItem) => <HistoryIndexItem cartItem={cartItem}/>)

    return (
        <div id='cartIndexContainer'>
        <div id='cartIndexLeft'>
            <div id='cartHeader'>
              <div id='shoppingCartTextDiv'>
                  <p>Order History</p>
              </div>
              <div id='shoppingCartPriceDiv'>
                  <p>Price</p>
              </div>
              <hr id='cartHR'/>
            </div>
              <div id='allCartItems'>
                {HistoryListItems}
              </div>
        </div>
        </div>
    )
}

export default OrderHistory;