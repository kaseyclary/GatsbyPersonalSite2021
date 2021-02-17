import React from 'react'
import classes from './Header.module.css'

const header = () => (
    <div className={classes.HeaderContainer}>
        <div className={classes.HeaderImage}>
            <div className={classes.HeaderContentArea}>
                <div className={classes.HeaderContent}>
                    <h2>Thanks for dropping in!</h2>
                </div>
            </div>
        </div>
    </div>
)

export default header;