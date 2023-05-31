import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
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

  return (
    <>
      <button onMouseEnter={openMenu}>
        <div>
          Placeholder for modal
        </div>
        {/* <i className="fa-solid fa-user-circle" /> */}
      </button>
      {showMenu && (
        <ul id="dropdownMenu">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}



//
// const ProfileButton = () => {
//     return (
//         <div style={{color: 'green', fontSize: '50px'}}>
//         <i class="fa-sharp fa-light fa-rocket-launch"></i>
//         </div>
//     )
// }

export default ProfileButton;