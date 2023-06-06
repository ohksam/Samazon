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


    //maybe useEffect and useState it?

    // const sessionCartItems = useSelector(state => Object.values(state.cartItems));
    // let numCartItems = 0;
    // sessionCartItems.forEach(item => cartItemCount += item.quantity)
    // const cartItemCount = sessionUser ? numCartItems : 0;

    // useEffect(() => {

    // }, [])
    //

    const categories = ['books', 'electronics', 'home', 'active', 'food'];
    const categoryButtons = categories.map(category => (
      
      <NavLink to={`/categories/${category}`}>
        <button>{category.toUpperCase()}</button>
      </NavLink>
    ))




    if (location.pathname.includes('signup') || location.pathname.includes('login')) {
      return null 
      } else {
      return (
      <div id="entireNavBar">
        <div id="topNavBar">
            <div className="navLeft">
                <div id="navIconContainer">
                  <NavLink to='/'>
                    <a href='/'>
                      <img id='navIcon' src={whiteSamazonLogo} alt='logo' />
                    </a>
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
                <a href='/cart'>
                <span id='cartItemCount'>0</span>
                  <img id='cartImage' src={cartIcon} />
                </a>
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