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
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const { items, signIn } = navbarData;
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
                            <div className='sign-in-btn' >SIGN IN</div>
                            <img className='sign-in-arrow' src='/img/arrowright.svg' alt='arrow' />
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
                            <Menu
                                anchorEl={anchorGift}
                                id="account-menu"
                                open={openGift}
                                onClose={closeGiftMenu}
                                onClick={closeGiftMenu}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    width: 286,
                                    borderRadius: 4,
                                    padding: '24px 23px 4px 23px',
                                    '@media screen and (max-width: 600px)': {
                                        width: 270,
                                    },
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={closeGiftMenu} disableRipple>
                                    <ProfileIcon style={{ marginRight: 14 }} />
                                    My Profile
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={closeGiftMenu} disableRipple>
                                    <CollectionsIcon style={{ marginRight: 14 }}/>
                                    Collections
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={closeGiftMenu} disableRipple>
                                    <SettingIcon style={{ marginRight: 14 }} />
                                    Settings
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={closeGiftMenu} disableRipple>
                                    <SupportIcon style={{ marginRight: 14 }} />
                                    Support
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={closeGiftMenu} disableRipple>
                                    <SignOutIcon style={{ marginRight: 14 }} />
                                    Sign Out
                                </MenuItem>
                            </Menu>
                            <Menu
                                anchorEl={anchorAlarm}
                                id="account-menu"
                                open={openAlarm}
                                onClose={closeAlarmMenu}
                                onClick={closeAlarmMenu}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    width: 421,
                                    '@media screen and (max-width: 600px)': {
                                        width: 343,
                                        height: 347,
                                    },
                                    borderRadius: 4,
                                    padding: '24px 4px 14px 4px',
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {messages && messages.map((val, idx) => {
                                    let res = '';
                                    if(idx < 5){
                                        res =   <div key={idx}>
                                                    <MenuItem onClick={(event) => {viewMessage(idx);closeAlarmMenu(event)}} disableRipple disabled={idx===4?true:false}>
                                                        <div style={menuItemStyle}>
                                                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
                                                                <VoiceIcon style={{ marginRight: 7 }} />
                                                                <div style={txtStyle}>{val.title}</div>
                                                            </div>
                                                            <div style={dateStyle}>{val.date}</div>
                                                        </div>
                                                    </MenuItem>
                                                    <Divider/>
                                                </div>;
                                    }else{
                                        if(idx === 5){
                                            res = <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} key={idx}>
                                                    <a
                                                        href='/myaccount/all'
                                                        style={viewAllStyle}
                                                    >
                                                        View all messages
                                                    </a>
                                                </div>
                                        };
                                    }
                                    return res;
                                })}
                            </Menu>
                        </div>
                    )}
                </div>
            </div>
            
        </Styles>
    );
}

export default Navbar;


