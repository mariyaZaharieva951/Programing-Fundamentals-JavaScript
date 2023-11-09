import './App.css';
import { Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import * as gameService from './services/gameService'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import Logout from './components/Logout/Logout';


import { AuthContext } from './contexts/authContext';
import { GameContext } from './contexts/gameContext';

import { useLocalStorage } from './hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import Edit from './components/Edit/Edit';
import Delete from './components/Delete/Delete';


function App() {

  const navigate = useNavigate();

  const [games,setGames] = useState([]);
  const [auth,setAuth] = useLocalStorage('auth',[]);

  const userLogin = (authData) => {
    setAuth(authData);
  }

  const userLogout = () => {
    setAuth({})
  }

  const addComment = (gameId, comment) => {
    setGames(oldState => {
      const currentGame = oldState.find(x => x._id === gameId);

      if(currentGame.comments) {
        currentGame?.comments.push(comment)
      } else {
        currentGame.comments = [];
        currentGame.comments.push(comment)
      }

      // currentGame?.comments ? currentGame?.comments.push(comment) : currentGame?.comments = [];
    
      console.log(currentGame)
      const comments = currentGame.comments

      return [
        ...oldState.filter(x => x._id !== gameId),
        {...currentGame,comments},
       
      ]
    })
      
  }

  const addGame = (gameData) => {
    setGames(oldState => [
      ...oldState,
      gameData
    ]);

    navigate('/games')
  }

  const editGame = (gameId, gameData) => {
    setGames(oldState => oldState.map(game => game._id === gameId ? gameData : game)) 
  }

  const deleteGame = (gameId) => {
    setGames(oldState => oldState.filter(game => game._id !== gameId)) 
  }

  useEffect( () => {
     gameService.getAll()
     .then(result => 
      setGames(result))
      
  },[])



  return (
    <AuthContext.Provider value={{user:auth, userLogin, userLogout}}>
    <div id="box">
  <Header/>
  {/* Main Content */}
  <GameContext.Provider value={{games,addGame,editGame,deleteGame}}>
  <main id="main-content">
    <Routes>
        <Route path="/" element={<Home games={games}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/games" element={<Catalog games={games}/>}/>
        <Route path="/games/:gameId" element={<Details games={games} addComment={addComment}/>}/>
        <Route path="/games/edit/:gameId" element={<Edit/>}/>
        <Route path="/games/delete/:gameId" element={<Delete/>}/>
        {/* <Route path="/home/:gameId" element={<Details games={games}/>}/> */}

    </Routes>
    
  </main>
  </GameContext.Provider>
  {/* Edit Page ( Only for the creator )*/}
  {/* <section id="edit-page" className="auth">
    <form id="edit">
      <div className="container">
        <h1>Edit Game</h1>
        <label htmlFor="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" defaultValue="" />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" defaultValue="" />
        <label htmlFor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          defaultValue=""
        />
        <label htmlFor="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
        <label htmlFor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={""} />
        <input className="btn submit" type="submit" defaultValue="Edit Game" />
      </div>
    </form>
  </section> */}
  {/*Details Page*/}
 
</div>
  </AuthContext.Provider>
  );
}

export default App;
