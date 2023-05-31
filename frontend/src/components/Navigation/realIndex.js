import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import samazonLogo from '../../assets/images/Samazon.PNG';
import './Navigation.css';

const Navigation = () => {
    // const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;   // doesn't have to be quite as dynamic, the profile buttons (aka navbar buttons) will have the navlinks
    // if (sessionUser) {
    //   sessionLinks = (
    //     <ProfileButton user={sessionUser} />
    //   );
    // } else {
    //   sessionLinks = (
    //     <>
    //       <NavLink to="/login">Log In</NavLink>
    //       <NavLink to="/signup">Sign Up</NavLink>
    //     </>
    //   );
    // }


    //instead of in-line styling the img, can just give the img an id='navIcon' and then apply the styling in the stylesheet.
    return (
        <div id="mainNavBar">
            <div className="navLeft">
                <div id="navLogo">
                  <NavLink to='/'>
                    <a href='/'>
                      <img id='navIcon' src={samazonLogo} alt='logo' />
                    </a>
                  </NavLink>
                </div>

            </div>
            <div className="navMid">
              <p>mid placeholder</p>
            </div>
            <div className="navRight">
              <p>right placeholder</p>
            </div>
        </div>


        // <ul>
        //   <li>
        //     <NavLink exact to='/'>Home</NavLink>
        //     {sessionLinks}
        //   </li>
        // </ul>
    )
}


{/* <NavLink to='/'></NavLink>
<NavLink to='/login'></NavLink>
<NavLink to='/signup'></NavLink> */}

export default Navigation;