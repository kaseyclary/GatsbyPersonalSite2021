import React from 'react'
import classes from './About.module.css'

const about = () => (
    <div className={classes.AboutBackground}>
        <div className={classes.AboutContainer}>
            <h2 className={classes.AboutHeader}>I'll keep this short...</h2>
            <ul className={classes.List}>
                <div className={classes.ListGroup}>
                    <li><h3>&#8212; 2 second background &#8212;</h3></li>
                    <li>24 years old</li>
                    <li>Lifelong Des Moines resident</li>
                    <li>Degree in Economics, passion in tech. </li>
                    <li>Product management is where I'm headed</li>
                </div>
                <div className={classes.ListGroup}>
                    <li><h3>&#8212; I'm focused on &#8212;</h3></li>
                    <li>Mastering my technical skillset</li>
                    <li>(React and AWS right now)</li>
                    <li>Building my real estate portfolio</li>
                    <li>Finding my passion project</li>
                </div>
                <div className={classes.ListGroup}>
                    <li><h3>&#8212; In the meantime, I enjoy &#8212;</h3></li>
                    <li>Exploring the world</li>
                    <li>Learning new things</li>
                    <li>Sharing my thoughts through writing</li>
                    <li>And plenty more...</li>
                </div>
            </ul>
        </div>
    </div>
)

export default about;