import React from 'react'
import '../components/css/Cards.css'

import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination</h1>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-2.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                        src='images/img-5.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-7.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                        src='images/img-3.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-4.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                    />
                </ul>

            </div>
        </div>
    )
}

export default Cards
