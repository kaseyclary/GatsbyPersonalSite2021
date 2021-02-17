import React from 'react'
import classes from './SocialIcon.module.css'

const socialIcon = (props) => {
    let IconStyle = null;
    
    if(props.size === 'small'){
        IconStyle = {
            height: '100px',
            width: '100px'
        }
    }
    if(props.size === 'large'){
        IconStyle = {
            height: '200px',
            width: '200px'

        }
    }

    const background = {
        background: 'url(' + props.image + ') no-repeat center center/cover'
    }

    return(
        <a href={props.link} target="_blank"><div style={{...IconStyle, ...background}} /></a>
    )
}

export default socialIcon;