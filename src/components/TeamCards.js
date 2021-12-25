import React from 'react'
import TeamCardItem from './TeamCardItem'

function TeamCards() {
    return (
        <div className='team-cards'>
            <h1 className='heading'>Meet Our Team</h1>
            <div className='team-cards-wrapper'>
                <ul className='cards__items'>
                    <TeamCardItem 
                        src='images/img-1.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='Ishwar Baisla'
                        path='/services'
                    />
                    <TeamCardItem 
                        src='images/img-6.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='FirstName LastName'
                        path='/services'
                    />
                    <TeamCardItem 
                        src='images/img-7.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='FirstName LastName'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <TeamCardItem 
                        src='images/img-2.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='FirstName LastName'
                        path='/services'
                    />
                <TeamCardItem 
                        src='images/img-3.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='FirstName LastName'
                        path='/services'
                    />
                    <TeamCardItem 
                        src='images/img-4.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        label='FirstName LastName'
                        path='/services'
                    />
                </ul>

            </div>
        </div>
    )
}

export default TeamCards
