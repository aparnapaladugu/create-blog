import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
const Navbar = () => {
    return (
        <nav className='header'>
            <Link to="/" className='logo'>My Blog</Link>
            <div className="links">
                <Link to="/create-blog">Create Blog</Link>
                <Link to="/profile"> My Profile </Link>
            </div>
        </nav>
    )
}

export default Navbar