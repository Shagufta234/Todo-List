import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
          setTodos([...todos, inputValue]);
          setInputValue('');
        }
    };
    const handleRemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
  return (
    <div>
        <h1>TODO LIST</h1>
        <input type="text" value={inputValue} onChange={handleInputChange}
        placeholder="Enter a new  task" />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleRemoveTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
      
    </div>
  );
};

export default Todo;


