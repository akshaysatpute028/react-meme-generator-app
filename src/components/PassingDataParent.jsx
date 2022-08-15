import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function PassingDataParent() {
    const [user, setUser] = React.useState("Bob")

    return (
        <main>
            <ChildHead user={user} />
            <ChildBody user={user} />
        </main>
    )
}