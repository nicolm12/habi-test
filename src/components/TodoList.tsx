import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const id = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0;
    dispatch({ type: "todo/deleteTodo", payload: id });
  }
  function handleToggle(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.currentTarget.dataset.id
      ? +event.currentTarget.dataset.id
      : 0;
    dispatch({ type: "todo/toggleTodo", payload: id });
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span className="text">
            <input
              data-id={todo.id}
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />

            <input
              disabled={todo.completed === true ? true : false}
              type="text"
              defaultValue={todo.text}
            />
          </span>
          <button data-id={todo.id} onClick={handleDelete}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
