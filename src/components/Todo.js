import React, { useState } from 'react'
import icon from "../images/icon.png"
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todoItem => {
        const newTodos = [todoItem, ...todos];
        setTodos(newTodos);
    })

    const handleComplete = (id) => {
        const updatedTodos = todos.map((todoItem) => {
            if (id === todoItem.id) {
                return { ...todoItem, completed: !todoItem.completed }
            }
            return todoItem;
        })
        setTodos(updatedTodos);
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todoItem) => id !== todoItem.id)
        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            <div className="to_do_app">
                <div className="tlt_block">
                    <h2>To Do List</h2>
                    <img src={icon} alt="To Do List" />
                </div>

                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} handleComplete={handleComplete} deleteTodo={deleteTodo} />
            </div>
        </div>
    )
}

export default Todo
