import React, { useEffect, useState } from 'react';
import { accountBar } from '../../../../assets/config';
import { Styles } from './style';
import { ReactComponent as RightArrowIcon } from '../../../../assets/img/admin/right_arrow.svg';
import { useNavigate } from 'react-router-dom';
import Profile from './profile';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const ColorButton = withStyles((theme) => ({
    root: {
        border: '1px solid #EBEAED !important',
        color: `var(--second) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-13) !important`,
        fontWeight: '400px !important',
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

export default function UserAccount(){
    const navigate = useNavigate();
    const [current, setCurrent] = useState('');

    const handleClick = (item) => {
        setCurrent(item.label);
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
                        <Profile />
                        <div className='left-panel-footer'>
                            <ColorButton>Discard</ColorButton>
                            <ColorButton className='ml-24'>Next</ColorButton>
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
                                        onClick={() => handleClick(item)}
                                    >
                                        {current !== item.label?React.createElement(item.icon, { width: 40, height: 40 }):React.createElement(item.focusIcon, { width: 40, height: 40 })}
                                        <div className={current !== item.label?'label':'label active'}>{item.label}</div>
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