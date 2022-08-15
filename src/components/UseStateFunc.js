import React from "react"

export default function UseStateFunc() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */

    /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */
    const [count, setCount] = React.useState(0)

    function add() {
        //setCount(count + 1)
        setCount((oldValue) => {
            return oldValue + 1
        })

    }

    function subtract() {
        setCount((oldValue) => {
            return oldValue - 1
        })
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}