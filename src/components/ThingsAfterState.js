import React from 'react';

export default function ThingsAfter() {
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

    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div style={mystyle}>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
