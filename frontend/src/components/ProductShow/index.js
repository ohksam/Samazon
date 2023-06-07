import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/products";
import Placeholder from '../../assets/images/Placeholder.jpg';
import './ProductShow.css';
import { useHistory } from 'react-router-dom';
import { createCartItem } from "../../store/cart_items";

const ProductShow = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const productImage = product.photoUrl || Placeholder;
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    if (!product) return null; //or return 'product not found :('

    const descriptionList = product.description.split('*'); //slice for testing
    const descriptionListItems = descriptionList.map((sentence) => <li key={Math.random()}>{sentence}</li>)
    // if you want, you can make an array of [1-5] and then .shift for each key

    const handleAddToCart = (e) => {
        e.preventDefault();

        if (!currentUser) {
          history.push('/login')
        } else {
          const customer_id = currentUser.id;
          const product_id = productId;
          const theProduct = {quantity, customer_id, product_id};
          dispatch(createCartItem(theProduct));
          history.push('/cart')
        }
    }

    return (
        <div id="productShowPage">
            <div id="productShowDiv">
                <div id="productShowLeft">
                  <div id="productShowImageDiv">
                      <img src={productImage} alt='placeholder' />
                  </div>
                </div>
                <div id="productShowMiddle">
                  <div id="productShowInfo">
                    <h1 id='productName'>{product.name}</h1>
                    <p id='productRating'>product rating</p>
                    <hr id='midDivide'></hr>
                    <p id='productPrice'>${product.price}</p>
                  </div>
                  <ul id="productShowDescriptionList">
                    {descriptionListItems}
                  </ul>
                </div>
                <div id="productShowRight">
                  <div id="productAddToCartDiv">
                    <h1 id='productPrice'>${product.price}</h1>
                    <p>FREE returns</p>
                    <p>FREE shipping</p>
                    <p>In stock</p>

                    <form id='productShowForm' onSubmit={handleAddToCart}> 
                      <span>Qty:</span>
                      <select id="quantityDropdown" onChange={(e) => setQuantity(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>

                      <button id='addToCartButton'>Add to Cart</button>
                    </form>
                    <button id='buyNowButton'>Buy Now</button>
                  </div>
                </div>
            </div>

            <hr id="productShowDivider"></hr>

            <div id="productRatingDiv">
              <h1>Customer reviews</h1>
            </div>
        </div>
    )
}


export default ProductShow;