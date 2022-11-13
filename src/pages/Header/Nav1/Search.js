import React from 'react';
import SearchResult from './SearchResult';

const Search = ({search}) => {
    return (
        <div className='px-12 pb-40'>
            <h1 className='pl-4 pt-4 text-2xl text-gray-400'>{search.length} product found</h1>
            <div className="shop-products-container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
            {
                search.map(searchResult=><SearchResult key={searchResult.sku}
                    searchResult={searchResult}
                ></SearchResult>)
            }
            </div>
        </div>
    );
};

export default Search;