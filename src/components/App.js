import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import Sidebar from './Sidebar';
import Skills from './Skills';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import '../App.css';

class App extends Component {
  state = { sidebar: false, windowWidth: window.innerWidth, };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize = (e) => {
    const innerWidth = e.target.window.innerWidth;
    if (innerWidth > 550)
      this.setState({ sidebar: false });
    this.setState({ windowWidth: window.innerWidth });
  };

  toggleSidebar = () => this.setState({ sidebar: !this.state.sidebar });

  render() {
    const { sidebar, windowWidth } = this.state;

    return (
      <AppContainer>
        <Navbar toggleSidebar={this.toggleSidebar} windowWidth={windowWidth} />
        { sidebar && windowWidth < 550 ? <Sidebar sidebar={this.toggleSidebar} /> : null }
        <Switch>
          <Route exact path='/' render={ props => <Home windowWidth={windowWidth} mobile={windowWidth < 961} /> } />
          <Route exact path='/about' render={ props => <About mobile={windowWidth < 961} /> } />
          <Route exact path='/contact' render={ props => <Contact mobile={windowWidth < 961} /> } />
          <Route exact path='/skills' render={ props => <Skills mobile={windowWidth < 961} /> } />
          <Route component={NoMatch} />
        </Switch>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default App;
