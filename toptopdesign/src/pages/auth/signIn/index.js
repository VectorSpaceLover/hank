import { Styles, ForgotStyle } from "./style";   
import { useState } from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as GoogleIcon } from '../../../assets/img/account/google.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/account/facebook.svg';
import { ReactComponent as GoogleWhiteIcon } from '../../../assets/img/google_white.svg';
import { ReactComponent as FacebookWhiteIcon } from '../../../assets/img/facebook_white.svg';
import { ReactComponent as CloseIcon } from '../../../assets/img/auth/close.svg';
import CustomedInput from "../components/input";
import PasswordInput from "../components/passwordInput";
import ForgotButton from "../components/forgotButton";
import CustomedTextButton from "../components/customedBtn";
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import { 
    signInWithEmail, 
    signInWithGoogle,
    signInWithFacebook,
    forgotPassword,
} from '../../../api/auth';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login-typed";
import CancelButton from '../components/cancelButton';

const LeftIconButton = withStyles((theme) => ({
    root: {
        height: '96px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        borderTopLeftRadius: '24px !important',
        borderTopRightRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '50% !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-36) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: 'white !important',
        color: props => props.isclicked === 1?`#00000033 !important`:`var(--second) !important`,
        borderBottom: props => props.isclicked === 1?'1px solid var(--gray-nurse) !important':'1px solid var(--second) !important',
        '&:hover': {
            color: '#00000033 !important',
            borderBottom: '1px solid var(--gray-nurse) !important',
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: '0px !important',
            padding: '0 !important',
            marginTop: '10 !important',
        },
        '@media screen and (max-width: 800px)': {
            height: '84px !important'
        },
        '@media screen and (max-width: 600px)': {
            height: '64px !important',
            fontSize: `var(--font-size-17) !important`,
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '6px !important',
        }
    },
  }))(Button);
  
const RightIconButton = withStyles((theme) => ({
    root: {
        height: '96px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        borderTopRightRadius: '24px !important',
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '50% !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-36) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        backgroundColor: 'white !important',
        color: props => props.isclicked === 1?`#00000033 !important`:`var(--second) !important`,
        borderBottom: props => props.isclicked === 1?'1px solid var(--gray-nurse) !important':'1px solid var(--second) !important',
        '&:hover': {
            color: '#00000033 !important',
            borderBottom: '1px solid var(--gray-nurse) !important',
        },
        ['@media screen and (max-width: 900px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft: '0px !important',
            padding: '0 !important',
        },
        '@media screen and (max-width: 800px)': {
            height: '84px !important'
        },
        '@media screen and (max-width: 600px)': {
            height: '64px !important',
            fontSize: `var(--font-size-17) !important`,
            width: '100% !important',
        },
        '& .icon': {
            marginRight: '6px !important',
        }
    },
  }))(Button);

const SocialButton = withStyles((theme) => ({
    root: {
        height: '54px !important',
        display: 'flex !important',
        padding: '0px 17px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderRadius: '24px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '256px !important',
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
            padding: '0 !important',
        },
        ['@media screen and (max-width: 600px)']: { // eslint-disable-line no-useless-computed-key
            width: '100% !important',
            marginTop: '12px !important',
        },
        '& .icon': {
            marginRight: '8px !important',
        }
    }
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
            borderRadius: '100px !important',
        },
        [`@media screen and (max-width: 750px)`]: {
            width: '100% !important',
            margin: '0px 10px !important',
        },
        [`@media screen and (max-width: 600px)`]: {
            width: '100% !important',
            margin: '0px 10px !important',
        }
    },
}))(Button);

const EMAIL_STATUS_NONE = -1;
const EMAIL_STATUS_SUCCESS = 0;
const EMAIL_STATUS_FAIL = 1;

const SIGN_IN_MSG_NOT_EXIST = -1;
const SIGN_IN_MSG_NOT_MATCH = 0;
const SIGN_IN_MSG_NONE = 1;

