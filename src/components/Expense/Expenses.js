import React from 'react';

export const Expense = () => {
  return (
    <div class="expense-container">
      <div>
          <h4>Income</h4>
          <p id="income" className = "income">$0.00</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p id="expense" className="expense">-$0.00</p>
      </div>
    </div>
  )
}