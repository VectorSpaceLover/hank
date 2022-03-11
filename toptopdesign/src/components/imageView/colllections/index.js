import { useEffect, useState } from 'react';
import { Styles } from './style/collectionStyle';

export default function Collection({info}){
    const [createdAt, setCreatedAt] = useState('');
    useEffect(() => {
        const date = new Date(info.createdDate);
        setCreatedAt(date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate());
    }, [info])    
    return (
        <Styles>
            <div className='collection-container'>
                <div className='collection-txt'>
                    <div className='collection-name'>
                        {info.collectionName}
                    </div>
                    <div className='sub-name'>
                        {info.description}
                    </div>
                    <div className='txt'>
                        {createdAt}
                    </div>
                </div>
                <div className='image-group'>
                    <div className='image-item'>
                    </div>
                    <div className='image-item'>
                    </div>
                    <div className='image-item'>
                    </div>
                </div>
            </div>
        </Styles>
    )
}