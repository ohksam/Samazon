import './reset.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProductShow from "./components/ProductShow";
import ProductIndex from './components/ProductIndex';
import CartIndex from './components/CartIndex';
import ThankYouPage from './components/ThankYouPage';
import OrderHistory from './components/OrderHistory';
import Footer from './components/Footer';


function App() {

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
        <Route path='/products/:productId' exact>
          <ProductShow />
        </Route>
        <Route path='/categories/:categoryName' exact>
          <ProductIndex /> 
        </Route>
        <Route path='/cart' exact>
          <CartIndex />
        </Route>
        <Route path='/thankyou' exact>
          <ThankYouPage />
        </Route>
        <Route path='/history' exact>
          <OrderHistory />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
