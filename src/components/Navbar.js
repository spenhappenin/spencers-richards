import React, { Fragment } from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';
import { withRouter, } from 'react-router-dom';
// import logo from '../images/srlogo-white.png';
import logo from '../images/logo/s-blue.png';

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

class Navbar extends React.Component {

  renderSocials = () => {
    const socials = [
      { name: 'Linkedin', url: linkedinDefault },
      { name: 'Facebook', url: facebookDefault },
      { name: 'Twitter', url: twitterDefault }
    ];

    return socials.map((social, index) => {
      const { url } = social;

      return (
        <IconContainer key={index} social>
          <Icon social src={url} />
        </IconContainer>
      );
    });
  };

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
    const { windowWidth } = this.props;
    return (
      <NavbarContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        {
          windowWidth > 550 ?
            <Fragment>
              <ItemsContainer>
                { this.renderItems() }
              </ItemsContainer>
              <SocialContainer>
                { this.renderSocials() }
              </SocialContainer>
            </Fragment>
            :
            <ItemsContainer mobile>
              <IconContainer onClick={this.props.toggleSidebar}>
                <Icon src={sidebarDefault} />
              </IconContainer>
            </ItemsContainer>
        }
      </NavbarContainer>
    );
  };
};

const Logo = styled.img`
  height: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NavbarContainer = styled.div`
  align-items: center;
  background: #181818;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  width: 60px;

  @media (max-width: 960px) {
    height: 60px;
    width: 100vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    flex-direction: row;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
  @media (max-width: 960px) {
    flex-direction: row;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

const LogoContainer = styled.div`
  background: #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 960px) {
    width: 57px;
    height: 60px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ props => props.social ? "30px" : "51px"};
  width: 60px;

  @media (max-width: 960px) {
    height: 51px;
    width: ${ props => props.social ? "25px" : "60px"}
  }
  &:hover {
    background: ${ props => props.social ? null : '#262627'};
  }
`;

const Icon = styled.img`
  height: ${ props => props.social ? "25px" : "23px"};
  width: ${ props => props.social ? "25px" : "23px"};
`;

export default withRouter(Navbar);
