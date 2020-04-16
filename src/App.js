import React, { useContext, useReducer } from "react";
// import { UserContext } from "./index";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const value = useContext(UserContext);
  return (
    <div>
      <h1 className="m-1 p-1">Count:{state.count}</h1>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
    </div>
  );
}
