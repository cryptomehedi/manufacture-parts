import React  from 'react';
import { Link } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import { signOut } from 'firebase/auth';
import CustomLink from './CustomLink';

const Nav = () => {
    // const [user] = useAuthState(auth)
    const menuItems =   <>
                            <li><CustomLink to="/">Home</CustomLink></li>
                            <li><CustomLink to="/Inventory">Inventory</CustomLink></li>
                            <li><CustomLink to="/blogs">Blogs</CustomLink></li>
                            <li><CustomLink to="/about">About</CustomLink></li>
                            <li><CustomLink to="/contact-us">Contact Us</CustomLink></li>
                            <li tabIndex="0">
                                <CustomLink to='/dashBoard' className="justify-between">
                                    DashBoard
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </CustomLink>
                                <ul className="p-2">
                                    <li><Link to=''>Submenu 1</Link></li>
                                    <li><Link to=''>Submenu 2</Link></li>
                                </ul>
                            </li>
                        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar lg:navbar-start">
                    <div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-sm w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div> 
                        <CustomLink to="/" className="btn btn-ghost normal-case text-lg lg:text-xl">Parts Manufacturer</CustomLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:mr-10">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn btn-primary bg-gradient-to-r from-[#2538BF] to-[#4475F2] text-white uppercase font-bold ml-2">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;