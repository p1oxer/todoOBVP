import { useState, useEffect } from "react";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
export default function App() {
    const [todos, setTodos] = useState(() => {
        let todos = null;

        try {
            todos = JSON.parse(localStorage.getItem("todos"));
        } catch (e) {}

        return Array.isArray(todos) ? todos : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([
            ...todos,
            { id: uuidv4(), todo, isEditing: false, isCompleted: false },
        ]);
    }

    function deleteTodo(id) {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== id;
            })
        );
        console.log(todos);
    }

    function editTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    function completeTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
        console.log(todos);
    }

    function completeEditing(id, text) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, todo: text, isEditing: !todo.isEditing }
                    : todo
            )
        );
    }
    return (
        <>
            <TodoInput addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                completeEditing={completeEditing}
                completeTodo={completeTodo}
            />
        </>
    );
}
