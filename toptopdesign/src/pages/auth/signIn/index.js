import { Styles } from "./style";   
import { useContext, useState } from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as GoogleIcon } from '../../../assets/img/account/google.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/account/facebook.svg';
import { ReactComponent as CloseIcon } from '../../../assets/img/auth/close.svg';
import CustomedInput from "../components/input";
import PasswordInput from "../components/passwordInput";
import ForgotButton from "../components/forgotButton";
import CustomedTextButton from "../components/customedBtn";
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import { 
    signInWithEmail, 
    signInWithGoogle,
    signInWithFacebook,
} from '../../../api/auth';
import { AuthContext } from "../../../context/auth";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login-typed";

const LeftIconButton = withStyles((theme) => ({
    root: {
        height: '96px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        borderBottom: '1px solid var(--second) !important',
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
        color: 'var(--second) !important',
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
        borderBottom: '1px solid var(--second) !important',
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
        color: 'var(--second) !important',
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

const SIGN_IN_MSG_NOT_EXIST = -1;
const SIGN_IN_MSG_NOT_MATCH = 0;
const SIGN_IN_MSG_NONE = 1;

export default function SignIn(){
    const navigate = useNavigate();
    const [auth, setAuth] = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [signInStatus, setSignInStatus] = useState(SIGN_IN_MSG_NONE);

    const forgetPassword = () => {

    }

    const changeTxt = () => {
        setSignInStatus(SIGN_IN_MSG_NONE);
    }

    const signIn = async() => {
        const res = await signInWithEmail(userName, password);
        if(res.status === 'ok'){
            setAuth(res.userInfo);
            navigate('/');
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
        const res = await signInWithGoogle(data.profileObj.email)
        if(res.status === 'ok'){
            setAuth(res.userInfo);
            navigate('/');
        }else{
            setSignInStatus(SIGN_IN_MSG_NOT_EXIST);
        }
        await setTimeout(changeTxt, 3000);
    }

    const handleGoogleFailure = (err) => {
        console.log(err);
    }

    const responseFacebook = async(response) => {
        const res = await signInWithFacebook(response);
        if(res.status === 'ok'){
            setAuth(res.userInfo);
            navigate('/');
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
                            <LeftIconButton onClick={() => navigate('/signin')}>
                                Sign In
                            </LeftIconButton>
                            <RightIconButton onClick={() => navigate('/signup')}>
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
                                        <SocialButton onClick={renderProps.onClick}>
                                            <GoogleIcon
                                                className="icon"
                                            />
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
                                        <SocialButton className="ml-16" onClick={renderProps.onClick}>
                                            <FacebookIcon
                                                className="icon"
                                            />
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
                >
                    <CloseIcon className='icon' />
                </IconButton>
            </div>
            
        </Styles>
    )
}