import React from 'react'
import '../App.css'
import { Button } from './Button'
import { Button1 } from './Button1'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/video/video.mp4" autoPlay loop muted />
        <h1>BUSY MAMA EVENTS</h1>
        <p>BOOK WITH US!</p>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            <Button1 className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            LOGIN
            </Button1>

        </div>
    </div>
  )
}

export default HeroSection