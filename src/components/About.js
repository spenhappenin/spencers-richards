import React from 'react';
import styled from 'styled-components';
import { Container, Header } from '../styles/shared';

class About extends React.Component {
  render() {
    return (
      <Container mobile={this.props.mobile}>
        <Header>About</Header>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Circle />
        </div>
        <br />
        <div>
          <span>
            <p>Lorem ipsum dolor sit amet, in munere argumentum vel, iisque laoreet pri eu. Usu tibique temporibus in. Duo ei unum quaestio. Ad pri exerci veritus scriptorem, vix choro epicuri cu. Eum ne alii adhuc putant, te eos latine oblique scaevola, ne lorem nonumes mel.</p>
            <p>An nam viris iisque. In maiorum oporteat ullamcorper eam, mel dolores evertitur cu. Veniam vocibus fierent pro ne, in possim persius vis. Mel quis vocent posidonium te, nominati necessitatibus ei cum. Iuvaret gubergren ad mei. Dolorum definitionem concludaturque mei et.</p>
            <p>Has ei impedit sapientem, labitur legendos praesent vix id. Volutpat theophrastus eu ius. Vim ex expetenda repudiare, mei consequat pertinacia ne. Nec ubique delicata sapientem ut, ut pri tota posse denique, usu eu atqui dicam laboramus.</p>
          </span>
        </div>
      </Container>
    );
  };
};

const Circle = styled.div`
  height: 280px;
  width: 280px;
  background: white;
  border-radius: 50%;
`;

export default About;
