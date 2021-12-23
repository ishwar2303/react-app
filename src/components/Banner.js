import React from 'react'

import '../App.css'
import { Button } from './Button'
import './Banner.css'

export default function Banner() {
    return (
        <div className='banner-container'>
            <video src='videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className='banner-btns'>
                <Button
                    className='btns'
                    buttonStyle='button--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='button--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}
