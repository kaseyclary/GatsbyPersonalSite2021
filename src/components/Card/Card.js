import React from 'react'
import classes from './Card.module.css'

const card = (props) => {

    let sizeStyle = null;

    let background = {
        background: 'url(' + props.image + ') no-repeat center center/cover'
    }

    if(props.size === 'large') {
        console.log('this is a large card')
        sizeStyle = {
            height: '300px',
            width: '450px',
            borderRadius: '25px',
            fontSize: '1.5rem',
            lineHeight: '2.2rem'
        }
    }
    else {
        console.log('this is a small card')
        sizeStyle = {
            height: '200px',
            width: '275px',
            borderRadius: '15px',
            fontSize: '1.15rem',
            lineHeight: '2rem'
        }
    }

    const styleList = [background, sizeStyle];

    return (
        <div className={classes.Card} style={{...background, ...sizeStyle}}>
            <div className={classes.Shader}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default card;
