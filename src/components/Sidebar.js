import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';
import { withRouter, } from 'react-router-dom';

// ---  default  ---
import aboutDefault from '../images/about-default.svg';
import mailDefault from '../images/mail-default.svg';
import facebookDefault from '../images/facebook-default.svg';
import homeDefault from '../images/home-default.svg';
import linkedinDefault from '../images/linkedin-default.svg';
import eyeDefault from '../images/eye-default.svg';
import settingsDefault from '../images/settings-default.svg';
import sidebarDefault from '../images/sidebar-default.svg';
import twitterDefault from '../images/twitter-default.svg';

// ---  cyan  ---
import about from '../images/about-cyan.svg';
import eye from '../images/eye-cyan.svg';
import home from '../images/home-cyan.svg';
import mail from '../images/mail-cyan.svg';
import settings from '../images/settings-cyan.svg';
import sidebar from '../images/sidebar-cyan.svg';

class Sidebar extends React.Component {

  renderItems = () => {
    const { location: { pathname } } = this.props;
    const items = [
      { hover: home, name: 'Home', path: '/', url: homeDefault, },
      { hover: about, name: 'About', path: '/about', url: aboutDefault, },
      { hover: settings, name: 'Skills', path: '/skills', url: settingsDefault, },
      { hover: eye, name: 'Projects', path: '/projects', url: eyeDefault, },
      { hover: mail, name: 'Contact', path: '/contact', url: mailDefault, },
    ];

    return items.map((item, index) => {
      return <NavItem active={pathname === item.path} key={index} item={item} />;
    });
  };

  render() {
    return (
      <SidebarContainer>
        <ItemsContainer>
          { this.renderItems() }
        </ItemsContainer>
      </SidebarContainer>
    );
  };
};

const SidebarContainer = styled.div`
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-around;
  width: 100vw;
  margin-top: 60px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default withRouter(Sidebar);
