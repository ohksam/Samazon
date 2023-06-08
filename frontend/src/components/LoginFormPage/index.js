import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import samazonLogo from '../../assets/images/Samazon.PNG';
//maybe do another useHistory here for your 'create your Samazon account' button

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
        return dispatch(sessionActions.login({ email, password }))
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
        return dispatch(sessionActions.login({ email: "john@cena.com", password: "youcantseeme" }))
    }

    return (
        <div id="loginDiv">
            <div id="loginLogoContainer">
                <NavLink to='/'>
                    <img src={samazonLogo} alt='samazonLogo' />
                </NavLink>
            </div>
            <div id="errorsDiv">
                <ul id='errorsList'>
                    {errors ? errors.map(error => <li key={error}>{error}</li>) : null}
                </ul>
            </div>
            <div id="loginFormBox">
                <h1 id="logInHeader">Sign in</h1>
                <form id="loginForm" onSubmit={handleSubmit}>
                    {/* placeholder error handling */}
                    <label>Email<br />
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        //   required
                        />
                    </label>
                    {/* <div>{errors.email}</div> */}
                    <br />
                    <label>Password<br />
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        //   required
                        />
                    </label>
                    {/* <div>{errors.password}</div> */}
                    <br />
                    <button id="loginButton" type="submit">Sign in</button>
                    <br />
                </form>
                <button id="demoButton" onClick={handleDemo}>Demo Login</button>
            </div>
            <div id="newToSamazonContainer">
                <div id="newToSamazonText">
                    <p>New to Samazon?</p>
                </div>
                <div id="newToSamazonButton">
                    <NavLink to="/signup">
                        <button>Create your Samazon account</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoginFormPage;


