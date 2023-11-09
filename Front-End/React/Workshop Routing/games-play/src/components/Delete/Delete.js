import { useEffect,useContext } from "react";
import { GameContext } from '../../contexts/gameContext';
import * as gameService from '../../services/gameService'
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
    const navigate = useNavigate();

    const { deleteGame } = useContext(GameContext)

    const { gameId } = useParams();
    
    useEffect(() => {
        gameService.remove(gameId)
        .then(res => {
           
            deleteGame(gameId);
            navigate('/games')
        })
    }, [])


    return null;
}

export default Delete;