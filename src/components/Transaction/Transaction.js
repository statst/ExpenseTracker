import React from 'react';

export const Transaction = () => {
  return (
    <>
      <h3>Transaction Details</h3>
      <ul className="transaction">
        <li class="negative">
          Cash <span>-$100</span><button className="delete-transaction">x</button>
        </li>
      </ul>
    </>
  )
}
