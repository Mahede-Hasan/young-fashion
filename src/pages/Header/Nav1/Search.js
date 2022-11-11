import React from 'react';
import { useContext } from 'react';
import { ProductDetailContext } from '../../Shared/Context';
import SearchResult from './SearchResult';

const Search = ({search}) => {
    return (
        <div className='px-12'>
            <h1>search Result</h1>
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