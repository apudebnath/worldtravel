import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/travelLogo.png';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className='md:flex justify-between items-center bg-white md:px-16 py-4 sticky top-0 z-99'>
            <div  className="flex justify-between items-center">
                <Link to="/"> 
                    <img className='w-22 h-16 p-2' src={logo} alt="" />
                </Link>
                { showNav ? <HiOutlineMenuAlt3 
                onClick={() => setShowNav(!showNav)}
                className='md:hidden block w-8 h-8 mx-2 cursor-pointer'/>
                 : <HiOutlineMenuAlt2 
                onClick={() => setShowNav(!showNav)}
                className='md:hidden block w-8 h-8 mx-2 cursor-pointer'/>}
            </div>
            <ul className={ (showNav ? " left-0" :  "-left-full") + ' fixed bottom-0 top-12 bg-gray-700 bg-opacity-80 flex flex-col text-white text-xl pl-10 pt-6 w-full md:text-base md:static md:flex md:flex-row md:items-center md:space-x-7 md:bg-transparent md:w-auto md:text-gray-700 md:space-y-0 space-y-5 mt-12 md:mt-0 md:pt-0 transition-left'}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/addpost">AddPost</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/makeAdmin">MakeAdmin</NavLink>
                <NavLink to="/manageallpost">ManageAllPost</NavLink>
                {user.email ? <>
                    <span onClick={logOut} className='cursor-pointer'><p>LogOut</p></span>
                </>
                :
                <NavLink to="/login">Login</NavLink>}
            </ul>
        </nav>
    );
};

export default Navigation;