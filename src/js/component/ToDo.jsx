import React, { useState } from "react";

export const ToDo = () => {
    const [inputValue, setInputValue] = useState(""); 
    const [todos, setTodos] = useState([]); 
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    
    const deleteTodo = (indexToDelete) => {
        setTodos(todos.filter((todo, index) => index !== indexToDelete));
    };

    return (
        <div className="container-fluid col-xl-6 p-5 mt-3">
            <h1 className="custom-font text-center">to do list</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyUp={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                setTodos(todos.concat(inputValue)); 
                                setInputValue(""); 
                            }
                        }}
                        placeholder="What do you need to do?"
                        className="form-control border-0 shadow-none"
                    />
                </li>

              
                {todos.length === 0 ? (
                    <li className="list-group-item text-center text-muted">
                        No task, add a new task
                    </li>
                ) : (
                   
                    todos.map((todo, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {todo}
                            {hoveredIndex === index && (
                                <span
                                    onClick={() => deleteTodo(index)}
                                    className="delete-icon"
                                >
                                    X
                                </span>
                            )}
                        </li>
                    ))
                )}
            </ul>

           
            <p>{todos.length} task{todos.length !== 1 ? "s" : ""}</p>
        </div>
    );
};
