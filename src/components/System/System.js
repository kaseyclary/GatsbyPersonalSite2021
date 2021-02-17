import React from 'react'
import classes from './System.module.css'

const system = () => {
    return(
        <div className={classes.SystemContainer}>
            <h2>&#8212;My System&#8212;</h2>
            <h3 className={classes.Subtext}>(current iteration...)</h3>
            <ul>
                <li><a href='https://www.youtube.com/watch?v=ZbQh1ZPG5pc' target="_blank">Discipline</a></li>
                <li><a href="https://www.youtube.com/watch?v=SZEo1KFjTn4" target="_blank">Work on what excites you</a></li>
                <li><a href="https://genius.com/Stephen-r-covey-habit-2-begin-with-the-end-in-mind-annotated" target="_blank">Begin with the end in mind</a></li>
                <li><a href="https://www.amazon.com/War-Art-Steven-Pressfield-ebook/dp/B007A4SDCG" target="_blank">Learn to love the process</a></li>
                <li><a href="https://designthinkingformuseums.net/2013/04/25/getting-out-there-a-bias-towards-action/" target="_blank">Be biased toward action</a></li>
                <li><a href='https://twitter.com/ramit/status/902216220778405890' target="_blank">Seek expert perspective</a></li>
                <li><a href='https://kk.org/thetechnium/1000-true-fans/' target="_blank">Strive for 1,000 true fans</a></li>
                <li><a href="https://www.youtube.com/watch?v=WnJjTh0BCo4" target="_blank">Be a role model</a></li>
            </ul>
            <h3 className={classes.Subtext}>( ^ click them )</h3>
        </div>
    )
}

export default system;










