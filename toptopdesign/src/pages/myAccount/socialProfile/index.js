import { Styles, ViewCollectionDlgStyle } from "./socialProfileStyle";
import { useEffect, useState } from "react";
import CustomedInput from "../input";
import CustomedTextButton from "../customedBtn";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as GoogleIcon } from '../../../assets/img/account/google.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/account/facebook.svg';
import { ReactComponent as DisconnectIcon } from '../../../assets/img/account/disconnect.svg';
import Dialog from '@mui/material/Dialog';
import CancelButton from "../cancelButton";

const IconButton = withStyles((theme) => ({
    root: {
        marginLeft: '14px !important',
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 17px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderRadius: '24px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '177px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-roboto-bold) !important`,
        fontSize: `var(--font-size-16) !important`,
        fontWeight: '700px !important',
        fontStyle: `normal !important`,
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`,
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            width: '255px !important',
            marginLeft: '0px !important',
            padding: '0 !important',
            marginTop: '10 !important',
        },
        ['@media screen and (max-width: 650px)']: { // eslint-disable-line no-useless-computed-key
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '8px !important',
        }
    },
  }))(Button);

const TextButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        border: '1px solid var(--second) !important',
        fontFamily: `var(--font-family-roboto-bold) !important`,
        fontSize: `var(--font-size-16) !important`,
        fontWeight: '700px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        width: '177px !important',
        marginLeft: `14px !important`,
        marginBottom: '0.78px !important',
        display: 'flex !important',
        padding: '0px 15.5px !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '64px !important',
        cursor: 'pointer !important',
        backgroundColor: `var(--main) !important`,
        
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
            opacity: '.7 !important',
            backgroundColor: 'var(--blue-hover) !important',
        },
    },
}))(Button);

const DlgButton = withStyles((theme) => ({
    root: {
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-24) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: `var(--black-normal) !important`,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '53px !important',
        width: '528px !important',
        letterSpacing: '0px !important',
        lineHeight: '24px !important',
        whiteSpace: 'nowrap !important',
        borderRadius: '63px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--black-hover) !important`,
        },
        [`@media screen and (max-width: 768px)`]: {
            fontWeight: '400px !important',
            border: `1px solid var(--purple)`,
            width: '275px !important',
            borderRadius: '100px !important',
          }
    },
}))(Button);

export default function SocialProfile(){
    const [regiserWithEmail, setRegisterWithEmail] = useState(false);
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [dribbble, setDribbble] = useState('');
    const [behance, setBehance] = useState('');

    const [isGoogle, setGoogle] = useState(false);
    const [isFacebook, setFacebook] = useState(false);

    const [disconnectedOpen, setDisconnectedOpen] = useState(false);


    const closeDisconnectedDlg = () => {
        setDisconnectedOpen(false);
    };

    const handleGoogle = (value) => {
        if(!value){
            setDisconnectedOpen(true);
        }
        setGoogle(false);
    }

    const handleFacebook = (value) => {
        if(!value){
            setDisconnectedOpen(true);
        }
        setFacebook(false);
    }
    return (
        <Styles>
            <div className="edit-profile-container">
                <div className="edit-body">
                    <CustomedInput 
                        inputValue={twitter}
                        inputHandler={setTwitter}
                        placeholderName="Twitter"
                    />
                    <CustomedInput 
                        inputValue={instagram}
                        inputHandler={setInstagram}
                        placeholderName="Instagram"
                    />
                    <CustomedInput 
                        inputValue={dribbble}
                        inputHandler={setDribbble}
                        placeholderName="Dribbble"
                    />
                    <CustomedInput 
                        inputValue={behance}
                        inputHandler={setBehance}
                        placeholderName="Behance"
                    />
                    <div className="social-login">
                        {console.log(isGoogle)}
                        {isGoogle === false?
                            <IconButton
                                onClick={() => setGoogle(true)}
                            >
                                <GoogleIcon
                                    className="icon"
                                />
                                <span>Google</span>
                            </IconButton>:
                            <TextButton
                                onClick={() => handleGoogle(false)}
                            >
                                Google Connected
                            </TextButton>
                        }
                        {isFacebook === false?
                            <IconButton
                                onClick={() => setFacebook(true)}
                            >
                                <FacebookIcon 
                                    className="icon"
                                />
                                <span>Facebook</span>
                            </IconButton>:
                            <TextButton
                                onClick={() => handleFacebook(false)}
                            >
                                Facebook Connected
                            </TextButton>
                        }
                    </div>
                </div>
                <div className='edit-footer'>
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
            <Dialog
                    open={disconnectedOpen} 
                    onClose={closeDisconnectedDlg}
                    maxWidth='md'
                    fullWidth={true}
                    PaperProps={{
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: 24,
                            overflowY: 'auto',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            padding: 30,
                            height: 762,
                            '@media(minWidth: 780px)' : {
                            height: 486,
                            }
                        },
                    }}
                >
                    <ViewCollectionDlgStyle>
                        <div className='dialog-container'>
                            <div className="content">
                                <div className={regiserWithEmail?"header":"second-header"}>
                                    {`Disconnect {Google/Facebook}`}
                                </div>
                                <div className="body">
                                    <div className="des-txt">
                                        {regiserWithEmail?`Are you sure you want to disconnect {Google/Facebook} from your account? You can reconnect at any time in the future.`:
                                            `You are using {Google/FB} account to log in to the site, if you disconnect {Google/FB} you will lose your account. So before disconnecting, please set up your email and password first. `
                                        }
                                    </div>
                                    <DisconnectIcon className={regiserWithEmail?"picture":"picture pt-28"}/>
                                </div>
                                <div className="footer">
                                    <DlgButton>
                                        {regiserWithEmail?`Disconnect`:`Set up email & password`}
                                    </DlgButton>
                                </div>   
                                <CancelButton 
                                    text={"Cancel"} 
                                    onClick={closeDisconnectedDlg}
                                />
                            </div>
                        </div>
                    </ViewCollectionDlgStyle>
                </Dialog>
        </Styles>
    )
}