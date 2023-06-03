import './reset.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
// import Modal from './components/Modal';
import ProductShow from "./components/ProductShow";
import ProductIndex from './components/ProductIndex';


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
        <Route path='/products/:productId' exact>
          <ProductShow />
        </Route>
        <Route path='/categories/:categoryName' exact>
          <ProductIndex /> 
        </Route>
      </Switch>
    </>
  );
}

export default App;
