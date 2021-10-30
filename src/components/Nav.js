import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className="nav">
                    <Router>
                    <Link to="#" className="nav-link">Programs</Link>
                    <Link to="#" className="nav-link">Contact Info / Location</Link>
                    <Link to="#" className="nav-link">About</Link>
                    </Router>
            </nav>
    )
}

export default Nav
