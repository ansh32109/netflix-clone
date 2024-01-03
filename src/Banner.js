import React from 'react'
import './Banner.css' 
import nbg from './assets/images/NetflixBg.png';

function Banner() {
    console.log(nbg);
  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://e0.pxfuel.com/wallpapers/988/40/desktop-wallpaper-black-youtube-banner-2048x1152-youtube.jpg")`,
        backgroundPosition: 'center center',
    }}>
      <div className='banner_contents'>
        <h1 className='banner_title'>
            Movie name
        </h1>
        <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
            This is a test description.
        </h1>
      </div>

      <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner