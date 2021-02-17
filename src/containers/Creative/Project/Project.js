import React from 'react'
import classes from './Project.module.css'
import Card from '../../../components/Card/Card'
import { checkPropTypes } from 'prop-types'

const project = (props) => {
    return(
        <div className={classes.Project}>
            <Card title={props.title} image={props.image} size='small'/>
            {props.children}
        </div>
    )
}

export default project;