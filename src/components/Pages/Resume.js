import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h2 className='title'>Resume:</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <p>
                  <h3>
                    Front-End Proficencies
                  </h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                  <h3>Back-End Proficencies</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL & Sequilize</li>
                    <li>Mongo & MongoDB</li>
                    <li>RESTful API's</li>
                    <li>Heroku</li>
                    <li>GraphQL</li>
                  </ul>
                  Download my resume
                </p>
                <a href='resume.pdf' download='resume.pdf' class="btn btn-primary">Download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}