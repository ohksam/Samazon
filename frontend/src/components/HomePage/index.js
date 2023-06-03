import './HomePage.css';
import backgroundImage from '../../assets/images/kindleBackground.jpg';
import booksImage from '../../assets/images/StockBooks.jpg';
import homeImage from '../../assets/images/HomeDecor.jpg';
import gamesImage from '../../assets/images/VideoGame.jpg';
import sportsImage from '../../assets/images/Sports.jpg';

const HomePage = () => {
    return (
        <>
        <img id="backgroundImage" src={backgroundImage} alt='backgroundImage'/>

        <div id='directoryContainer'>
            <div className='containers'>
              <h1>Books</h1>
              <img src={booksImage}></img>
            </div>
            <div className='containers'>
              <h1>Home Decor</h1>
              <img src={homeImage}></img>
            </div>
            <div className='containers'>
              <h1>Video Games</h1>
              <img src={gamesImage}></img>
            </div>
            <div className='containers'>
              <h1>Sports and Active</h1>
              <img src={sportsImage}></img>
            </div>
        </div>
        </>
    )
}

export default HomePage;