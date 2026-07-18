import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!search) {
            return alert("Enter something first!")
        }
        if (search.trim()) {
            navigate(`/search/${encodeURIComponent(search)}`);
            setSearch("")
        }
    };

    return (
        <form onSubmit={handleSearch} className='flex items-center border-2 rounded-lg border-slate-400 bg-slate-700 hover:bg-slate-600 transition-colors'>
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search...'
                className='pl-2 py-1 bg-slate-700 text-white placeholder-slate-400 outline-none text-sm'
            />
            <button type="submit" className='hover:scale-110 transition-transform'>
                <img src="/Navbar/search.png" alt="Search" className='w-5 h-5 rounded-sm filter brightness-0 invert mr-1' />
            </button>
        </form>
    );
};

export default Search;
