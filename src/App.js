import React from 'react';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { Expense } from './components/Expense/Expenses';
import { Transaction } from './components/Transaction/Transaction';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <Transaction />
      </div>
    </>
  );
}

export default App;
