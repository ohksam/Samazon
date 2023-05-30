import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";

function App() {
  return (
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
        {/* <h1>hello?</h1> */}
      </Route>
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;
