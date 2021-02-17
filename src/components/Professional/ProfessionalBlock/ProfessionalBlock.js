import React from 'react'
import classes from './ProfessionalBlock.module.css'
import Card from '../../Card/Card'


//This will use the same logic that professional uses for Card props
//This will just give a whole section for experience
const professionalBlock = (props) => {
    
    return(
        <div className={classes.ProfessionalBlock}>
            <div className={classes.Card}>
                <Card title={props.title} image={props.image} size={props.size}/>
            </div>
            <div className={classes.WriteUp}>
                <div className={classes.WriteUpContent}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default professionalBlock;