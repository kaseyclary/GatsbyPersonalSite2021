import React from 'react'
import classes from './Creative.module.css'
import Project from '../Creative/Project/Project'
import reDealPhoto from '../../images/ReDeals.png'
import KCCPhoto from '../../images/KCC.png'
import blackjackPhoto from '../../images/blackjack.png'
import houseImg from '../../images/duplex.jpg'
import blockchainImg from '../../images/blockchain.png'
import otherSideImg from '../../images/OtherSide.jpeg'

const creative = (props) => {
    return(
        <div className={classes.CreativeContainer}>
            <div className={classes.CreativeContent}>
                <h2 className={classes.CreativeHeader}>Some Featured Creations</h2>
                <div className={classes.ShowcaseContainer}>
                    <div className={classes.Left}>
                        <h3>&#8212;Left Brain&#8212;</h3>
                        <h3 className={classes.Subtext}>(Programming)</h3>
                        <a href="https://www.redealanalyzer.com" target="_blank">
                            <Project title="Real Estate Deal Analyzer" image={reDealPhoto}>
                                <p>I built this to quickly in JS run the numbers on potential rentals. It has grown organically over time. I'm currently rewriting it in React.</p>
                            </Project> 
                        </a>
                        <a href="https://www.kyliescharcuteriecreations.com/" target="_blank">
                            <Project title="Kylie's Charcuterie Creations" image={KCCPhoto}>
                                <p>This is a catering business website that's currently in production. Built in React using Gatsby.</p>
                            </Project>
                        </a>
                        <a href="https://angry-mclean-a20408.netlify.app/" target="_blank">
                            <Project title="Single Deck Blackjack" image={blackjackPhoto}>
                                <p>A small single-deck blackjack game that I built from scratch in vanilla JS. Testing my logic skillz.</p>
                            </Project>
                        </a>
                        <h3 className={classes.Subtext}>Source code and other projects available on my <a href="https://github.com/kaseyclary" target="_blank">Github</a></h3>
                    </div>
                    <div className={classes.Right}>
                        <h3 className={classes.Right}>&#8212;Right Brain&#8212;</h3>
                        <h3 className={classes.Subtext}>(Writing)</h3>
                        <a href="https://kaseyclary.blog/2021/02/16/how-to-live-for-free-in-your-20s-series/" target="_blank">
                            <Project title="How to live for free in your 20s" image={houseImg}>
                                <p>This series helps make real estate investing accessible to everyone.</p>
                            </Project>
                        </a>
                        <a href="https://kaseyclary.blog/2021/02/16/elementary-blockchain-series/" target="_blank">
                            <Project title="Elementary Blockchain" image={blockchainImg}>
                                <p>This series outlines blockchain technology for non-technical folks.</p>
                            </Project>
                        </a>
                        <a href="https://kaseyclary.blog/2021/02/14/why-the-other-side-sucks/" target="_blank">
                            <Project title="Why the Other Side Sucks" image={otherSideImg}>
                                <p>This article examines cognitive biases and how they lead to divisiveness</p>
                            </Project>
                        </a>
                        <h3 className={classes.Subtext}>Check out the rest of my writing and stay up to date with my <a href="https://www.kaseyclary.blog" target="_blank">blog</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default creative;