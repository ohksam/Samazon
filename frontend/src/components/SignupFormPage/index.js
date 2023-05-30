import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import samazonLogo from '../../assets/images/Samazon.PNG';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(sessionActions.signup({ name, email, password }))
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
          });
        }
        return setErrors(['Password and Confirmation do not match']);
      };

    // const handleDemo = (e) => {
    //     e.preventDefault();
    //     return dispatch(sessionActions.login({email: "John@cena.com", password: "youcantseeme"}))
    // }

    return (
        <div id="signupDiv">
            <div id="logo">
              <NavLink to='/'>
                  <img src={samazonLogo}/>
              </NavLink>
            </div>
            <div id="formBox">
            <h1 id="signUpHeader">Create account</h1>
            <form onSubmit={handleSubmit}>
                {/* placeholder error handling */}
                <ul>
                    {errors ? errors.map(error => <li key={error}>{error}</li>) : null} 
                </ul>
                <label>Name
                    <input 
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    //   required
                    />
                </label>
                <br />
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
                <br />
                {/* <div>{errors.password}</div> */}
                <label>Confirm Password
                    <input 
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    //   required
                    />
                </label>
                <br/>
                <button id="signUpButton" type="submit">Sign Up</button>
                <br />
            </form>
            </div>
            <div id="newToSamazonText">
                <p>Already have an account?</p>
            </div>
            <div id="goToLoginButton">
                <NavLink to="/login">
                    <button>Sign in</button>
                </NavLink>
            </div>
        </div>
    )
}

export default SignupFormPage;


{/* <div id="test">S</div> */}