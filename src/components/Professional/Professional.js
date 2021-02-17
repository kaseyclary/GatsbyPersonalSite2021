import React from 'react';
import classes from './Professional.module.css'
import Card from '../Card/Card'
import dynamoImg from '../../images/Dynamo.jpg'
import principalImg from '../../images/Principal.jpg'
import drakeImg from '../../images/Drake.jpeg'
import ProfessionalBlock from '../Professional/ProfessionalBlock/ProfessionalBlock'

const professional = () => {
    //Will create an array of objects for section data... will need to eventually migrate to Contentful calls.

    return (
        <div className={classes.ProfessionalContainer}>
            <div className={classes.HeaderText}>
                <h2>My Journey (So far)</h2>
                <h4>*If you want more details, ask me for my resume</h4>
            </div>
            <ProfessionalBlock title="Dynamo, LLC" image={dynamoImg} size='large'>
                <div className={classes.Title}>
                    <h2>Delivery Engineer</h2>
                    <h3>Jun 2019 - Present</h3>
                </div>
                <div className={classes.Title}>
                    <h2>Research Analyst</h2>
                    <h3>Jan 2019 - Jun 2019</h3>
                </div>
            </ProfessionalBlock>
            <ProfessionalBlock title="Principal Financial Group" image={principalImg} size='large'>
                <div className={classes.Title}>
                    <h2>Business Analyst Intern</h2>
                    <h3>May 2018 - Sept 2018</h3>
                </div>
                <div className={classes.Title}>
                    <h2>Financial Analyst Intern</h2>
                    <h3>(Commercial Real Estate)</h3>
                    <h3>May 2017 - Jan 2018</h3>
                </div>
            </ProfessionalBlock>
            <ProfessionalBlock title="Drake University" image={drakeImg} size='large'>
                <div className={classes.Title}>
                    <h2>BSBA - Economics</h2>
                    <h3>Class of 2018</h3>
                    <h3>2 time international scholar</h3>
                </div>
            </ProfessionalBlock>
        </div>
    )
}




export default professional;