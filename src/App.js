import React from 'react';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { Expense } from './components/Expense/Expenses';
import { Transaction } from './components/Transaction/Transaction';
import { AddTransaction } from './components/Form/AddTransaction';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <Transaction />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
