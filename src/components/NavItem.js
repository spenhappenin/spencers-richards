import React from 'react';
import styled from 'styled-components';
import { NavLink, } from 'react-router-dom';

class NavItem extends React.Component {
  state = { hovered: false };

  toggleHover = () => this.setState({ hovered: !this.state.hovered });

  render() {
    const { hovered } = this.state;
    const { item: { hover, path, url, }, active } = this.props;

    return (
      <NavLink to={path} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>
        <IconContainer>
          {
            active ?
              <Icon src={hover} />
              :
              <Icon src={hovered ? hover : url} />
          }
        </IconContainer>
      </NavLink>
    );
  };
};

const Icon = styled.img`
  height: ${ props => props.social ? "25px" : "23px"};
  width: ${ props => props.social ? "25px" : "23px"};
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

export default NavItem;