export default function SignIn({setSigned, setOpenSignin, setOpenSignup}){
    const navigate = useNavigate();
    const [isSignIn, setSignIn] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [signInStatus, setSignInStatus] = useState(SIGN_IN_MSG_NONE);

    const [isHoverGoole, setIsHoverGoogle] = useState(false);
    const [isHoverFacebook, setIsHoverFacebook] = useState(false);

    const [forgotOpen, setForgotOpen] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [emailSuccessed, setEmailSuccessed] = useState(EMAIL_STATUS_NONE);

    const forgetPassword = () => {
        setEmailSuccessed(EMAIL_STATUS_NONE);
        setForgotOpen(true);
    }

    const closeForgotDlg = () => {
        setNewEmail('');
        setEmailSuccessed(EMAIL_STATUS_NONE);
        setForgotOpen(false);
    };

    const handleForgot = async() => {
        if(emailSuccessed === EMAIL_STATUS_SUCCESS){
            closeForgotDlg();
            return;
        }
        const res = await forgotPassword(newEmail);
        if(res.status === 'ok'){
            setEmailSuccessed(EMAIL_STATUS_SUCCESS);
        }else{
            setEmailSuccessed(EMAIL_STATUS_FAIL);
        }
    }

    const changeTxt = () => {
        setSignInStatus(SIGN_IN_MSG_NONE);
    }

    const signIn = async() => {
        const res = await signInWithEmail(userName, password);
        if(res.status === 'ok'){
            localStorage.setItem('auth', JSON.stringify(res.userInfo));
            setOpenSignin(false);
            setSigned(true);
        }else{
            if(res.message === 'passwrod not matched'){
                setSignInStatus(SIGN_IN_MSG_NOT_MATCH);
            }else{
                setSignInStatus(SIGN_IN_MSG_NOT_EXIST);
            }
        }
        
        await setTimeout(changeTxt, 3000);
    }

    const handleGoogleSuccess = async(data) => {
        console.log('success', data.profileObj)
        const res = await signInWithGoogle(data.profileObj.email)
        if(res.status === 'ok'){
            localStorage.setItem('auth', JSON.stringify(res.userInfo));
            setOpenSignin(false);
            setSigned(true);
        }else{
            setSignInStatus(SIGN_IN_MSG_NOT_EXIST);
        }
        await setTimeout(changeTxt, 3000);
    }

    const handleGoogleFailure = (err) => {
        console.log('err', err);
    }

    const responseFacebook = async(response) => {
        const res = await signInWithFacebook(response);
        if(res.status === 'ok'){
            localStorage.setItem('auth', JSON.stringify(res.userInfo));
            setOpenSignin(false);
            setSigned(true);
        }else{
            setSignInStatus(SIGN_IN_MSG_NOT_EXIST);
        }
        await setTimeout(changeTxt, 3000);
    }
  
    return (
        <Styles>
            <div className="sign-in-container">
                <div className={signInStatus===SIGN_IN_MSG_NONE?"out-body":"out-body mobile-cover"}>
                    <div className="inside-body">
                        <div className="btn-group">
                            <LeftIconButton isclicked={!isSignIn?1:0}>
                                Sign In
                            </LeftIconButton>
                            <RightIconButton 
                                isclicked={isSignIn?1:0} 
                                onClick={() => {
                                    setOpenSignin(false);
                                    setOpenSignup(true);
                                }}>
                                Sign Up
                            </RightIconButton>
                        </div>
                        <div className="main">
                            <div className={signInStatus===SIGN_IN_MSG_NONE?"social-group":"social-group mt-55"}>
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
                                    buttonText="Login"
                                    onSuccess={handleGoogleSuccess}
                                    // uxMode={"redirect"}
                                    onFailure={handleGoogleFailure}
                                    cookiePolicy={"single_host_origin"}
                                    render={(renderProps) => (
                                        <SocialButton 
                                            onClick={renderProps.onClick}
                                            onMouseEnter={() => setIsHoverGoogle(true)}
                                            onMouseLeave={() => setIsHoverGoogle(false)}
                                        >
                                            {isHoverGoole?
                                                <GoogleWhiteIcon
                                                    className="icon"
                                                />:
                                                <GoogleIcon
                                                    className="icon"
                                                />
                                            }
                                            <span>Google</span>
                                        </SocialButton>
                                    )}
                                />
                                <FacebookLogin
                                    appId={process.env.REACT_APP_FACEBOOK_APIKEY}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    render={(renderProps) => (
                                        <SocialButton 
                                            className="ml-16" 
                                            onClick={renderProps.onClick}
                                            onMouseEnter={() => setIsHoverFacebook(true)}
                                            onMouseLeave={() => setIsHoverFacebook(false)}
                                        >
                                            {isHoverFacebook?
                                                <FacebookWhiteIcon
                                                    className="icon"
                                                />:
                                                <FacebookIcon
                                                    className="icon"
                                                />
                                            }
                                            <span>Facebook</span>
                                        </SocialButton>
                                    )}
                                />
                            </div>
                            <div className="form-group">
                                <CustomedInput 
                                    inputValue={userName}
                                    inputHandler={setUserName}
                                    placeholderName="Username"
                                />
                                <PasswordInput 
                                    inputValue={password}
                                    inputHandler={setPassword}
                                    placeholderName="Enter your password to make the changes"
                                />
                                <ForgotButton text={"Forgot your password?"} onClick={forgetPassword}/>
                                <CustomedTextButton 
                                    text={"Sign In"}
                                    signIn={signIn}
                                />
                            </div>
                            <div className="alarm">
                                Registering to this website, you accept our Terms of use and our Privacy policy
                            </div>
                            {signInStatus === SIGN_IN_MSG_NOT_MATCH &&
                                <div className="alert-not-match">
                                    <div className="not-match">Password incorrect, please try again</div>
                                </div>
                            } 
                            {signInStatus === SIGN_IN_MSG_NOT_EXIST && 
                                <div className="alert-not-exist">
                                    <div className="not-exist">The email isn’t in our record, please try again or sign up for the new account</div>
                                </div>
                            } 
                        </div>
                    </div>
                </div>
                <IconButton 
                    className='close-btn'
                    onClick={() => setOpenSignin(false)}
                >
                    <CloseIcon className='icon' />
                </IconButton>
            </div>
            <Dialog
                open={forgotOpen} 
                onClose={closeForgotDlg}
                maxWidth='md'
                fullWidth={true}
                PaperProps={{
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: 24,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        padding: 30,
                        height: 762,
                        '@media(minWidth: 780px)' : {
                            height: 675,
                        },
                        '@media(minWidth: 600px)' : {
                            height: 601,
                        }
                    },
                }}
            >
                <ForgotStyle>
                    <div className={emailSuccessed !== EMAIL_STATUS_SUCCESS?'dialog-container':'dialog-container small-dlg'}>
                        <div className="content">
                            <div className="header">
                                {emailSuccessed === EMAIL_STATUS_SUCCESS?'We Found It!':'Forgot your password'}
                            </div>
                            <div className="body">
                                <div className="des-txt">
                                    {emailSuccessed === EMAIL_STATUS_SUCCESS?'You’ll receive an email to reset your password shortly.':'Enter the username or email you remember'}
                                </div>
                                {emailSuccessed !== EMAIL_STATUS_SUCCESS &&
                                    <CustomedInput 
                                        inputValue={newEmail}
                                        inputHandler={setNewEmail}
                                        placeholderName="Username or Email"
                                    />
                                }
                            </div>
                            <div className="footer">
                                <DlgButton onClick={() => handleForgot()}>
                                    {emailSuccessed !== EMAIL_STATUS_SUCCESS?'Next':'OK'}
                                </DlgButton>
                            </div>
                            {emailSuccessed !== EMAIL_STATUS_SUCCESS &&
                                <CancelButton 
                                    text={"Back"} 
                                    onClick={closeForgotDlg}
                                />
                            }
                        </div>
                        {emailSuccessed === EMAIL_STATUS_FAIL && 
                            <div className="email-alert">
                                <div className="alert-content">
                                    Sorry, we can’t find your account, please try again or Contact Support
                                </div>
                            </div>
                        }
                    </div>
                </ForgotStyle>
            </Dialog>
        </Styles>
    )
}