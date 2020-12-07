import React from "react";
import {connect} from 'react-redux';
import SubField from "../subField/subField.component";
import Section from "../section/section.component";
import SectionsList from "../../assets/sectionslist"

import "./navigator.styles.css"
const Navigator = ({currentSection}) => 
{
    return(
        <div className="navigator">
            <h2 className="evd">evdportal</h2>
            <div className='subf'>
                <SubField fieldName="Client"/>
            </div>
            <br/><br/>
            <div className="sections">
                {
                    SectionsList.map((section,index)=>
                    {
                        return <Section key={index} navigateTo={`${section}`} addClass={section === currentSection ? currentSection : ""} />
                    })    
         
                }   
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentSection:state.section.currentSection
})



export default connect(mapStateToProps)(Navigator);