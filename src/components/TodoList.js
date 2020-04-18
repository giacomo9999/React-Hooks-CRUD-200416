import React, { useContext } from "react";
import TodosContext from "../context";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Items` : `No Items In List`;
  return (
    <div className="container-outer">
      <div className="container-inner">
        <h2>{title}</h2>
        <table>
          {state.todos.map((todo) => (
            <tr key={todo.id}>
              <td className={``}
                onDoubleClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo })
                }

              >
                {todo.text}
              </td>
              <td>
                <i className="fa fa-edit"></i>
              </td>
              <td>
                <i className="fa fa-trash-o"></i>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
