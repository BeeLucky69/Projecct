import React from "react"
import { Link } from "react-router-dom"

export default function App() {
    return (
        <>
            <h1 className="purchase">Thank You For Your Purchase!</h1>
            <Link to={"/"} className="return-after-purchase">Return To Home</Link>
        </>
    )
}