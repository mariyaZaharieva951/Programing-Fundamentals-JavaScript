import {useState, useEffect} from 'react'
import * as gameService from '../../services/gameService'
import Game from '../../components/Home/Game'


const Home = () => {

    const [games,setGames] = useState([]);

    useEffect( () => {
       gameService.getAll()
       .then(result => 
        setGames(result))
        
    },[])



    return (
        <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />
        <div id="home-page">
          <h1>Latest Games</h1>
          {/* Display div: with information about every game (if any) */}
          {games.length > 0 
          ? games.map(x => <Game key={x._id} game={x}/>) 
          : <p className="no-articles">No games yet</p>}
        </div>
      </section>
    )
}

export default Home;