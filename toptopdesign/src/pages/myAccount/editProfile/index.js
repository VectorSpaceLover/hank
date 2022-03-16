import { useCallback, useEffect, useRef, useState } from 'react';
import { Styles } from "./editProfileStyle";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import RemoveButton from './txtButton';
import CustomedInput from '../input';
import CustomedTextArea from '../textArea';
import CustomedTextButton from '../customedBtn';
import { 
    uploadAvatar,
    upDateProfile,
    getUserInfoById,
} from '../../../api/account';
import { ReactComponent as ProfileSuccess } from '../../../assets/img/account/profile_success.svg';


const UploadButton = withStyles((theme) => ({
    root: {
        border: '1px solid var(--second) !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-open_sans) !important`,
        fontSize: `var(--font-size-17) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '36px !important',
        width: '202px !important',
        marginBottom: '0.78px !important',
        display: 'flex !important',
        padding: '0px 15.5px !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '64px !important',
        cursor: 'pointer !important',
        
        [`@media screen and (max-width: 650px)`]: {
            width: '150px !important',
            fontSize: `var(--font-size-16) !important`,
        },
       
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`,
        },
    },
}))(Button);

export default function EditProfile(){
    const [userAvatarPath, setUserAvatarPath] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [shortBio, setShortBio] = useState('');
    const [profileSuccess, setProfileSuccess] = useState(false);

    const uploadRef = useRef();
    
    const uploadImage = async() => {
        const formData = new FormData()
        formData.append('image', userAvatar);
        return await uploadAvatar(formData);
    }

    const saveOption = async (val) => {
        if(val === 'edit'){
            const res = await uploadImage();
            if(res?.filePath){
                const result = await upDateProfile(res.filePath, userName, location, shortBio);
                if(result.status === 'ok'){
                    setProfileSuccess(true);
                }else{
                    setProfileSuccess(false);
                }
            }
        }
    }

    const getInitialData = useCallback(async() => {
        const res = await getUserInfoById();
        const userInfo = res.user[0];
        setUserAvatarPath(`${process.env.REACT_APP_UPLOAD_URL}${userInfo.avatarPath}`);
        setUserName(userInfo.userName);
        setLocation(userInfo.location);
        setShortBio(userInfo.shortBio);
    }, [])

    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    return (
        <Styles>
            <div className="edit-profile-container">
                <div className="edit-header">
                    <div className="edit-avatar">
                        {userAvatarPath &&
                            <img
                                className='avatar-size'
                                alt="" 
                                src={userAvatarPath} 
                            />
                        }
                    </div>
                    <UploadButton onClick={() => uploadRef.current.click()}>
                        Upload picture
                    </UploadButton>
                    <input
                        ref={uploadRef}
                        type="file"
                        hidden
                        onChange={(event) => {
                            setUserAvatarPath(URL.createObjectURL(event.target.files[0]));
                            setUserAvatar(event.target.files[0]);
                        }}
                    />
                    <RemoveButton 
                        text={"Remove"}
                        onClick={()=>setUserAvatar(null)}
                    />
                </div>
                <div className="edit-body">
                    <CustomedInput 
                        inputValue={userName}
                        inputHandler={setUserName}
                        placeholderName="Name"
                    />
                    <CustomedInput 
                        inputValue={location}
                        inputHandler={setLocation}
                        placeholderName="Location"
                    />
                    <CustomedTextArea
                        inputValue={shortBio}
                        inputHandler={setShortBio}
                        placeholderName="Short Bio"
                    />
                </div>
                <div className='edit-footer'>
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="edit"
                        saveOption={saveOption}
                    />
                </div>
            </div>
            <div className="alert">
                {profileSuccess && <ProfileSuccess />}
            </div>
        </Styles>
    )
}