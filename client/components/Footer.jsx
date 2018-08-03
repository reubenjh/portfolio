import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <div>
        <hr />
        <div className='columns is-centered has-text-centered is-multiline'>
            <div className='column is-12'>
                <h3 className='subtitle is-3 is-footer-heading'>Contact</h3>
            </div>
            <div className='column is-4'>
                <div className='columns'>
                    <div className='column is-4'>
                        <i className="icon fab fa-github fa-lg"></i>
                        <br />
                        <span>github</span>
                    </div>
                    <div className='column is-4'>
                        <i className="icon fab fa-linkedin-in fa-lg"></i>
                        <br />
                        <span>linkedin</span>
                    </div>
                    <div className='column is-4'>
                        <i className="icon far fa-envelope fa-lg"></i>
                        <br />
                        <span>email</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer