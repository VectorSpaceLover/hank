import { forwardRef, useCallback, useEffect, useState, useImperativeHandle } from 'react';
import { Styles } from "./passwordStyle";
import CustomedInput from '../input';
import { upDatePassword } from '../../../../../api/admin/users';

const Password = forwardRef((props, ref) => {
    const { setAccountInfo, accountInfo, setIsFulled, next } = props;
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isAllowed, setAllowed] = useState(false);
    
    const handleChange = (value) => {
        setOldPassword(value);
        const ck =value;
       
        function isAlphaOrParen(str) {
            return /[a-zA-Z]/.test(str);
        }
        
        function containsNumber(str) {
            return /\d/.test(str);
        }
        if(isAlphaOrParen(value) && containsNumber(ck) && ck.length >= 8) setAllowed(true);
        else setAllowed(false);
    }

    const saveOption = useCallback(async () => {
        if(oldPassword === newPassword){
            if(isAllowed){
                const result = await upDatePassword(accountInfo._id, newPassword);
                setAccountInfo(result);
                next();
            }
        }
    }, [accountInfo._id, isAllowed, newPassword, next, oldPassword, setAccountInfo])

    useImperativeHandle(ref, () => ({ saveOption }), [saveOption])

    useEffect(() => {
        if(oldPassword && newPassword){
            setIsFulled(true);
        }else{
            setIsFulled(false);
        }
    }, [newPassword, oldPassword, setIsFulled])

    return (
        <Styles>
            <div className="password-container">
                <div className="password-body">
                    <div className='password-info'>Password</div>
                    <CustomedInput
                        label='Create Password*'
                        inputValue={oldPassword}
                        inputHandler={handleChange}
                        placeholderName=""
                    />
                    <div className={isAllowed?"password-alarm": "password-alarm warning"}>
                        Minimum 8 characters including one number and one alphabet
                    </div>
                    <CustomedInput
                        label='Enter new password again*'
                        inputValue={newPassword}
                        inputHandler={setNewPassword}
                        placeholderName=""
                    />
                </div>
            </div>
        </Styles>
    )
})

export default Password;