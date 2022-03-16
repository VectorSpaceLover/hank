import { useState, useCallback, useEffect } from 'react';
import { Styles } from "./emailNotificationStyle";
import CustomedTextButton from '../customedBtn';
import CustomedCheckBox from './checkBox';
import {
    upDateEmailNotification,
    getUserInfoById,
} from '../../../api/account';

const checkLs = [
    {label: 'Notify me when new app screens have been added  '},
    {label: 'Notify me when the app screens have been updated'},
    {label: 'Notify me when the new design job is added'},
]

export default function EmailNotification(){
    const [checked, setChecked] = useState([false, false, false]);
    const checkedItem = (idx) => {
        let newChecked = [...checked];
        newChecked[idx] = !checked[idx];
        setChecked(newChecked);
    }

    const saveOption = async (val) => {
        if(val === 'accountsetting'){
            await upDateEmailNotification(checked);
        }
    }

    const getInitialData = useCallback(async() => {
        const res = await getUserInfoById();
        const userInfo = res.user[0];
        console.log(userInfo.emailNotification)
        setChecked(userInfo.emailNotification);
      }, [])
    
    useEffect(() => {
        getInitialData();
    }, [getInitialData])

    return (
        <Styles>
            <div className="email-notification-container">
                <div className="email-notification-header">
                    Alerts
                </div>
                <div className="email-notification-body">
                    {checkLs.map((item, idx) => <CustomedCheckBox label={item.label} idx={idx} isChecked={checked[idx]} key={idx} checkedItem={checkedItem}/>)}
                </div>
                <div className='email-notification-footer'>
                    <CustomedTextButton 
                        text={"Save Changes"}
                        whichOne="accountsetting"
                        saveOption={saveOption}
                    />
                </div>
            </div>
        </Styles>
    )
}