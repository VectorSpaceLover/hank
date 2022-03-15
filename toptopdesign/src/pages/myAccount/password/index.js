import { useState } from "react";
import PasswordInput from "../passwordInput";
import { Styles } from "./passwordStyle";
import CustomedTextButton from '../customedBtn';

export default function Password(){
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <Styles>
            <div className="password-container">
                <div className="password-body">
                    <PasswordInput 
                        inputValue={oldPassword}
                        inputHandler={setOldPassword}
                        placeholderName="Current Password "
                    />
                    <PasswordInput 
                        inputValue={newPassword}
                        inputHandler={setNewPassword}
                        placeholderName="New Password"
                    />
                    <div className="password-alarm">
                        Minimum 8 characters including one number and one alphabet
                    </div>
                </div>
                <div className="password-footer">
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
        </Styles>
    )
}