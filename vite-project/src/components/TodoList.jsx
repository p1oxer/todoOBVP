import React from "react";
import Todo from "./Todo";

export default function TodoList({
    todos,
    deleteTodo,
    editTodo,
    completeEditing,
    completeTodo,
}) {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id} className="todo">
                            <Todo
                                todoText={todo.todo}
                                isEditing={todo.isEditing}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                                id={todo.id}
                                completeEditing={completeEditing}
                                isCompleted={todo.isCompleted}
                                completeTodo={completeTodo}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
