import React from 'react'
import classes from './Skills.module.css'
import Skill from '../Skills/Skill/Skill'

const skills = () => {
    return(
    <div className={classes.Skills}>
        <h2 className={classes.SkillsHeader}>Check out my skills</h2>
        <div className={classes.SkillsContainer}>
            <div className={classes.SkillGroup}>
                <h2 className={classes.SkillsGroupHeader}>Technical Skills</h2>
                <Skill rate={4.5} title='HTML' />
                <Skill rate={4.5} title='CSS' />
                <Skill rate={4} title='Design' />
                <Skill rate={4} title='JavaScript' />
                <Skill rate={4} title='Bootstrap' />
                <Skill rate={3.5} title='React' />
                <Skill rate={3.0} title='Node.js' />
                <Skill rate={2.5} title='C#' />
                <Skill rate={2.5} title='Python' />
                <Skill rate={2} title='Java' />
            </div>
            <div className={classes.SkillGroup}>
                <h2 className={classes.SkillsGroupHeader}>Business Skills</h2>
                <Skill rate={4.5} title='Real Estate Analysis' />
                <Skill rate={4.5} title='Personal Finance' />
                <Skill rate={4.0} title='Writing' />
                <Skill rate={4} title='Property Management' />
                <Skill rate={3.5} title='Discounted Cash Flows' />
                <Skill rate={3.5} title='Argus Enterprise' />
            </div>
            <div className={classes.SkillGroup}>
                <h2 className={classes.SkillsGroupHeader}>Soft Skills</h2>
                <Skill rate={5.0} title='Goal Setting' />
                <Skill rate={4.5} title='Public Speaking' />
                <Skill rate={4.5} title='Critical Thinking' />
                <Skill rate={4.5} title='Leadership' />
                <Skill rate={4.5} title='Influence' />
                <Skill rate={4} title='Systems Thinking' />
            </div>
        </div>
        <a href="https://www.careerexplorer.com/assessments/25b03bba-6158-420a-8398-72de99a3c8b8/results/?share=7599244f-69d4-4146-b0cc-80c790575f70" target="_blank"><div className={classes.Jobs}>See my career matches</div></a>
    </div>
    )  
}

export default skills;