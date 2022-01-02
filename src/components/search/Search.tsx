import PropTypes from "prop-types";
import React from 'react';
import { searchGifs } from "../../utils/APIUtils";
import { doSearch } from "../../utils/SiteUtils";

/*
 * Purpose: The purpose of this component is to do the giphy search.
 *
 * Version: 1.0
 * Author: dev@example.com
 */


const Search = (prop: any) => {

    const handleKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            const searchStr = (event.target as HTMLInputElement).value;
            const data = await doSearch(searchStr, searchGifs);
            prop.onSearch(data);
        }
    };

    return (
        <div className="search">
            <input type="text"
                onKeyUp={handleKeyUp}
                placeholder="Search GIF"
            />
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func
};

// @ts-ignore
export default Search;
