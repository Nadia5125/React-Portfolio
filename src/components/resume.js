import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'left'}}>
              <img
                src="https://avatars2.githubusercontent.com/u/54503646?s=460&u=5e554e2cf5dd9bb934d884b2ebb4312665b1e62a&v=4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em', fontFamily: 'Italic'}}>Nadia</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I always have been fascinated by how technology is involved in our daily lives and makes our lives easier and more productive. It also connects people globally who were not connected in the past without all of the latest that tech has to offer. And I am currently learning Full Stack Bootcamp at Gorge Washington University.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker VA Park, 94025</p>
            <h5>Phone</h5>
            <p>(651) 315-0071</p>
            <h5>Email</h5>
            <p>nsifferath@nmstrader.com</p>          
           
            
          
            <h5>Web</h5>            
            <a style={{color: 'blue', display: 'hiden'}} href="https://nadia5125.github.io/PortFolio/index.html" rel="noopener noreferrer" target="_blank">mywebsite<p></p>
            </a>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: 'Italic'}}>Education</h2>


            <Education              
              schoolName="Temple University Japan"
              schoolDescription="International Business/Trade/Commerce/Public Relations/Image Management"
               />
               
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2 style={{fontFamily: 'Italic'}}>Experience</h2>

            <Experience        
              jobTitle="First Job"
              jobName="Marketing And Public Relations Specialist"
              jobDescription="Manage activity for women group that included fund raising for education opportunities for children in third world countries."
              />

              <Experience                
                jobTitle="Second Job"
                jobName="Project Manager"
                jobDescription="Managed plans and activities for fund raising for medical, shelter, food and clothing for refugees"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 style={{fontFamily: 'Italic'}}>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={80}
                />
                <Skills
                  skill="React"
                  progress={30}
                  />
                  <Skills
                    skill="javascript"
                    progress={20}
                    />                
                    <Skills
                      skill="NodeJS"
                      progress={20}
                      />            


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
