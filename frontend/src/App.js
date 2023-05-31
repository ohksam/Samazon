import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
// import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navigation />
      {/* <Modal /> */}
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
          {/* <h1>hello?</h1> */}
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
