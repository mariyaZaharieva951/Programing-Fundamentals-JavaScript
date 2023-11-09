import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import * as gameService from '../../services/gameService'


const Details = ({games, addComment}) => {

    const { gameId } = useParams();
    const [currentGame, setCurrentGame] = useState({});
    const [comment,setComment] = useState({
        username:'',
        comment:''
    });

    // const currentGame = games.find(x => x._id === gameId);

    useEffect( () => {
        gameService.getOne(gameId)
        .then(result => {
            setCurrentGame(result)
        })
    }, [])


    const addCommentHandler = (e) => {

        e.preventDefault();
        console.log(currentGame);

        const result = `${comment.username}: ${comment.comment}`;
        addComment(gameId,result);
    }

    const onChange = (e) => {
        e.preventDefault();
        setComment(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">{currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>

                <p className="text">
                    {currentGame.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        {currentGame.comments?.map(x => 
                            <li className="comment">
                            <p>{x}</p>
                            </li>)
                        }
                        {/* <!-- list all comments for current game (If any) --> */}
                        
                    </ul>
                    
                    {!currentGame.comments && <p className="no-comment">No comments.</p>}

                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/edit/${gameId}`} className="button">Edit</Link>
                    <Link to={`/games/delete/${gameId}`} className="button">Delete</Link>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="John Doe" onChange={onChange} value={comment.username}/>
                    <textarea name="comment" placeholder="Comment......" onChange={onChange} value={comment.comment}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>

        </section>
    )
}

export default Details;