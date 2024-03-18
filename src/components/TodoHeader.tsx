import React from "react";
import { useAppSelector } from "../app/hooks";
function TodoHeader() {
  const todos = useAppSelector((state) => state.todos);
  return (
    <header>
      <h2>Mi To Do List </h2>
      <h1>
        {todos.length
          ? todos.length === 1
            ? ` 1 tarea`
            : `${todos.length}Tareas`
          : "No hay tareas"}
      </h1>
      <h2>
        <span>
          {`Completadas (${todos.filter((todo) => todo.completed).length})`}
        </span>
      </h2>
    </header>
  );
}
export default TodoHeader;
