import React from "react";
import CounterContainer from "./CounterContainer";
import TodosContainer from "./TodosContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
