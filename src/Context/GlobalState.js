import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id:1, text: 'Shopping', amount: -100 },
    { id:2, text: 'Books', amount: -15 },
    { id:3, text: 'Salary', amount: 500 },
    { id:4, text: 'Credit-Reward', amount: 150 },
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<GlobalContext.Provider value={{
    transactions: state.transactions
  }}>
    {children}
  </GlobalContext.Provider>); 
}