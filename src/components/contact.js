import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';
import App from '../App';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>       

          <h3 style={{position: 'relative', left: '150px', fontFamily: 'Italic'}}>Contact Form</h3>
          <hr style={{position: 'relative', right: '60px', width: '60%'}}/>
          <form>
            <div className="contact" style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '15px'}}> 
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <br></br>
                  <input style={{width: '300px', height: '30px'}} type="text" className="form-control" />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <br></br>
                  <input style={{width: '300px', height: '30px'}} type="email" className="form-control" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <br></br>
                  <textarea  style={{width: '300px', height: '90px'}} className="form-control" rows="5"></textarea>
              </div>
              <Button type="submit" className="btn btn-outline-secondary" style={{backgroundColor: '#4B79A1', color: 'white'}}>Submit</Button>
            </div>
          </form>          



          </Cell>
          <Cell col={6}>
            <h2 style={{position: 'relative', left: '280px'}}>Contact Me</h2>
            <hr style={{position: 'relative', left: '80px', width: '70%'}}/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (651) 315-0071
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (651) 315-0071
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    nsifferath@nmstrader.com
                    <a href="mailto:nsifferath@nmstrader.com"  traget="_blank">
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contact;
