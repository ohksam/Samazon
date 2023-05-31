import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navigation />
      {/* <Modal /> */}
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <LoginFormPage />
          {/* <h1>hello?</h1> */}
        </Route>
        <Route path='/signup' exact>
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
