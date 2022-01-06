import React from 'react'

const Todo = ({todo, cant, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                <h3>{cant} - {todo}</h3> <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>       
        </>
    )
}
export default Todo