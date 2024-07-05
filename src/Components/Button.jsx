import React from "react";
import PropTypes from 'prop-types'
import '../Style/Button.css'

const Button = ({text,onClick,type,className})=> {

    return (
        <button className={`button ${className}`}
        onClick={onClick} type={type} > 
        {text}

        </button>

    )
};
Button.propType={
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
    type:PropTypes.oneOf(['button','submit','reset']),
    className:PropTypes.string,

}

export  default Button