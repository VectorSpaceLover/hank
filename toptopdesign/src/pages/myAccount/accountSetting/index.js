import { useState } from "react";
import { Styles } from "./accountSettingStyle";
import CustomedInput from '../input';
import CustomedTextButton from '../customedBtn';
import PasswordInput from "../passwordInput";

export default function AccountSetting(){
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Styles>
            <div className="account-setting-container">
                <div className="account-setting-body">
                    <CustomedInput 
                        inputValue={userName}
                        inputHandler={setUserName}
                        placeholderName="Username"
                    />
                    <CustomedInput 
                        inputValue={userEmail}
                        inputHandler={setUserEmail}
                        placeholderName="123@gmail.com"
                    />
                    {userName && userEmail &&
                        <PasswordInput 
                            inputValue={password}
                            inputHandler={setPassword}
                            placeholderName="Enter your password to make the changes"
                        />
                    }
                    
                </div>
                <div className='account-setting-footer'>
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
        </Styles>
    )
}