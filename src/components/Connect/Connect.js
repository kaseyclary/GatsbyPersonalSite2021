import React from 'react'
import classes from './Connect.module.css'
import SocialIcon from '../SocialIcon/SocialIcon'
import twitterImg from '../../images/Twitter.png'
import linkedInImg from '../../images/LinkedIn.png'

const connect = () => {
    return(
        <div className={classes.ConnectContainer}>
            <div className={classes.ConnectText}>
                <h2>Want to work together?</h2>
                <h3>Or just connect?</h3>
                <p>You can find me here. Again, don't be afraid to reach out!</p>
            </div>
            <div className={classes.SocialContainer}>
                <SocialIcon size='large' image={twitterImg} link="https://twitter.com/kaseyclary1"/>
                <SocialIcon size='large' image={linkedInImg} link="https://www.linkedin.com/in/kasey-clary-125a9310a/"/>
            </div>
            <div className={classes.CallToAction}>
                <h3>Want a site like this one?</h3>
                <p>Or a business website, or an ecommerce site, or a web application?</p>
                <p>Maybe just a design?</p>
                <p><a href="mailto:mail.kaseyc@gmail.com" target="_blank">Let me know!</a> I do freelance work, and I'd be happy to help out.</p>
            </div>
        </div>
    )
}

export default connect;