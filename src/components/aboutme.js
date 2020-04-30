import React, { Component } from 'react';
import './about.css';
class About extends Component {
  render() {
    return(
      <div className="container" style={{width: '50%', top: '30px'}}>
        <div>
          <h1 style={{textAlign: 'center', fontFamily: 'Italic', color: '#4B79A1'}}>About Nadia</h1>
        <hr/>
        <p style={{padding: '30px', fontSize:'medium', margin: '10px'}}>I always have been fascinated by how technology is involved in our daily lives and makes our lives easier and more productive. It also connects people globally who were not connected in the past without all of the latest that tech has to offer. And I am currently learning Full Stack Bootcamp at Gorge Washington University.</p>
        </div>   
      </div>
      

    )
  }
}

export default About;
