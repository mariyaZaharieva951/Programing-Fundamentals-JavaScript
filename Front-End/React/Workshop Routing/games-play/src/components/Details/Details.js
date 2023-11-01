import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'



const Details = ({games, addComment}) => {

    const { gameId } = useParams();
    const [comment,setComment] = useState({
        username:'',
        comment:''
    });

    const currentGame = games.find(x => x._id === gameId);

    const addCommentHandler = (e) => {

        e.preventDefault();
        console.log(comment);

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
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to="#" className="button">Edit</Link>
                    <Link to="#" className="button">Delete</Link>
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