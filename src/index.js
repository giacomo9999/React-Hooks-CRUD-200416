import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export const UserContext = React.createContext();
const username = "Jim";

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
