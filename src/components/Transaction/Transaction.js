import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3>Transaction Details</h3>
      <ul className="transaction">
        {transactions.map(transaction => (<li className="negative">
          {transaction.text} <span>-$100</span><button className="delete-transaction">x</button>
        </li>))}
  
      </ul>
    </>
  )
}
