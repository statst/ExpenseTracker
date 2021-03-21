import React, {useState} from 'react';

export const  AddTransaction = () => {
  const [transaction, setTransaction] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3> Add Transaction </h3>
      <form>
        <div className="transaction-form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={transaction} onChange = {(e) => setTransaction(e.target.value)} placeholder="Enter transaction type"/>
        </div>
      </form>
      <div className="transaction-form-control">
        <label htmlFor="amount">
          Amount <br />(negative - expense, positive - income)
        </label>
        <input type="number" value={amount} onChange ={(e) => setAmount(e.target.value)} placeholder="Enter Amount"/>
      </div>
    </>
  )
}

