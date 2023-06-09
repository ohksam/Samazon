import './HomePage.css';
import backgroundImage from '../../assets/images/kindleBackground.jpg';
import booksImage from '../../assets/images/StockBooks.jpg';
import homeImage from '../../assets/images/HomeDecor.jpg';
import gamesImage from '../../assets/images/VideoGame.jpg';
import sportsImage from '../../assets/images/Sports.jpg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div id='backgroundImageContainer'>
        <img id="backgroundImage" src={backgroundImage} alt='backgroundImage' />
      </div>

      <div id='directoryContainer'>
        <div className='containers'>
          <h1>Books</h1>
          <NavLink to='/categories/books'>
            <img src={booksImage} alt='booksImage' />
          </NavLink>
        </div>
        <div className='containers'>
          <h1>Home Decor</h1>
          <NavLink to='/categories/home'>
            <img src={homeImage} alt='homeImage' />
          </NavLink>
        </div>
        <div className='containers'>
          <h1>Electronics</h1>
          <NavLink to='/categories/electronics'>
            <img src={gamesImage} alt='gamesImage' />
          </NavLink>
        </div>
        <div className='containers'>
          <h1>Sports and Outdoors</h1>
          <NavLink to='/categories/active'>
            <img src={sportsImage} alt='sportsImage' />
          </NavLink>
        </div>
      </div>
    </>

  )
}

export default HomePage;