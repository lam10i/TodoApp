import React from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

function TodoList({ todos, handleComplete, deleteTodo }) {
    return (
        <ul className="list_item">
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id} onClick={() => handleComplete(todo.id)} className={todo.completed ? "checked" : ""}>
                            {todo.text}
                            <span className='delete_icon'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteTodo(todo.id)
                                }}>
                                <IoIosCloseCircle />
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList
