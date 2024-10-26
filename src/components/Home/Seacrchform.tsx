// components/SearchBar.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/search?searchTerm=${searchTerm}`);
        }
    };

    return (
        <div className="mt-6 flex justify-center lg:justify-start w-[90%] mx-auto lg:w-full">
            <input
                type="text"
                placeholder="Search for by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 w-full lg:w-1/2     dark:bg-gray-800 dark:text-white border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black-500 "
            />
            <button
                className="px-4 py-2  dark:text-black font-semibold rounded-r-lg
                 bg-white  text-black
                "
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
