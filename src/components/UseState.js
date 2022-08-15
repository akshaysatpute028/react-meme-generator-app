import React from "react"

export default function UseState() {
    const [isImportant, func] = React.useState("Yes")     //returns the array witth value and function
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}