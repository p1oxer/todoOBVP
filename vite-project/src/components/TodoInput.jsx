import React, { useState } from "react";

export default function TodoInput({ addTodo }) {
    const [inputValue, setInputValue] = useState("");

    function handleAddTodo() {
        if (inputValue.trim() !== "") {
            addTodo(inputValue);
            setInputValue("");
        }
    }
    return (
        <>
            <input
                type="text"
                placeholder="Enter todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>Добавить задачу</button>
        </>
    );
}
