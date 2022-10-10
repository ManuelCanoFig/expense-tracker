import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Create initialState 
const initialState ={
    transactions: []
}

//create context
export const GlobalContex = createContext(initialState);

//create provider to access the state on components
export const GlobalProdiver = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContex.Provider value ={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContex.Provider>
    );
}