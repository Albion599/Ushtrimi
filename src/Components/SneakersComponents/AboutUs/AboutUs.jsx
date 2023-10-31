import React from 'react'
import "./AboutUs.scss";
import AboutUsImg from "../../Assets/secondImg.png"
import { Link } from 'react-router-dom';

const AboutUs = () => {

    return (
    <div className='AboutUs-container' >
      <div className='AboutUs-wrapper'>
          <div className='AboutUs-text'>
              <h3 >About Us</h3>
              <h1>Elevate Your Look with <span id='orange'>Shoes</span></h1>
              <p>*From Sneakers to stilet to your shoe destination experience   comort and style with our shoes</p>
              <div className='button-aboutus'>
                <Link to="/shopall">
                  <button className='AboutUs-button'>Buy Now</button>
                </Link>
                <a href='/shopall' className='another'>Learn more</a>
              </div>
          </div>
          <div className='AboutUs-img'>
            <img className= "About-img"src={AboutUsImg} alt='AboutUs-img' />
          </div>
        </div>
      </div>
  )
}

export default AboutUs
