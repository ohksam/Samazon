// import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import whiteSamazonLogo from '../../assets/images/WhiteSamazon.png';
import './Navigation.css';
import gitHubLogo from '../../assets/images/gitHubLogo.png';
import linkedInLogo from '../../assets/images/linkedInLogo.png';
import cartIcon from '../../assets/images/cartIcon.png';
import { fetchCartItems } from '../../store/cart_items';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [cartItemsFetched, setCartItemsFetched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();

    if (searchTerm.length === 0) {
      history.push('/');
    } else {
      history.push(`/search/${searchTerm}`)
    }
  }

  useEffect(() => {
    if (!location.pathname.includes('search')) setSearchTerm('');
  }, [location.pathname])

  const sessionButton = (
    <ProfileButton user={sessionUser} />
  )

  const handleHistoryClick = () => {
    if (!sessionUser) {
      history.push('/login')
    } else {
      history.push('/history')
    }
  }

  useEffect(() => {
    if (sessionUser) {
      dispatch(fetchCartItems()).then(() => {
        setCartItemsFetched(true);
      });
    } else {
      setCartItemsFetched(false);
    }
  }, [sessionUser, dispatch])

  const cartItems = useSelector(state => Object.values(state.cartItems).filter(item => item.purchased === false));
  let numCartItems = 0;
  if (cartItemsFetched) {
    cartItems.forEach(item => numCartItems += item.quantity);
  } else {
    numCartItems = 0;
  }

  const categories = ['books', 'electronics', 'home', 'active', 'food'];
  const categoryButtons = categories.map(category => (

    <NavLink to={`/categories/${category}`}>
      <button>{category.toUpperCase()}</button>
    </NavLink>
  ))

  const cartClickDestination = sessionUser ? '/cart' : '/login';



  if (location.pathname.includes('signup') || location.pathname.includes('login')) {
    return null
  } else {
    return (
      <div id="entireNavBar">
        <div id="topNavBar">
          <div className="navLeft">
            <div id="navIconContainer">
              <NavLink to='/'>
                {/* <a href='/'> */}
                <img id='navIcon' src={whiteSamazonLogo} alt='logo' />
                {/* </a> */}
              </NavLink>
            </div>
            <div id="navSocials">
              <div id='gitHubLogo'>
                <a href='https://github.com/ohksam/Samazon' target="_blank">
                  <img src={gitHubLogo} alt='gitHubLogo' />
                </a>
              </div>
              <div id='linkedInLogo'>
                <a href='https://www.linkedin.com/in/sam-oh-0abb8327b/' target="_blank">
                  <img src={linkedInLogo} alt='linkedInLogo' />
                </a>
              </div>
            </div>
          </div>

          <div className="navMid">
            <div id='navSearchContainer'>
              <form id='navSearchForm' onSubmit={handleSearch}>
                <input id='navSearchInput'
                  placeholder='Search Samazon'
                  type='text'
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <button>Search</button>
              </form>
            </div>
          </div>

          <div className="navRight">
            <div id='sessionButton'>
              {sessionButton}
            </div>
            <div>
              <button id='historyButton' onClick={handleHistoryClick}>Returns & Orders</button>
            </div>
            <div id='cartStuff'>
              <NavLink to={cartClickDestination}>
                <span id='cartItemCount'>{numCartItems}</span>
                <img id='cartImage' src={cartIcon} />
              </NavLink>
            </div>
          </div>
        </div>
        <div id="bottomNavBar">
          {categoryButtons}
        </div>
      </div>

    )
  }
}

export default Navigation;