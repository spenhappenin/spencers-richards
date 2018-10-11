import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
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
        <Switch>
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
