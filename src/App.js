import React from 'react';
import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import TransactionList from "./components/TransactionList"

function App() {
  return (
    <>
      <Header />
      <div className = "container">
        <Balance />
        <Expenses />
        <TransactionList />
      </div>
    </>
  );
}

export default App;
