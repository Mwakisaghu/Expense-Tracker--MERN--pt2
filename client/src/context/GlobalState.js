import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { DELETE_TRANSACTION, ADD_TRANSACTION } from './types';

//Initial State
const initialState = {
  transactions: [],
};

//Create Global context
export const GlobalContext = createContext(initialState);

//Provider component to give acces to the store (state)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  //Delete Transaction action
  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  //Add Transaction action
  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
