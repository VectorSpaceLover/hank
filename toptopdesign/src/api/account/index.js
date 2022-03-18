import axios from 'axios';

export const getUserInfoById = async () => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/detail?id=${id}`);
    return res.data;
}


export const uploadAvatar = async (formData) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/account/upload`, formData, config);
    return res.data;
}

export const upDateProfile = async (avatarPath, userName, location, shortBio) => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/account/editprofile/${id}`, 
        {
            avatarPath: avatarPath, 
            userName: userName,
            location: location,
            shortBio: shortBio,
        }
    );
    return res.data;
}

export const upDateAccountSetting = async (userName, userEmail, password) => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/account/accountsetting/${id}`, 
        {
            userName: userName,
            userEmail: userEmail,
            password: password,
        }
    );
    return res.data;
}

export const upDatePassword = async (oldPassword, newPassword) => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/account/password/${id}`, 
        {
            oldPassword: oldPassword,
            newPassword: newPassword,
        }
    );
    return res.data;
}

export const upDateSocialProfile = async (
    twitter,
    instagram,
    dribbble,
    behance,
    isGoogle,
    isFacebook
) => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/account/social/${id}`, 
        {
            twitter: twitter, 
            instagram: instagram, 
            dribbble: dribbble, 
            behance: behance,
            isGoogle: isGoogle,
            isFacebook: isFacebook,
        }
    );
    return res.data;
}

export const upDateEmailNotification = async (checked) => {
    const id = '62312a93a23e76275cbff408';
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/account/emailnotification/${id}`, 
        {
            emailNotification: checked
        }
    );
    return res.data;

}
