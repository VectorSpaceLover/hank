import { Styles } from "./style";
import { ReactComponent as LogoIcon } from '../../../assets/img/admin/logo.svg';
import CustomedInput from './input';
import PasswordInput from './passwordInput';
import ForgotButton from "./forgotButton";
import { useState } from "react";
import CustomedTextButton from './customedBtn';
import { useNavigate } from "react-router-dom";
import { adminSignIn } from "../../../api/admin/overview";

export default function AdminSignIn () {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const forgetPassword = () => {

    }

    const signIn = async() => {
        const res = await adminSignIn(email, password);
        console.log(res);
        if(res.status === 'ok')
            navigate('/admin/overview');
    }

    const signUp = () => {
        navigate('/admin/signup');
    }

    return (
        <Styles>
            <div className="sign-in-container">
                <LogoIcon className='logo'/>
                <div className="panel">
                    <div className="header">
                        <div className="type">
                            Sign in
                        </div>
                        <div className="account">
                            <span className="user">New user?</span>
                            <span 
                                className="create"
                                onClick={signUp}
                            >Create an acount </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <CustomedInput 
                            inputValue={email}
                            inputHandler={setEmail}
                            placeholderName="Email address"
                        />
                        <PasswordInput 
                            inputValue={password}
                            inputHandler={setPassword}
                            placeholderName="Password"
                        />
                        <div className="form-footer">
                            <ForgotButton text={"Forgot your password?"} onClick={forgetPassword}/>
                            <CustomedTextButton 
                                text={"Sign In"}
                                signIn={signIn}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}