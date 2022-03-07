import React from 'react'
import { Styles } from './style/customedBtnStyle';
import { ReactComponent as AddIcon } from '../../../../assets/img/user/collection/add.svg';

const CustomedButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='btn-container' {...rest}>
        <AddIcon className='icon'/>
        <div className='txt'>{text}</div>
      </div>
    </Styles>
  )
}
export default CustomedButton
