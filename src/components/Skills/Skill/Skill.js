import React from 'react'
import classes from './Skill.module.css'
import StarRatings from 'react-star-ratings'


const skill = (props) => {
    return (
        <div className={classes.Skill}>
            <h3 className={classes.Title}>{props.title}</h3>
            <StarRatings
            rating={props.rate}
            starRatedColor="#2C5364"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            />
        </div>
    )
}

export default skill;