import { Styles } from './style/searchBoxStyle';
import { useState } from 'react';
import SearchButton from './searchButton';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { keywords } from '../../../assets/config';
import StyledList from "../../../components/list";
import OutsideClickHandler from './outSide';

export default function SearchBox({ searchFunction, showKeyword, showKeywordList, setShowKeywordList}){
    const [currentKey, setCurrentKey] = useState('');

    const getSearchResult = () => {
        searchFunction(currentKey);
    }

    const handleChange = (event) => {
        setCurrentKey(event.target.value);
        setShowKeywordList(true);
        showKeyword();
    }

    return (
        <Styles>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setShowKeywordList(false)
                }}
            >
                <div className='search-box' >
                    <input
                        className='search-input'
                        onChange={e => handleChange(e)}
                        value={currentKey}
                        placeholder="Type keyword to search patterns or apps"
                        onClick={() => {showKeyword();setShowKeywordList(true)}}
                    />
                    <SearchButton onClick={getSearchResult}/>
                    {showKeywordList && 
                        <StyledList data={keywords} setCurrentKey={setCurrentKey} setShowKeywordList={setShowKeywordList}/>
                    }
                </div>
            </OutsideClickHandler>
        </Styles>
    )
}