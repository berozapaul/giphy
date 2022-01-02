import PropTypes from "prop-types";
import React from 'react';

const Search = (prop: any) => {

    const handleKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            const searchStr = (event.target as HTMLInputElement).value;
            // const data = await doSearch(searchStr);
            console.info(searchStr);
            prop.onSearch('search');
        };

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
