import React from 'react';
import cx from 'classnames';

const Button = ({ buttonText, buttonType, buttonStyle, navigationPath, buttonAction, target,isSecondaryButton }) => {
    return (
        <>
            {buttonType == 'link' ?
                <a href={navigationPath} className={cx(buttonStyle, isSecondaryButton ? 'secondary_button' : 'primary_button')} target={target}>{buttonText}</a> :
                <button className={cx(buttonStyle, isSecondaryButton ? 'secondary_button' : 'primary_button')} onClick={buttonAction}>{buttonText} </button>}
        </>
    )
}

export default Button
