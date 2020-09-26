import React from 'react';
import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses"

function App() {
  return (
    <>
      <Header />
      <div className = "container">
        <Balance />
        <Expenses />
      </div>
    </>
  );
}

export default App;
