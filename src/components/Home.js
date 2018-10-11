import React from 'react';
import styled from 'styled-components';
import { Container, Header } from '../styles/shared';

class Home extends React.Component {
  render() {
    const { mobile, } = this.props;

    return (
      <Container home mobile={mobile}>
        <Header mobile={mobile}>Hi,</Header>
        <br />
        <Header mobile={mobile}>I'm Spencer,</Header>
        <br />
        <Header mobile={mobile}>Web Developer</Header>
        <br />
        <Header mobile={mobile}>&</Header>
        <br />
        <Header mobile={mobile}>Cat Lover</Header>
        <br />
        <LogoContainer>
          <MainIcon mobile={mobile} />
        </LogoContainer>
      </Container>
    );
  };
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  bottom: 45px;
  right: 46px;
`;

const MainIcon = styled.div`
  height: ${ props => props.mobile ? '280px' : '380px'};
  width: ${ props => props.mobile ? '280px' : '380px'};
  background: white;
  transform: rotate(77deg);
`;

export default Home;
