import React from 'react'
import "./customButton.styles.css"

const CustomButton = ({btnText,del,header,downloaded}) =>
{
    return(
        <div>
            <button type="button" className={header ? "cButtonHeader" : del ? "cButton cBtn-del" : !downloaded ? "cButton" : "cbtn"}>{btnText.toUpperCase()}</button>
        </div>
    );
}

export default CustomButton