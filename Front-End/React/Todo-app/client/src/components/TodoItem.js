export const TodoItem = (props) => {
    return (
        <tr className={`todo ${props.isComplited ? 'is-complited' : ''}`}>
              <td>{props.title}</td>
              <td>{props.isComplited ? 'Complited' : 'InComplited'}</td>
              <td className="todo-action">
                <button onClick={() => props.onClick(props)} className="btn todo-btn">Change status</button>
              </td>
            </tr>
    )
}