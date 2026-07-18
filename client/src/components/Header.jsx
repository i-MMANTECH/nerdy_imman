import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { list } = useWishList();
    const { cartList } = useCart();

    // Toggle the menu
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className='sticky top-0 z-40 text-sm bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row md:items-center md:justify-between p-4 py-3 gap-2 shadow-2xl border-b border-slate-700/50'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <Link
                    to="/"
                    className="logo text-2xl font-bold hover:text-blue-400 transition-all duration-300 tracking-wide"
                    onClick={toggleMenu}
                >
                    ✨ Emmanuel Aro
                </Link>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-slate-700/50"
                >
                    {
                        isOpen ? (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M3 21.32L21 3.32001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 3.32001L21 21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )
                    }
                </button>
            </div>

            {/* Navbar Links and Right Side Bar */}
            <div className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden md:flex'} md:gap-2`}>
                {/* Links */}
                <ul className='flex flex-col md:flex-row md:gap-1 md:pr-6'>
                    {['/', '/shoes/men', '/shoes/women', '/shoes/kids', '/about-us'].map((path, index) => {
                        const labels = ['Home', 'Men', 'Women', 'Kids', 'About'];
                        return (
                            <li key={path} className='hover:bg-slate-700/60 transition-all duration-300 p-2 rounded-lg'>
                                <NavLink
                                    to={path}
                                    onClick={toggleMenu}
                                    className={({ isActive }) => `${isActive ? 'text-blue-300 font-bold border-b-2 border-blue-400 pb-1' : 'text-slate-200 hover:text-white'} transition-all duration-300 block`}
                                >
                                    {labels[index]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Side Bar */}
                <div className="flex items-center gap-4 mt-3 md:mt-0 md:ml-4 md:border-l md:border-slate-600 md:pl-4">
                    <Search />
                    <div className='flex items-center gap-5'>
                        <NavLink
                            to="/wishlist"
                            onClick={toggleMenu}
                            className="hover:text-blue-400 transition-all duration-300 relative group"
                        >
                            <div className='relative'>
                                <span className='w-5 text-center rounded-full absolute -top-2 -right-2 text-xs bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-1 shadow-lg'>
                                    {list.length > 0 ? list.length : ''}
                                </span>
                                <img src="/Navbar/wishlist.png" alt="wishlist" className='w-6 h-6 hover:scale-125 transition-transform filter brightness-0 invert group-hover:drop-shadow-lg' />
                            </div>
                        </NavLink>
                        <NavLink
                            to="/cart"
                            onClick={toggleMenu}
                            className="hover:text-blue-400 transition-all duration-300 relative group"
                        >
                            <div className='relative'>
                                <span className='w-5 text-center rounded-full absolute -top-2 -right-2 text-xs bg-gradient-to-r from-red-600 to-red-500 text-white font-bold px-1 shadow-lg'>
                                    {cartList.length > 0 ? cartList.length : ''}
                                </span>
                                <img src="/Navbar/cart.png" alt="cart" className='w-6 h-6 hover:scale-125 transition-transform filter brightness-0 invert group-hover:drop-shadow-lg' />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;