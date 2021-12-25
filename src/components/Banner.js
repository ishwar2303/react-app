import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../components/css/Banner.css'

export default function Banner() {
    return (
        <div className='banner-container'>
            <video src='videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className='banner-btns'>
                <Link to='/sign-up' className='btn btn--primary btn--medium'>GET STARTED</Link>
                <Link to='/sign-in' className='btn btn--primary btn--medium'>WATCH TRAILER  <i className='far fa-play-circle' /></Link>
            </div>
        </div>
    )
}
