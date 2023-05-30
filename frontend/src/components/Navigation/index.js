import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    let links;
    if (sessionUser) {
        links // = <signoutButton>
    } else {
        links // = ()
    }






    return (
        <ul>
          <li>
            {}
          </li>
        </ul>
    )
}


{/* <NavLink to='/'></NavLink>
<NavLink to='/login'></NavLink>
<NavLink to='/signup'></NavLink> */}

export default Navigation;