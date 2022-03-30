import { useState } from 'react';
import { Styles } from './style';
import Checkbox from '@mui/material/Checkbox';

export default function CollectionViewer(){
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
    return (
        <Styles>
            <Checkbox 
                checked={checked} 
                sx={{
                    color: 'var(-txt-gray)',
                    '&.Mui-checked': {
                        color: '#84818A',
                    },
                    width: 12,
                    height: 12,
                }}
                onChange={handleChange}
            />
            <img className='image-viewer' alt='' src='/img/user/collection/collection.png'/>
        </Styles>
    )
}