import React, { useState } from 'react';
import Search from "./components/search/Search";
import './App.css';

function App() {
  const [searchText, setSearchState] = useState('');
  const [gif, setGif] = useState({});
  const [loader, setLoader] = useState(true);
  const [isError, setIsError] = useState(false);

  const executeSearch = async (searchText: string) => {
     console.log(searchText);
  };

  return (
      <div className="container">
        <h1 className="inscApp">The GIF Search </h1>
        <Search
            onSearch={executeSearch}
        />
        { isError && <div>Something went wrong ...</div> }
      </div>
  );
}

export default App;
