import axios from 'axios';

export const getTopProducts = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/admin/products/top`);
    return res.data;
}