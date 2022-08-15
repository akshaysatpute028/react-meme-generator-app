import React from "react"

export default function EventListener() {
    function handleClick() {
        console.log("I was clicked!")
    }

    function handleOnMouseOver() {
        console.log("MouseOver")
    }

    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */

    return (
        <div className="container">
            <img
                src="https://picsum.photos/640/360"
                onMouseOver={handleOnMouseOver}
                style={{width:'400px'}}
            />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}