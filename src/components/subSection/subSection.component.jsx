import React from 'react'
import "./subSection.styles.css"

const SubSection = ({titles,children,salesTitles,walletTitles}) =>
{
    return(
        <div className="Content" >
            <div className="subSection">
               <div className={ salesTitles ? "salesTitles" : walletTitles ? "walletTitles" : "titles" }>
                    { 
                        titles ?
                        titles.map((title,index)=>
                        {
                           return <p key={index} className="dynamic-title" style={{width:100/titles.length + "%"}}>{title}</p> 
                        })
                        : null
                    }
               </div>
               {
                   children ? <div> {children} </div>: null
               }
            </div>
        </div>
    );
}

export default SubSection;