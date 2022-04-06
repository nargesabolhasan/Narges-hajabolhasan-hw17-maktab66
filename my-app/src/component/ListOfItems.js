import React, {memo} from 'react'
import PropTypes from 'prop-types';

const ListOfItems = (props) => {
    const { children ,onchange,typeInput,inputId} = props
    return (
            <li>
                <input type={typeInput} onChange={onchange} value={children} id={inputId}/>
                <label htmlFor={inputId}>{children}</label>
            </li>
    )
}

export default memo(ListOfItems)

ListOfItems.propTypes = {
    typeInput: PropTypes.oneOf(['checkbox', 'hidden']).isRequired,
    onchange:PropTypes.func,
    children:PropTypes.string.isRequired,
    inputId: PropTypes.number.isRequired,
    
  };