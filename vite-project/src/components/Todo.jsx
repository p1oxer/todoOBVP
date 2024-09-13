import React, { useEffect, useState } from "react";
import TodoEditing from "./TodoEditing";

export default function Todo({
    todoText,
    isEditing,
    deleteTodo,
    id,
    editTodo,
    completeEditing,
    completeTodo,
    isCompleted,
}) {
    const [checked, setChecked] = useState();
    return (
        <>
            {isEditing ? (
                <TodoEditing completeEditing={completeEditing} id={id} />
            ) : (
                <p className={isCompleted ? "checked" : ""}>{todoText}</p>
            )}

            <button onClick={() => editTodo(id)}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
            <input
                type="checkbox"
                value={checked}
                defaultChecked={isCompleted}
                onChange={() => {
                    setChecked(!checked);
                    completeTodo(id);
                }}
            />
        </>
    );
}
