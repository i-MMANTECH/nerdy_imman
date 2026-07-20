import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const contactItems = [
        { src: "/Footer/telephone.png", alt: "Mobile", data: "+91 XXXXXXXXXX" },
        { src: "/Footer/email.png", alt: "Email", data: "contact@emmanuelaro.dev" },
        { src: "/Footer/pin.png", alt: "Address", data: "Portfolio Project • Developed with React & Node.js" },

    ]
    return (
        <footer className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-start w-full mx-auto p-6 pb-3 mt-12 text-sm border-t-2 border-slate-700/50'>
            <div className='flex justify-between flex-col items-start mt-6 md:flex-row md:justify-around md:w-full gap-8'>
                <ul className='flex justify-center items-start gap-4 flex-col'>
                    <li className='font-bold text-lg text-blue-400 tracking-wide'>Navigation</li>
                    <li><Link to="/about-us" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>About Project</Link></li>
                    <li><Link to="/cart" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>Shopping Cart</Link></li>
                    <li><Link to="/wishlist" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>My Wishlist</Link></li>
                </ul>
                <ul className='flex justify-center items-start gap-4 flex-col'>
                    <li className='font-bold text-lg text-blue-400 tracking-wide'>Collections</li>
                    <li><Link to="/shoes/men" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>👟 Men\'s Shoes</Link></li>
                    <li><Link to="/shoes/women" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>👠 Women\'s Shoes</Link></li>
                    <li><Link to="/shoes/kids" className='text-slate-300 hover:text-blue-400 transition-all duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1'>👶 Kids\' Shoes</Link></li>
                </ul>
                <div className='py-4 md:p-0'>
                    <p className='font-bold text-lg text-blue-400 tracking-wide mb-3'>Get in Touch</p>
                    <div className='flex flex-col items-baseline justify-center gap-3'>
                        {
                            contactItems.map((elem, id) => (
                                <div className='flex items-center' key={id}>
                                    <img src={elem.src} alt={elem.alt} className='w-5 h-5 md:w-6 md:h-6 mr-3 filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity' />
                                    <p dangerouslySetInnerHTML={{ __html: elem.data }} className='text-slate-300 hover:text-blue-400 transition-colors' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr className='w-full my-6 border-slate-700/50' />
            <p className='self-center text-slate-400 text-xs md:text-sm'>© {new Date().getFullYear()} <span className='text-blue-400 font-bold'>Emmanuel Aro</span> • Full-Stack E-Commerce Portfolio • <span className='text-slate-300'>React • Node.js • MongoDB</span></p>
        </footer>
    )
}

export default Footer