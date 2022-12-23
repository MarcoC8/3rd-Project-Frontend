import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';
import'./AboutUs.css';

function AboutUs() {
    return (
        <div className='section'>
        <div className='container'>
            <div className='content-section'>
                <div className='title'>
                    <h1>About Us</h1>
                </div>
                <div className='content'>
                    <h3>Who is BusyMamaEvents?</h3>
                    <p>
                        Hello guys! My name is Melissa Crespo and I'm your typical small business owner, taking on an extra role to help my family.
                        I'm a mother of two beautiful kids (Sophia and Alexander) and a fiance to an amazing indiviual, Adrian.
                        I grew up dancing ballet as a way to express myself and my creativity, obviously as time goes on, those old hobbies
                        come and go but the passion always stays. I started this business as a new way to express myself and help other families visions
                        come to life. I do everything from ballon garlands, centerpieces, backdrops, and even event planning! Whatever it maybe that you need
                        please don't hesitate to come in contact with me so I can help bring those ideas forward.  
                    </p>
                </div>
                <div className='social'>
                    <Link to=''><i className={'fab fa-instagram'} /></Link>
                </div>
            </div>
            <div className='image-section'>
            <img src='images/AboutUs.jpeg' className='img'/>
            </div>
        </div>
        </div>
    )
}

export default AboutUs;