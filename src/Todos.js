import React from 'react';

const Todos = ({todos, deleteTodos}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}  onClick={() => {deleteTodos(todo.id)}}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
         <p className="center">No Todo's Left </p>
    )
    return(
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos;