import React, { createContext, useReducer } from "react";
import TransectionReducer from './transreducer';


const initialTransection = [
    { amount: +500, desc: "cash" },
    { amount: -50, desc: "bank" },
    { amount: +100, desc: "camera" },
    { amount: -200, desc: "book" },


]

export const TransectionContext = createContext(initialTransection)

export const TransectionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransectionReducer, initialTransection)

    function addTrans(transObj) {

        dispatch({

            type: "ADDTRANSECTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },

        })
    }
    return (
        <TransectionContext.Provider value={{

            transection: state,
            addTrans

        }}>
            {children}
        </TransectionContext.Provider>

    )
}