import { useState, useContext, useEffect } from "react";
import { Styles } from "./accountSettingStyle";
import CustomedInput from '../input';
import CustomedTextButton from '../customedBtn';
import PasswordInput from "../passwordInput";
import { upDateAccountSetting } from '../../../api/account';
import { ReactComponent as AccountSettingError } from '../../../assets/img/account/accountsetting_error.svg';
import { ReactComponent as AccountSettingSuccess } from '../../../assets/img/account/accountsetting_success.svg';
import { UserInfoContext } from "../../../context/userInfo";

export default function AccountSetting(){
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountSettingSuccess, setAccountSettingSuccess] = useState(-1);

    const saveOption = async (val) => {
        if(val === 'accountsetting'){
            const result = await upDateAccountSetting(userName, userEmail, password);
            const changeTxt = () => {
                setAccountSettingSuccess(-1);
            }
            if(result.status === 'ok'){
                setAccountSettingSuccess(true);
            }else{
                setAccountSettingSuccess(false);
            }
            await setTimeout(changeTxt, 3000);
        }
    }

    useEffect(() => {
        setUserName(userInfo.userName);
    }, [userInfo])

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
                        type='email'
                        inputValue={userEmail}
                        inputHandler={setUserEmail}
                        placeholderName={`${userInfo.userName}@${userInfo.userName}gmail.com`}
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
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="accountsetting"
                        saveOption={saveOption}
                    />
                </div>
            </div>
            <div className="alert">
                { accountSettingSuccess === true && <AccountSettingSuccess />}
                { accountSettingSuccess === false && <AccountSettingError />}
            </div>
        </Styles>
    )
}