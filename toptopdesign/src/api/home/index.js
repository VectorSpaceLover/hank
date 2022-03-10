import axios from 'axios';

export const getAllProducts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/`);
    return res.data;
}

export const getSearchResults = async (key) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/search?keyword=${key}`);
    return res;
}