import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSortDescending, HiOutlineSortAscending } from 'react-icons/hi'


const Header = () => {

    const [active, setActive] = useState('false')

    const handleClick = (e) => {
        setActive(!active)
    }

    console.log(active)

    const checkVis = active ? 'visible' : 'hidden'
    const checkHid = active ? 'hidden' : 'visible'
    const checkHid2 = active ? 'hidden' : 'navdrop'

    const classVis = `icon ${checkVis}`
    const checkHidIcon = `icon ${checkHid}`
    const checkHidNav = `${checkHid2}`



    return (
        <nav className="navUpper">
            <Link to='/'><h1>What if?</h1></Link>
            <HiOutlineSortDescending onClick={handleClick} className={classVis} />
            <HiOutlineSortAscending onClick={handleClick} className={checkHidIcon}/>
            <div className={checkHidNav}>
                <Link to='/About'><p>Crypto Calculator</p></Link>
                <Link to='/Contact'><p>Inflation Calculator</p></Link>
            </div>
        </nav>
    )
}

export default Header;
