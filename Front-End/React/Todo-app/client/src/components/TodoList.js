import { TodoItem } from "./TodoItem"
import { useEffect, useState } from 'react'

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect ( () => {
        fetch('http://localhost:3030/jsonstore/todos')
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            setTodos(Object.values(result))
        })
    }, [])


    const todoClickHandler = (todo) => {
        // console.log(todoId)
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify({...todo, isComplited: !todo.isComplited})
        })
        .then(res => res.JSON)
        .then(result => console.log(result))
        setTodos(oldState => oldState.map(x => x._id === todo._id ? {...x, isComplited: !x.isComplited} : x))
    }

    return (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>

        {todos.map( todo => <TodoItem key={todo._id} {...todo} onClick={todoClickHandler}/>)}
            
          </tbody>
        </table>
    )
}