import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import samazonLogo from '../../assets/images/Samazon.PNG';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]); // should be an object {} when we split
        
        // this is placeholder error handling for now from auth-me
        return dispatch(sessionActions.login( {email, password}))
          .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          })
    }

    const handleDemo = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: "John@cena.com", password: "youcantseeme"}))
    }

    return (
        <div id="loginDiv">
            <div id="logo">
              <NavLink to='/'>
                  <img src={samazonLogo}/>
              </NavLink>
            </div>
            <div id="formBox">
            <h1 id="signInHeader">Sign in</h1>
            <form onSubmit={handleSubmit}>
                {/* placeholder error handling */}
                <ul>
                    {errors ? errors.map(error => <li key={error}>{error}</li>) : null} 
                </ul>
                <label>Email
                    <input 
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    //   required
                    />
                </label>
                {/* <div>{errors.email}</div> */}
                <br/>
                <label>Password
                    <input 
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    //   required
                    />
                </label>
                {/* <div>{errors.password}</div> */}
                <br/>
                <button id="signInButton" type="submit">Sign in</button>
                <br />
                <button id="demoButton" onSubmit={handleDemo}>Demo Login</button>
            </form>
            </div>
            <div id="newToSamazonText">
                <p>New to Samazon?</p>
            </div>
            <div id="newToSamazonButton">
                <NavLink to="/register">
                    <button>Create your Samazon account</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LoginFormPage;


{/* <div id="test">S</div> */}