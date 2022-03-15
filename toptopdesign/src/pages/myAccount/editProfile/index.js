import { useState } from 'react';
import { Styles } from "./editProfileStyle";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import RemoveButton from './txtButton';
import CustomedInput from '../input';
import CustomedTextArea from '../textArea';
import CustomedTextButton from '../customedBtn';

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
            width: '100% !important',
            height: '36px !important',
            padding: '0px !important',
        },
        [`@media screen and (max-width: 900px)`]: {
            marginRight: '0px !important',
            marginTop: '10px !important',
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
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [shortBio, setShortBio] = useState('');

    return (
        <Styles>
            <div className="edit-profile-container">
                <div className="edit-header">
                    <div className="edit-avatar">
                    </div>
                    <UploadButton>
                        Upload picture
                    </UploadButton>
                    <RemoveButton text={"Remove"}/>
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
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
        </Styles>
    )
}