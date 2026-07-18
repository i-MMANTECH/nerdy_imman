import React from 'react'
import { useNavigate } from 'react-router-dom';

const GenInfo = () => {
    const data = [
        {
            src: "/GenInfo/free-shipping.png",
            title: "Free Shipping",
            text: "On all orders"
        },
        {
            src: "/GenInfo/coins.png",
            title: "Payment Options",
            text: "COD, cards, mobile payments"
        },
        {
            src: "/GenInfo/product-return.png",
            title: "Free Returns",
            text: "Refunds within 7 days"
        },
        {
            src: "/GenInfo/support.png",
            title: "24/7 Support",
            text: "Always here to help"
        }
    ];

    return (
        <div className='flex justify-center items-center my-20 px-4'>
            <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-2xl'>
                {
                    data.map((elem, id) => (
                        <li key={id} className='flex flex-col items-center bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200'>
                            <div className='flex-shrink-0 mb-4'>
                                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg'>
                                    <img src={elem.src} alt={elem.title} className='h-10 w-10 filter invert' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-sm uppercase font-bold text-slate-900 tracking-wider'>{elem.title}</p>
                                <p className='text-xs text-slate-600 mt-1'>{elem.text}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default GenInfo

export const Brands = ({ title = "Top Brands" }) => {
    const navigate = useNavigate();

    const data = [
        { src: "/GenInfo/adidas.jpg", name: "Adidas", to: "/search/adidas" },
        { src: "/GenInfo/nike.png", name: "Nike", to: "/search/nike" },
        { src: "/GenInfo/skechers.jpg", name: "Skechers", to: "/search/skechers" },
        { src: "/GenInfo/puma.jpg", name: "Puma", to: "/search/puma" },
    ];

    return (
        <div className='flex flex-col items-center my-16 w-full px-4'>
            <p className='text-3xl md:text-4xl font-bold mb-8 text-slate-900'>Featured Collections</p>
            <div className='flex flex-wrap justify-center gap-6 max-w-6xl'>
                {data.map((elem, id) => (
                    <div key={id} className='relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group'>
                        <div className='absolute w-full flex justify-center items-center top-4 z-20'>
                            <p className='logo font-bold text-2xl text-white drop-shadow-lg group-hover:text-blue-300 transition-colors'>{elem.name}</p>
                        </div>
                        <img
                            src={elem.src}
                            alt={elem.name}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                        <button
                            onClick={() => navigate(elem.to)}
                            className='absolute inset-0 flex items-center justify-center
                             bg-gradient-to-r from-slate-900/80 to-black/80 text-white opacity-0 hover:opacity-100 transition-all duration-300 font-semibold text-lg hover:tracking-wider'
                        >
                            Explore Collection →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
