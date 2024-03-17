import React from "react";
function TodoList() {
    return (
        <ul>
            <li>
                <span className="text">
                    <input type="checkbox" />
                    <input type="text" />

                </span>
                <button>delete</button>
            </li>
        </ul>
    )
}
export default TodoList