import React from "react";
import HomePage from "./components/HomePage";
import Persona from "./components/Persona";
import DollarWeakening from "./components/DollarWeakening";
import CostIncrease from "./components/CostIncrease";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-teal-300 p-4">
      <HomePage />
      <div className="mt-4 w-full max-w-3xl">
        <Persona />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <DollarWeakening />
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <CostIncrease />
      </div>
    </div>
  );
}

export default App;
