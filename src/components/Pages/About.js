import React from 'react';
import './About.css'
import ProfilePicture from '../../../assets/Pic.jpg'

export default function About() {

    return (

        <div>
          <h2 className='position'>About Me:</h2>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="card border-info mb-3 container-fluid">
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img src={ProfilePicture} class="img-fluid rounded-start" alt="Guy Anderson Profile Pic" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">A little about me..</h5>
                        <p className="card-text">Hello, and welcome to my coding portfolio! My name is Guy Anderson, and I am a former television producer who has recently 
                        made the transition to coding at the age of 40. After spending many years in the television industry, I decided to explore a new field that could challenge 
                        me intellectually and provide me with the opportunity to make a difference in the world through technology.
                        <br/>
                        I attended the Australian Film, Television and Radio School (AFTRS), where I honed my skills in directing and screenwriting and while I am still passionate 
                        about screenwriting, I am now fully committed to pursuing my passion for coding and 
                        building innovative applications and software that can change people's lives for the better.
                        <br/>
                        Outside of work, I am a proud husband and father to a beautiful wife and a two-year-old daughter. In my free time, I enjoy spending time with my family, 
                        reading about new technological advancements and keeping up with the latest trends in the world of coding. Thank you for taking the time to learn a little 
                        bit about me. Please feel free to explore my portfolio and reach out if you have any questions or would like to collaborate on a project. I look forward to 
                        connecting with you!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
};