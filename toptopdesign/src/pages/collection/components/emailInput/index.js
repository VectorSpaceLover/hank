import { Styles } from './style/emailInputStyle';
import { useState } from 'react';

export default function EmailInput(){
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <Styles>
            <textarea 
                className='input'
                onChange={e => handleChange(e)}
                value={email}
            />
        </Styles>
    )
}