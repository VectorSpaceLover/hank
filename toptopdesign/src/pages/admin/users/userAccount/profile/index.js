import { useEffect, useRef, useState } from 'react';
import { Styles } from "./profileStyle";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import RemoveButton from './txtButton';
import CustomedInput from '../input';
import CustomedTextArea from '../textArea';
import { 
    uploadAvatar,
    upDateProfile,
} from '../../../../../api/account';
import { ReactComponent as ProfileSuccess } from '../../../../../assets/img/account/profile_success.svg';
import { Grid } from 'semantic-ui-react';

const UploadButton = withStyles((theme) => ({
    root: {
        border: 'none',
        color: `var(--ocean-blue-pearl) !important`,
        fontFamily: `var(--font-family-open_sans) !important`,
        fontSize: `var(--font-size-17) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '45px !important',
        width: '155px !important',
        marginBottom: '0.78px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        backgroundColor: 'rgba(85, 66, 246, 0.1)',
        [`@media screen and (max-width: 650px)`]: {
            width: '150px !important',
            fontSize: `var(--font-size-16) !important`,
        },
       
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--purple) !important`,
        },
    },
}))(Button);

export default function Profile(){

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
        const currentAuth = JSON.parse(localStorage.getItem('auth'));
        if(val === 'edit'){
            let result = [];
            if(userAvatarPath && userAvatar){
                const res = await uploadImage();
                if(res?.filePath){
                    result = await upDateProfile(currentAuth._id, res?.filePath, userName, location, shortBio);
                }
            }else{
                
                result = await upDateProfile(currentAuth._id, currentAuth.avatarPath, userName, location, shortBio);
            }
            localStorage.setItem('auth', JSON.stringify(result.user));
            if(result.status === 'ok'){
                setProfileSuccess(true);
            }else{
                setProfileSuccess(false);
            }
            const changeTxt = () => {
                setProfileSuccess(false);
            }
            
            await setTimeout(changeTxt, 3000);
        }
    }

    useEffect(() => {
        try{
            const auth = JSON.parse(localStorage.getItem('auth'));
            console.log(auth)
            if(auth?.avatarPath)
                setUserAvatarPath(`${process.env.REACT_APP_UPLOAD_URL}${auth?.avatarPath}`);
            else
                setUserAvatarPath('');
            setUserName(auth?.userName);
            setLocation(auth?.location);
            setShortBio(auth?.shortBio);
        }catch(err){
            console.log(err);
        }
    }, [])

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
                        onClick={()=>{
                            setUserAvatarPath(null);
                            setUserAvatar(null);
                        }}
                    />
                </div>
                <div className="edit-body">
                    <div className='edit-info'>Account Information</div>
                    <Grid container spacing={2} direction="row" className='edit-name'>
                        <Grid item xs={6} md={6}>
                            <CustomedInput
                                label='First name*'
                                inputValue={userName}
                                inputHandler={setUserName}
                                placeholderName="Your first name"
                            />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <CustomedInput
                                label='Last name'
                                inputValue={userName}
                                inputHandler={setUserName}
                                placeholderName="Your last name"
                            />
                        </Grid>
                    </Grid>
                    <CustomedInput
                        label='Location'
                        inputValue={location}
                        inputHandler={setLocation}
                        placeholderName="Your location"
                    />
                    <CustomedTextArea
                        label='Short Bio'
                        inputValue={shortBio}
                        inputHandler={setShortBio}
                        placeholderName=""
                    />
                </div>
                {/* <div className='edit-footer'>
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="edit"
                        saveOption={saveOption}
                    />
                </div> */}
            </div>
            <div className="alert">
                {profileSuccess && <ProfileSuccess />}
            </div>
        </Styles>
    )
}