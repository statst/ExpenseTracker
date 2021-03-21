import React from 'react';

export const Expense = () => {
  return (
    <div className="expense-container">
      <div>
          <h4>Income</h4>
          <p className = "income">$0.00</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p className="expense">-$0.00</p>
      </div>
    </div>
  )
}