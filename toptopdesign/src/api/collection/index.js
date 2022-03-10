import axios from 'axios';

export const getCollectionById = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/collection/detail?id=${id}`);
    return res.data;
}

export const createNewCollection = async (name, des) => {
    const newCollection = { collectionName: name, description: des };
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/collection/`, newCollection);
    return res.data;
}

export const getAllCollection = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/collection/`);
    return res.data;
}