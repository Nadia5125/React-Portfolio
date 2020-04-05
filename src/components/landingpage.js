import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://avatars2.githubusercontent.com/u/54503646?s=460&u=5e554e2cf5dd9bb934d884b2ebb4312665b1e62a&v=4"
              alt="avatar"
              className="avatar-img" 
              />

            <div className="banner-text" style={{ width: '80%'}}>>
              <h1 style={{fontSize: '20px', fontFamily: 'Italic'}}>Nadia</h1>
              <h1 style={{fontSize: '20px', fontFamily: 'Italic'}}>Full Stack Web Developer</h1>
            <hr/> 
            {/* <p>Full Stack Web Developer</p>        */}
          <p style={{ width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '18px'}}>HTML/CSS | JSX | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nadia-ms-85b0341a0/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Nadia5125" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://twitter.com/NadiaMS18" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

          {/* Stackoverflow */}
          <a href="https://stackoverflow.com/users/11979371/nadia-ms?tab=profile" rel="noopener noreferrer" target="_blank">
          <i class="fa fa-stack-overflow" aria-hidden="true"></i> 
          </a>
          
        </div>

        <div>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
};

export default Landing;
