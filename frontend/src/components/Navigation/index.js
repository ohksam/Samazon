import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import samazonLogo from '../../assets/images/Samazon.PNG';
import './Navigation.css';
import gitHubLogo from '../../assets/images/gitHubLogo.png';
import linkedInLogo from '../../assets/images/linkedInLogo.png';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    const sessionButton = (
      <ProfileButton user={sessionUser} />
    )

    // const history = useHistory();

    const categories = ['books', 'electronics', 'home', 'active', 'food'];
    const categoryButtons = categories.map(category => (
      
      <NavLink to={`/categories/${category}`}>
        <button>{category.toUpperCase()}</button>
      </NavLink>
    ))

    return (
      <div id="entireNavBar">
        <div id="topNavBar">
            <div className="navLeft">
                <div id="navIconContainer">
                  <NavLink to='/'>
                    <a href='/'>
                      <img id='navIcon' src={samazonLogo} alt='logo' />
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
              <div id='navSearch'>
                <form>
                  <input placeholder='Search Samazon'></input>
                  <button>Search</button>
                </form>
              </div>
            </div>

            <div className="navRight">
              <div id='sessionButton'>
                {sessionButton}
              </div>
              <div id='cartStuff'>
                
              </div>
            </div>
        </div>
        <div id="bottomNavBar">
          {categoryButtons}
        </div>
      </div>

    )
}


export default Navigation;