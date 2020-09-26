import React, { useState } from 'react'

export default function AddTransaction() {
	const [transaction, setTransaction] = useState();
	const [amount, setAmount] = useState(0);
    return (
			<div>
				<h3>Add new transaction</h3>
				<form>
					<div className='form-control'>
						<label htmlFor='text'>Transaction</label>
						<input
							type='text'
							value={transaction}
							onChange={(event) => setTransaction(event.target.value)}
							placeholder='Enter text...'
						/>
					</div>
					<div className='form-control'>
						<label for='amount'>
							Amount <br />
							(negative - expense, positive - income)
						</label>
						<input
							type='number'
							value={amount}
							onChange={(event) => setAmount(event.target.value)}
							placeholder='Enter amount...'
						/>
					</div>
					<button className='btn'>Add transaction</button>
				</form>
			</div>
		);
}
