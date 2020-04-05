import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Italic'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link style={{fontFamily: 'Italic'}} to="/resume">Resume</Link>
                <Link style={{fontFamily: 'Italic'}} to="/aboutme">About Me</Link>
                <Link style={{fontFamily: 'Italic'}} to="/projects">Projects</Link>
                <Link style={{fontFamily: 'Italic'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Italic'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link style={{fontFamily: 'Italic'}} to="/resume">Resume</Link>
              <Link style={{fontFamily: 'Italic'}} to="/aboutme">About Me</Link>
              <Link style={{fontFamily: 'Italic'}} to="/projects">Projects</Link>
              <Link style={{fontFamily: 'Italic'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
