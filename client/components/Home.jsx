import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div className='container'>
        <div className='section'>
            <div className='columns'>
                <div className='column is-6'>
                    <img src="images/babypic.jpg" alt="Me and Jess!" className='img' />
                </div>

                <div className='column is-6'>
                    <h1 className='title is-1'>Hello!</h1>
                    <p>I'm a graduate web developer keen to make some nerdy things together with great people. Chances are you're someone I've shared this link with so I just wanted to say a big thanks for taking the time.</p>
                </div>
            </div>
        </div>
        <hr />

        <div className='section portfolio'>
            <h1 className='title is-1 has-text-centered'>Portfolio</h1>
            <div className='columns is-centered'>
                <div className='column is-8'>
                    <p>Some text about EDA and portfolio. About this long... wait, this long. About this long... wait, this long. About this long... wait, this long.</p>
                </div>
            </div>

            <div className='columns'>
                <div className='column is-6'>
                    <h3 className='title is-3'>Nuts & Bolts</h3>
                    <p>Some text about the project, yada yada yada. yada yada yada. yada yada yada. yada yada yada. yada yada yada.</p>
                    <button className='button'>See more</button>
                </div>

                <div className='column is-6'>
                <img src="images/nuts-bolts-thumbnail.PNG" alt="" className='img'/>
                </div>

            </div>
        </div>
    </div>
)

export default Home