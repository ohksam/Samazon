import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const buttonText = user ? `Hello ${user.name}` : 'Hello, sign in'

  //this isn't dry but it doesn't work when I abstract...
  if (user) {return (
    <>
      <button id="helloButton" onMouseEnter={openMenu}>
        <div>
          {buttonText}
        </div>
      </button>
      {showMenu && (
        <div id="dropdownMenu">
          <button id="signXButton" onClick={logout}>Log Out</button>
        </div>
      )}
    </>
  )} else {return (
    <>
      <button id="helloButton" onMouseEnter={openMenu}>
        <div>
          {buttonText}
        </div>
      </button>
      {showMenu && (
        <ul id="dropdownMenu">
          <div>
            <button id="signXButton" onClick={() => {history.push('/login')}}>Sign In</button>
            <p id="newUserText">New to Samazon? <a href="/signup">Start here</a></p>
          </div>
        </ul>
      )}
    </>
  )}
}


export default ProfileButton;