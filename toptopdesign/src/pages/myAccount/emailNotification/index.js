import { useState } from "react";
import { Styles } from "./emailNotificationStyle";
import CustomedTextButton from '../customedBtn';
import CustomedCheckBox from './checkBox';

const checkLs = [
    {label: 'Notify me when new app screens have been added  '},
    {label: 'Notify me when the app screens have been updated'},
    {label: 'Notify me when the new design job is added'},
]

export default function EmailNotification(){

    return (
        <Styles>
            <div className="email-notification-container">
                <div className="email-notification-header">
                    Alerts
                </div>
                <div className="email-notification-body">
                    {checkLs.map((item, idx) => <CustomedCheckBox label={item.label} key={idx}/>)}
                </div>
                <div className='email-notification-footer'>
                    <CustomedTextButton text={"Save Changes"}/>
                </div>
            </div>
        </Styles>
    )
}