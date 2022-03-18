import axios from 'axios';

export const signInWithEmail = async(userEmail, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin`, 
        {
            userEmail: userEmail,
            password: password,
        }
    );
    return res.data;
}

export const signUpWithEmail = async(userEmail, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`, 
        {
            userEmail: userEmail,
            password: password,
        }
    );
    return res.data;
}
