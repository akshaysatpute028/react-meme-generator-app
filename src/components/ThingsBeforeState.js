import React from 'react';

export default function ThingsBefore() {
    const mystyle = {
        width: "100%",
        height: "100vh",
        'font-size': "25px",
        display: "flex",
        color: "white",
        "align-items": 'center',
        'background-color': "dodgerblue",
        padding: "20px",
        'font-weight': "700",
        'flex-direction': "column"
      };

    const thingsArray = ["Thing 1", "Thing 2"];

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        document.getElementById()
        console.log(thingsArray)
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div style={mystyle}>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
