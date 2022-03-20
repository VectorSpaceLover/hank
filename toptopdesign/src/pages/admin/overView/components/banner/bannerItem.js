import React from 'react';
import { Styles } from './bannerItemStyle';
import { ReactComponent as InCreaseIcon } from '../../../../../assets/img/admin/increase.svg';
import { ReactComponent as DeCreaseIcon } from '../../../../../assets/img/admin/decrease.svg';

export default function BannerItem(props){
    const {icon, name, totalNumber, percent, todayUser, high} = props.info;
    console.log(props.info);
    return (
        <Styles>
            <div className={name === 'Total Users'?'banner-item banner-active': 'banner-item'}>
                <div className='item-header'>
                    {React.createElement(icon, { width: 24, height: 24})}
                    <div className='header-txt'>
                        {name}
                    </div>
                </div>
                <div className='total-counts'>
                    {totalNumber}
                </div>
                <div className='item-footer'>
                    {high?<InCreaseIcon />:<DeCreaseIcon />}
                    <div className='increase-percent'>
                        {`${percent}%`}
                    </div>
                    <div className='today-user'>
                        {`+${todayUser}k today`}
                    </div>
                </div>
            </div>
        </Styles>
    )
}