import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='container'>
        <div className='section'>
            <div className='columns'>
                <div className='column is-6'>
                    <img src="images/babypic.jpg" alt="Me and Jess!" className='img'/>
                </div>
                <div className='column is-6'>
                    <h1 className='title is-1'>Hello!</h1>
                    <p>I'm a graduate web developer keen to make some nerdy things together with great people. Chances are you're someone I've shared this link with so I just wanted to say a big thanks for taking the time. One of my teachers used to call me "unbridled curiosity" and that sounds about right - I lOVE puzzles, so I want to poke systems and build things for work. </p>
                </div>

            </div>
        </div>
    </div>
)

export default Home