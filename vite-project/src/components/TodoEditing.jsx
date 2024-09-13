import React from "react";
import { useState } from "react";

export default function TodoEditing({ completeEditing, id }) {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Edit todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    completeEditing(id, inputValue);
                }}
            >
                Изменить имя
            </button>
        </>
    );
}
