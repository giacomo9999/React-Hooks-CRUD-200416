import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Items` : `No Items In List`;
  return (
    <div className="container-outer">
      <div className="container-inner">
        <h2>{title}</h2>
        <ul>
          {state.todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
