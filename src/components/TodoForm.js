import React, { useState, useRef } from 'react'

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const productId = useRef(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      id: productId.current++,
      text: input,
      completed: false
    }
    addTodo(todoItem);
    setInput("");
  }

  return (
    (
      <form className="input_block" onSubmit={handleSubmit}>
        <input type="text" id="input_box" placeholder="Add your todo" value={input} onChange={(event) => setInput(event.currentTarget.value)} />
        <button id="add_button">Add</button>
      </form>
    )
  );
}

export default TodoForm
