import { Styles } from './style/searchBoxStyle';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../../../assets/img/user/collection/search.svg';

export default function SearchBox(){
    const [currentKey, setCurrentKey] = useState('');

    const handleChange = () => {

    }

    return (
        <Styles>
            <div className='search-box' >
                <input
                    className='search-input'
                    onChange={e => handleChange(e)}
                    value={currentKey}
                    placeholder="Search collection..."
                />
                <SearchIcon className='search-btn'/>
            </div>
        </Styles>
    )
}