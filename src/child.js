import React, { useContext, useState } from 'react';
import './App.css';
import { TransectionContext } from './transcontext';


function Child() {
    let [newDesc, setDecs] = useState("")
    let [newAmount, setAmount] = useState("")
    let { transection, addTrans } = useContext(TransectionContext)


    const handleAddition = (event) => {

        event.preventDefault()
        console.log(newDesc, newAmount)
        addTrans({
            amount:Number(newAmount) ,
            desc: newDesc
        })

        setDecs("")
        setAmount(0)
    }

    const getIncome = () => {

        let income = 0
        for (var i = 0; i < transection.length; i++) {

            if (transection[i].amount > 0)
                income = income + transection[i].amount
        }

        return income;
    }
    const getExpense = () => {

        let expense = 0
        for (var i = 0; i < transection.length; i++) {

            if (transection[i].amount < 0)
                expense = expense + transection[i].amount
        }

        return expense;
    }

   


    return (
        <div>
            <div className="container" >

                <h1 className="text-center" >
                    Expense Tracker </h1>

                <h2 > Your Balance < br />{getIncome()+getExpense()}</h2>

                <div className="trasection-container" >
                    <h3 > INCOME < br /> {getIncome()} </h3>
                    <h3> EXPENSE < br /> {getExpense()} </h3>
                </div>

                <h2> History </h2>
                <hr />
                <ul className="transection-list">

                    {transection.map((transObj, ind) => {

                        return (
                            <li key={ind}>
                                <span>{transObj.desc}</span>
                                <span>{transObj.amount}</span>

                            </li>

                        )
                    })}
                </ul>


                <h2> Add New Trasection </h2>
                <hr />

                <form className="transection-form" onSubmit={handleAddition}>
                    <label>
                        Enter Description <br />
                        <input value={newDesc} 
                        type="text" required onChange={(ev) => setDecs(ev.target.value)} />

                    </label>
                    <br />
                    <label>
                        Enter Amount <br />
                        <input  value={newAmount}
                        type="number" required onChange={(ev) => setAmount(ev.target.value)} />

                    </label>
                    <br />

                    <input type='submit' value="Add Transection" />



                </form>


            </div>
        </div >
    );
}

export default Child;
