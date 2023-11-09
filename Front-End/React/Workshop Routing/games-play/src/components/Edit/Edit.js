import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../contexts/gameContext';
import { useParams, useNavigate } from 'react-router-dom';
import * as gameService from '../../services/gameService'


const Edit = () => {
    const navigate = useNavigate();

    const [currentGame, setCurrentGame] = useState({});
    const { editGame } = useContext(GameContext)
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => {
            setCurrentGame(result)
            // console.log(currentGame)
        })
    },[]);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const gameData = Object.fromEntries(formData);
        

        gameService.edit(gameId,gameData)
        .then(newGame => {
            // console.log(newGame)
            editGame(gameId,newGame)
            navigate(`/games/${gameId}`)
        })
    }
    
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentGame.title}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentGame.category}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={currentGame.maxLevel}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentGame.imageUrl}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" defaultValue={currentGame.summary}/>

                </div>
            </form>
        </section>
    )
}

export default Edit;