import './reset.css';
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import Modal from './components/Modal';
import ProductShow from "./components/ProductShow";
import ProductIndex from './components/ProductIndex';
import { useHistory } from 'react-router-dom';



function App() {

  //category state var passed as prop into nav and prodindex
  // const [category, setCategory] = useState('');
  // const history = useHistory()
  // useEffect(() => {
  //   if (category !== '') history.push(`/products/${category}`)
  // }, [category])

  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <LoginFormPage />
        </Route>
        <Route path='/signup' exact>
          <SignupFormPage />
        </Route>
        <Route path='/product/:productId' exact>
          <ProductShow />
        </Route>
        <Route path='/products' exact>
          <ProductIndex /> 
        </Route>
      </Switch>
    </>
  );
}

export default App;
