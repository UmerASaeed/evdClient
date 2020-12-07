import React from "react"
import "./subfield.styles.css"
const SubField = ({fieldName}) =>
{
    return(
        <div>
            <p className="subfield">{fieldName.toUpperCase()}</p>
        </div>
    );
}

export default SubField;