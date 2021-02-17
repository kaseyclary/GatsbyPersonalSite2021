import React from 'react'
import classes from './Header.module.css'
import TypeWriterEffect from 'react-typewriter-effect'

const header = () => (
    <div className={classes.HeaderContainer}>
        <div className={classes.HeaderImage}>
            <div className={classes.HeaderContentArea}>
                <div className={classes.HeaderContent}>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Amatic SC',
                        color: '#3F3D56',
                        fontWeight: 700,
                        fontSize: '4rem',
                        textAlign: 'center',
                    }}
                    startDelay={500}
                    cursorColor="#3F3D56"
                    multiText={[
                        'Thanks for Dropping in!',
                        "I'm Kasey, the...",
                        'Engineer',
                        'Designer',
                        'Thinker',
                        'Builder',
                        'Scroll on to learn more!'
                    ]}
                    multiTextDelay={1200}
                    typeSpeed={30}
                />
                </div>
            </div>
        </div>
    </div>
)

export default header;