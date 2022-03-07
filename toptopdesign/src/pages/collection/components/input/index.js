import { Styles } from './style/inputStyle';
import { useState } from 'react';

export default function Input(){
    const [collectionName, setCollectionName] = useState('');

    const handleChange = (e) => {
        setCollectionName(e.target.value);
    }

    return (
        <Styles>
            <input
                className='input'
                onChange={e => handleChange(e)}
                value={collectionName}
                placeholder=""
            />
        </Styles>
    )
}