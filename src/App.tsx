import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import Search from "./components/search/Search";
import Preloader from "./components/common/Preloader";
import './App.css';
import { doSearch, d } from "./utils/SiteUtils";
import { trendingGifs } from "./utils/APIUtils";
import List from "./components/list/List";

/*
 * Purpose: This is the main component to bootstrap the app.
 *
 * Version: 1.0
 * Author: dev@example.com
 */
const App: React.FC = () => {
    const [data, setData] = useState<Array<Gif>>([]);

    const executeSearch = (data: any) => {
        setData(data);
    };

    // @ts-ignore
    useEffect(async () => {
        const trendingData = await doSearch('', trendingGifs);
        setData(trendingData);
    }, []);

    if (data.length < 1) {
        return <Preloader />
    }

    const contextData = { gifs: data || [] };
    return (
        <AppContext.Provider value={ contextData }>
            <div className="container">
                <h1 className="inscApp">The GIF Search a</h1>
                <Search
                    onSearch={executeSearch}
                />
                <List/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
