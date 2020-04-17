import React from "react";

const TodosContext = React.createContext({
  todos: [
    {
      id: 1,
      text: "Buy Groceries",
      complete: false,
    },
    {
      id: 2,
      text: "Walk Dog",
      complete: false,
    },
    {
      id: 3,
      text: "Find A Job",
      complete: false,
    },
    {
      id: 4,
      text: "Fix Toilet",
      complete: false,
    },
  ],
});

export default TodosContext;
