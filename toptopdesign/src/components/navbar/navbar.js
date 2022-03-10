import React, { useState } from 'react';
import { Styles } from './style/navbarStyle';
import { navbarData } from '../../assets/config';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as Alarm } from '../../assets/img/user/home/alarm.svg';
import { ReactComponent as Gift } from '../../assets/img/user/home/gift.svg';
import { ReactComponent as ProfileIcon } from '../../assets/img/user/home/profile.svg';
import { ReactComponent as SettingIcon } from '../../assets/img/user/home/setting.svg';
import { ReactComponent as SupportIcon } from '../../assets/img/user/home/support.svg';
import { ReactComponent as SignOutIcon } from '../../assets/img/user/home/signout.svg';
import { ReactComponent as CollectionsIcon } from '../../assets/img/user/home/collections.svg';
import { ReactComponent as VoiceIcon } from '../../assets/img/user/home/voice.svg';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {messages} from '../../assets/config';
import { useNavigate } from "react-router-dom"

const dateStyle = {
    fontFamily: "PP Telegraf-Regular", 
    fontSize: 10, 
    fontWeight: 400, 
    fontStyle: 'normal',
};

const txtStyle = {
    fontFamily: "PP Telegraf-Regular", 
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
}

const menuItemStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'end', 
    width: '100%', 
    justifyContent: 'space-between'
};

const viewAllStyle = {
    color: '#7c00ff',
    fontFamily: "PP Telegraf-Regular", 
    minHeight: 15,
    minWidth: 119,
    letterSpacing: 0,
    textDecoration: 'underline',
    textAlign: 'center',
    cursor: 'pointer',
    paddingTop: 4,
}

function Navbar() {
    const navigate = useNavigate()
    const { items, signIn, line38 } = navbarData;
    const [isSigned, setSigned] = useState(false);

    const [anchorGift, setAnchorGift] = useState(null);
    const [anchorAlarm, setAnchorAlarm] = useState(null);
    const openGift = Boolean(anchorGift);
    const openAlarm = Boolean(anchorAlarm);
    const openGiftMenu = (event) => {
        setAnchorGift(event.currentTarget);
    };
    const openAlarmMenu = (event) => {
        setAnchorAlarm(event.currentTarget);
    };
    const closeGiftMenu = () => {
        setAnchorGift(null);
    };
    const closeAlarmMenu = () => {
        setAnchorAlarm(null);
    };
    const viewMessage = (idx) =>  {
        navigate(`/myaccount?id=${idx}`);
    }

    return (
        <Styles>
            <div className='before-container'>
                <div className='navbar'>
                    <div className='home'>
                        Home
                    </div>
                    <img className='title-img'  src='/img/user/banner.svg' alt='banner' />
                    {!isSigned? (
                        <div className='small-btn-outline' >
                            <div className='sign-in-btn' >{signIn}</div>
                            <img className='sign-in-arrow' src={line38} alt='arrow' />
                        </div>
                    ):(
                        <div className='icon-group'>
                            <IconButton 
                                aria-label="delete"
                                onClick={openAlarmMenu}
                            >
                                <Alarm className='icon alarm' />
                            </IconButton>
                            <IconButton 
                                className='gift' 
                                aria-label="gift"
                                onClick={openGiftMenu}
                            >
                                <Gift className='icon' />
                            </IconButton>
                        </div>
                    )}
                </div>
            </div>
            
        </Styles>
    );
}

export default Navbar;


