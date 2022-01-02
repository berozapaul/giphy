import axios from 'axios';

const URL = process.env.REACT_APP_GIPHY_API_URL;
const KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const fetchRandomGif = async (query: string) => {
    console.log(URL + 'random');
    const { data } = await axios.get(URL + 'random', {
        params: {
            tag: query,
            api_key: KEY
        }
    });

    return data;
};

export const trendingGifs = async () => {
    const { data } = await axios.get(URL + 'trending', {
        params: {
            limit: 50,
            api_key: KEY
        }
    });

    return data
};

export const searchGifs = async (qry: string) => {
    const { data } = await axios.get(URL + 'search', {
        params: {
            q: qry,
            api_key: KEY,
            lang: 'en'
        }
    });

    return data
};
