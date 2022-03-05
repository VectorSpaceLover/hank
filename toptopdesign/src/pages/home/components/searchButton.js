import React from 'react'
import { Styles } from './style/searchButtonStyle'
import SearchIcon from '@mui/icons-material/Search';
const SearchButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='search-button' {...rest}>
        <SearchIcon />
      </div>
    </Styles>
  )
}
export default SearchButton
