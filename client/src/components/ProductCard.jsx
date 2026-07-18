import React from 'react'
import { Link } from 'react-router-dom';
import { useWishList } from '../context/WishListContext';

const ProductCard = ({ product, home }) => {
    const { toggleItemWishList, list } = useWishList();

    const { img, title, sellPrice, brand, category, mrp, discount, rating } = product;
    return (
        <div
            className={`xs:text-xs xs:mx-1 my-2 xs:w-full xs:h-[250px] md:h-[350px]
                md:mx-2 flex justify-between flex-col bg-white rounded-lg shadow-md hover:shadow-2xl border border-slate-200 hover:border-blue-400 p-3 relative font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
            <button onClick={() => toggleItemWishList(product._id)} className='z-10 w-6 h-6 absolute top-3 right-3 text-lg hover:scale-125 transition-transform'>
                {
                    list.includes(product._id) ? "❤️" : "🤍"
                }
            </button>
            {/* Best Seller Badge */}
            {rating > 3.9 && !home && (
                <span className='absolute top-2 left-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 rounded-full shadow-lg'>
                    ⭐ Best Seller
                </span>
            )}

            <Link to={`/product-details/${product._id}`} className='h-full' >

                {/* Img */}
                <div className='h-4/6 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg'>
                    <img className='w-5/6 mx-auto hover:scale-110 transition-transform duration-300' src={img} alt={title} />
                </div>
                {/* Title */}
                <div className='h-1/6 flex flex-col justify-end items-start xs:mt-2 md:mt-4'>
                    <p className='md:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors'>{title}</p>
                    <div className='flex justify-between w-full text-slate-500 xs:text-xs md:text-sm'>
                        <p className='font-medium'>{brand}</p>
                        <p>{category == "child" ? `👶 Kids` : category == "men" ? `👟 Men's` :
                            category === "women" ? `👠 Women's` : 'Unisex'} Shoes</p>
                    </div>
                </div>
                {/* Price */}
                <div className='h-1/6 flex justify-start items-center xs:gap-1 md:gap-2 pb-2'>
                    <p className='font-extrabold text-blue-600 xs:text-base md:text-lg'>
                        {`₹ ${new Intl.NumberFormat('en-IN').format(sellPrice)}`}
                    </p>

                    <p className='line-through text-slate-400 md:text-xs'>{mrp}</p>
                    <p className='text-red-500 font-bold md:text-sm bg-red-50 px-2 py-0.5 rounded'>{discount}% off</p>
                </div>
            </Link >
        </div>
    )
}

export default ProductCard
