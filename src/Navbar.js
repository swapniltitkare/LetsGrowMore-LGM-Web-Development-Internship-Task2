import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
        <NavLink exact to='/' className='logo'> Zippy </NavLink>
        <NavLink exact to='usersdata' className='btn btn-primary getusers_btn'> Get Users </NavLink>
        </div>
        </>
    )
}

export default Navbar;