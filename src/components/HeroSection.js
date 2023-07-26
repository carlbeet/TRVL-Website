import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeroSection.css'
import vid from '../videos/video-1.mp4'; //need .. to move out of components folder

function HeroSection() {
  return (
    <div className = 'hero-container'>
        
        <video src = {vid} autoPlay loop muted ></video>
        <h1> Hey, bingus </h1>
        <p> what re you waiting for? </p>
        <div className = 'hero-btns'> 
        <Button className = 'btns'
        buttonStyle='btn--outline' 
        buttonSize = 'btn--large'
        link = './services' > Get Started 
        </Button>
        <Button className = 'btns'
        buttonStyle='btn--primary' 
        buttonSize = 'btn--large'
        link = './assets/trailer' > Watch Trailer <i class="fa-regular fa-circle-play"></i>
        </Button>
        </div>
    </div>
  )
}

export default HeroSection