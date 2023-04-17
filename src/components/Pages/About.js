import React from 'react';
import './About.css'
import ProfilePicture from '../../assets/Pic.jpg'

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
                        <p className="card-text">I'm Guy Anderson, a former TV producer who transitioned to coding at 40. I've made a late life switch of industries and I'm now fully committed 
                        to building innovative software that can make a difference. When not coding, I enjoy family time, gaming and keeping up with tech trends. Check out my portfolio and 
                        let's connect!</p>
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