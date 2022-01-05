import React, {useEffect, useState} from 'react';
import {Container} from '@material-ui/core';

import AppContext from './AppContext';
import Search from "./components/search/Search";
import Preloader from "./components/common/Preloader";
import './App.css';
import { doSearch, d } from "./utils/SiteUtils";
import { trendingGifs } from "./utils/APIUtils";
import List from "./components/list/List";
import Header from "./components/Header/Header";

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

    const contextData = { gifs: data || [] };
    return (
        <Container maxWidth="md">
            {data.length < 1 ? <Preloader/> :
            <AppContext.Provider value={ contextData }>
                <Header />
                <h1 className="inscApp">The GIF Search</h1>
                <Search
                    onSearch={executeSearch}
                />
                <List/>
            </AppContext.Provider>
            }
        </Container>
    );
};

export default App;
