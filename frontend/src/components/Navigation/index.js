// import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import whiteSamazonLogo from '../../assets/images/WhiteSamazon.png';
import './Navigation.css';
import gitHubLogo from '../../assets/images/gitHubLogo.png';
import linkedInLogo from '../../assets/images/linkedInLogo.png';
import cartIcon from '../../assets/images/cartIcon.png';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    const sessionButton = (
      <ProfileButton user={sessionUser} />
    )

    const cartItems = useSelector(state => Object.values(state.cartItems).filter(item => item.purchased === false));
    let numCartItems = 0;
    cartItems.forEach(item => numCartItems += item.quantity);

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
                    <a href='https://github.com/ohksam/Samazon'>
                      <img src={gitHubLogo} alt='gitHubLogo' />
                    </a>
                  </div>
                  <div id='linkedInLogo'>
                    <a href='https://www.linkedin.com/'>
                      <img src={linkedInLogo} alt='linkedInLogo' />
                    </a>
                  </div>
                </div>
            </div>

            <div className="navMid">
              <div id='navSearchContainer'>
                <form id='navSearchForm'>
                  <input id='navSearchInput' placeholder='Search Samazon'></input>
                  <button>Search</button>
                </form>
              </div>
            </div>

            <div className="navRight">
              <div id='sessionButton'>
                {sessionButton}
              </div>
              <div>
                <button id='historyButton'>Returns & Orders</button>
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