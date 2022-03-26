import React, { useEffect, useState, useCallback } from 'react';
import { accountBar } from '../../../../assets/config';
import { Styles } from './style';
import { ReactComponent as RightArrowIcon } from '../../../../assets/img/admin/right_arrow.svg';
import { useNavigate } from 'react-router-dom';
import Profile from './profile';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import AccountSetting from './accountsetting';
import Password from './password';
import Social from './social';
import NotificationSetting from './notification';
import { createCustomer, uploadAvatar } from '../../../../api/admin/users';

const ColorButton = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        border: '1px solid #EBEAED !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-manrope) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        '&:hover': {
            opacity: '.7 !important',
            color: `var(--white) !important`,
            backgroundColor: `var(--second) !important`
        },
    },
}))(Button);


const CreateButton = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        border: '1px solid #EBEAED !important',
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-manrope) !important`,
        fontSize: `var(--font-size-14) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        width: '138px !important',
        backgroundColor: 'var(--ocean-blue-pearl)',
        '&:hover': {
            opacity: '.7 !important',
            color: `var(--white) !important`,
            backgroundColor: `var(--purple) !important`
        },
    },
}))(Button);

export default function UserAccount(){
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState(0);
    const [profile, setProfile] = useState({});
    const [accountSetting, setAccountSetting] = useState({});
    const [password, setPassword] = useState('');
    const [social, setSocial] = useState({});
    const [notification, setNotification] = useState([]);
    const [isFulled, setIsFulled] = useState(false);

    const handleClick = (idx) => {
        setCurrentIdx(idx);
    }

    const uploadImage = useCallback(async() => {
        const formData = new FormData()
        formData.append('image', profile?.userAvatar);
        return await uploadAvatar(formData);
    }, [profile?.userAvatar])

    const next = async() => {
        if(currentIdx < accountBar.length - 1)
        {
            setCurrentIdx(currentIdx + 1);
            setIsFulled(false);
        }
        else{
            const res = await uploadImage();
            await createCustomer(
                { ...profile, avatarPath: res?.filePath }, 
                accountSetting, 
                password, 
                social, 
                notification
            );
            navigate('/admin/users/');
        }
    }

    return (
        <Styles>
            <div className='account-container'>
                <div className='account-header'>
                    <div className='first-line'>
                        <span style={{color: '#B6B4BA'}}>Customer </span>
                        <span>/ Add Customer</span>
                    </div>
                    <div className='second-line'>
                        Add Customer
                    </div>
                </div>
                <div className='account-body'>
                    <div className='left-panel'>
                        {currentIdx === 0 && 
                            <Profile 
                                setProfile={setProfile}
                                setIsFulled={setIsFulled}
                            />
                        }
                        {currentIdx === 1 && 
                            <AccountSetting 
                                setAccountSetting={setAccountSetting}
                                setIsFulled={setIsFulled}
                            />
                        }
                        {currentIdx === 2 && 
                            <Password 
                                setPassword={setPassword}
                                setIsFulled={setIsFulled}
                            />
                        }
                        {currentIdx === 3 && 
                            <Social 
                                setSocial={setSocial}
                                setIsFulled={setIsFulled}
                            />
                        }
                        {currentIdx === 4 && 
                            <NotificationSetting 
                                setNotification={setNotification}
                            />
                        }
                        <div className='left-panel-footer'>
                            <ColorButton onClick={() => navigate('/admin/users/')}>
                                Discard
                            </ColorButton>
                            {!isFulled && currentIdx !== 4?
                                <ColorButton 
                                    className='ml-24'
                                    onClick={() => next()}
                                >
                                    Next
                                </ColorButton>:
                                <CreateButton 
                                    className='ml-24'
                                    onClick={() => next()}
                                >
                                    Create
                                </CreateButton>
                            }
                        </div>
                    </div>
                    <div className='right-panel'>
                        <div className='right-panel-header'>
                            Account
                        </div>
                        <div className='form-group'>
                            {accountBar.map((item, idx) => {
                                return (
                                    <div 
                                        className='account-btn' 
                                        key={idx}
                                        // onClick={() => handleClick(idx)}
                                    >
                                        {currentIdx !== idx?React.createElement(item.icon, { width: 40, height: 40 }):React.createElement(item.focusIcon, { width: 40, height: 40 })}
                                        <div className={currentIdx !== idx?'label':'label active'}>{item.label}</div>
                                        <RightArrowIcon className='icon'/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}