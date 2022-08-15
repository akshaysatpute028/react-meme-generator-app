import React from "react"

export default function ChildHead(props) {
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}