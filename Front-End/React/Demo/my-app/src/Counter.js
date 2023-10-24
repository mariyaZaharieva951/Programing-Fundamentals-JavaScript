import {useState} from 'react'

const Counter = (props) => {
    const [count,setCount] = useState(props.start || 0);
    
    const increaseHandler = () => {
        setCount(oldCount => oldCount + 1);
    }

    const decreaseHandler = () => {
        setCount(oldCount => oldCount - 1);
    }

    const clearHandler = () => {
        setCount(0);
    }

    let title = '';

    if(count < 10) {
        title = 'Conter';
    } else if(count < 20) {
        title = 'Turbo Counter';
    } else if(count < 30) {
        title = 'Mega Counter';
    } else if(count < 40) {
        title = 'Giga Conter';
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={increaseHandler}>+</button>
            <button onClick={clearHandler}>clear</button>
            <button onClick={decreaseHandler}>-</button>
        </div>
    )
}

export default Counter;