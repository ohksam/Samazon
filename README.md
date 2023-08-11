# Welcome to [Samazon](https://samazon.onrender.com/)!
![Basic Functionality Gif](frontend\src\assets\images\Production-ReadMe-Gif.gif)

Samazon is a web application designed to replicate the core functionalities of Amazon, allowing users to browse, purchase, and review products. Technologies implemented in this project include: 
- Languages: Javascript, Ruby
- Frontend: React, Redux
- Backend API: Rails
- Database: PostgreSQL
- Hosting: Render
- Asset Storage: AWS
- HTML/CSS


## Features

### Product Listings
When dispaying a product, the product ID is taken from the URL path parameters (useParams()). The component then utilizes this productID to fetch the corresponding item info (name, image, price, etc.) and review info (ratings & reviews).

```
const ProductShow = () => {
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const productImage = product?.photoUrl || Placeholder;
  const [quantity, setQuantity] = useState(1);
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchProduct(productId))
    dispatch(fetchReviews(productId))

  }, [dispatch, productId])

  if (!product) return <h1>loading...</h1>;

  const descriptionList = product.description ? product.description.split('*') : [];
  const descriptionListItems = descriptionList.map((sentence) => <li key={Math.random()}>{sentence}</li>)
```


### Cart Functionality
In order to ensure that the number of items displayed in the cart is accurate, the Navigation component is responsible for fetching the current session user's cart items. The cart index then retrieves these items from the state and filters by purchased status to replicate the experience of a cart without the need for an actual "Cart" class. 

```
  const handleAddToCart = (e) => {
    e.preventDefault();

    if (!currentUser) {
      history.push('/login')
    } else {
      const customer_id = currentUser.id;
      const product_id = productId;
      const theProduct = { quantity, customer_id, product_id };
      dispatch(createCartItem(theProduct));
      history.push('/cart')
    }
  }

  const handleBuyNow = (e) => {
    e.preventDefault();

    if (!currentUser) {
      history.push('/login')
    } else {
      const customer_id = currentUser.id;
      const product_id = productId;
      const theProduct = { quantity, customer_id, product_id, purchased: true };
      dispatch(createCartItem(theProduct));
      history.push('/thankyou')
    }
  }
  ```

### Reviews and Ratings
The Review form is a straightforward form that persists a review object to the database on successful submission:
```
const handleReviewSubmit = e => {
        e.preventDefault()

        const reviewObject = {
            title: title,
            body: body,
            rating: rating,
            reviewer_id: sessionUser.id,
            product_id: product.id
        }
        dispatch(createReview(reviewObject))

        setTitle('');
        setBody('');
        setRating(1);
    }
```
Only signed-up/signed-in users may review items, and users may only review an item once. If these conditions are not met, the form will be replaced with a friendly sign-up prompt or reminder to edit/delete their review instead:
```
if (!sessionUser) {
        return <p className="cantReview">Please sign in to review this product!</p>
    } else if (reviewers.includes(sessionUser.id)) {
        return <p className="cantReview">You've already reviewed this product. Use the buttons above to edit/delete your review!</p>
    }
```


### Search Functionality
Users are able to search the inventory for specific products. Similar to the Product Index component, the Search Results component utilizes the path parameters to filter the products by the search parameters.
(image & code)



## Future Implementations:
- Due to the small scale and simplicity of the project, some filtering is done on the frontend rather than the backend. In order to properly replicate a real-world app, product filtering/searching should be done on the backend to optimize performance and security.
