import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Nav = () => {
    return (
            <nav>
                    <Router>
                    <Link to="/about">About</Link>
                    </Router>
            </nav>
    )
}

export default Nav
