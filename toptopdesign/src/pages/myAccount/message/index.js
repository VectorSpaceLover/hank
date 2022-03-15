import { useState } from "react";
import { Styles } from "./messageStyle";
import CustomedInput from '../input';
import CustomedTextButton from '../customedBtn';
import PasswordInput from "../passwordInput";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ReactComponent as MessageIcon } from '../../../assets/img/message.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/img/alarm.svg';


const LeftIconButton = withStyles((theme) => ({
    root: {
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderBottomLeftRadius: '24px !important',
        borderTopLeftRadius: '24px !important',
        borderTopRightRadius: '0px !important',
        borderBottomRightRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '170px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '400px !important',
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
            marginRight: '6px !important',
        }
    },
  }))(Button);
  
const RightIconButton = withStyles((theme) => ({
    root: {
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 7px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        border: '1px solid var(--second) !important',
        borderBottomRightRadius: '24px !important',
        borderTopRightRadius: '24px !important',
        borderTopLeftRadius: '0px !important',
        borderBottomLeftRadius: '0px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '170px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '400px !important',
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
            marginRight: '6px !important',
        }
    },
  }))(Button);

export default function Message(){
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Styles>
            <div className="message-container">
                <div className="message-header">
                    <LeftIconButton>
                        <MessageIcon className="icon"/>
                        <span>System Messages</span>
                    </LeftIconButton>
                    <RightIconButton>
                        <AlarmIcon className="icon"/>
                        <span>General Messages</span>
                    </RightIconButton>
                </div>
                <div className="message-body">
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
                <div className='message-footer'>
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
        </Styles>
    )
}