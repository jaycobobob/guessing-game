import React from "react";
import Counter from "../components/counter";

function CounterPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <p className="h3">Welcome to the guessing game!</p>
      <Counter />
    </div>
  );
}

export default CounterPage;
