import './style.css';
import React from 'react';
const Button=(props)=>{ 
    return(
        <button className='button'>{props.button}</button>
    );
}

export default Button;