import React from 'react'
import { Link } from 'react-router-dom'

function TeamCardItem(props) {
    return (
        <>
            <li className='team-card'>
                <figure className='team-card-pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Travel Image'
                        className='team-card-img' />
                    <div className='social-links'>
                        <Link to=''>
                            <i className='fab fa-facebook' />
                        </Link>
                        <Link to=''>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link to=''>
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link to=''>
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </figure>
                <div className='team-card-info'>
                    <p className=''>{props.text}</p>
                </div>
            </li>
        </>
    )
}

export default TeamCardItem
