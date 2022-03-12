import { Styles } from './style/searchBoxStyle';
import { useState } from 'react';
import { keywords } from '../../../assets/config';
import StyledList from "../../../components/list";
import OutsideClickHandler from './outSide';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = withStyles((theme) => ({
    root: {
        color: `var(--white)`,
        position: 'absolute',
        right: -2,
        top: 1,
        backgroundColor: `var(--black-normal)`,
        cursor: 'pointer',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 112,
        height: 53,
        borderRadius: 63,
        textTransform: 'none',
        transition: '.3s ease',
        '&:hover': {
            opacity: '.7',
            backgroundColor: `var(--black-hover)`,
        },
    },
  }))(Button);

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
                    <SearchButton onClick={getSearchResult}>
                        <SearchIcon />
                    </SearchButton>
                    {showKeywordList && 
                        <StyledList data={keywords} setCurrentKey={setCurrentKey} setShowKeywordList={setShowKeywordList}/>
                    }
                </div>
            </OutsideClickHandler>
        </Styles>
    )
}