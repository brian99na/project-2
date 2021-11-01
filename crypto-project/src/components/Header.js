import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navUpper">
            <Link to='/'><h1>What if?</h1></Link>
            <div className='navRight'>
                <Link to='/About'><p>About</p></Link>
                <Link to='/Contact'><p>Contact</p></Link>
            </div>
        </nav>
    )
}

export default Header;
