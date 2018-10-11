import React from 'react';
import styled from 'styled-components';
import { Container, Header, } from '../../styles/shared';

class HeatherOlsenArt extends React.Component {
  render() {
    return (
      <Container mobile={this.props.mobile}>
        <Header>Heather Olsen Art</Header>
        <br />
        <ProjectContainer>
          <TextContainer>
            <p>Lorem ipsum dolor sit amet, dolorum offendit te ius, appellantur conclusionemque duo cu. Eos ne animal nonumes. His an facilisi prodesset, eam ex audiam mnesarchum dissentias. Regione fierent reformidans an pro, detracto constituam at est. Nec doming definiebas no. Nam mentitum mnesarchum definiebas ad.</p>
            <p>Eos an minim oblique rationibus, pro ad natum omnes vitae, inimicus similique voluptatum ea per. Mei legimus appareat inimicus et, nonumes gubergren an nec. Congue epicuri facilisi cu sit, probo meliore sit at. An purto tamquam democritum pri, te amet praesent pri. Vulputate vituperata voluptatibus qui eu, sed cu vero adhuc.</p>
            <p>Tritani delenit utroque mei ut, vivendum facilisi at ius, te nominavi liberavisse has. Euismod accommodare vim no, usu no quod contentiones. Recusabo percipitur eu vel, ius eu nullam epicurei. Quo eripuit deseruisse id, mei option accusam definitiones cu. In soleat noster possim nec, usu solet laboramus cotidieque et.</p>
            <p>Feugiat legendos ius no, an nec albucius molestie recusabo. Ut nonumy diceret convenire usu. Per te vero verear. Eos ne graece definitiones, ex qui velit integre, in quaestio vituperatoribus mel. Eu virtute partiendo expetendis his, vim facer tractatos disputationi ei. Iudico euismod deleniti mei ea, eu novum comprehensam vis.</p>
            <p>Modus iracundia ad eum. Has an sumo epicurei philosophia. Omnesque interesset dissentiunt an eos, eu vidit efficiendi pri. Vis aeque dolorem ne, nec ea pertinacia suscipiantur, delenit qualisque urbanitas est ex. Ne eam esse quot solum, in partiendo definiebas has. Per in tibique mandamus dissentiet, eum veri error erroribus ei, ea mea partiendo iudicabit.</p>
          </TextContainer>
          <ImagesContainer>
            <div style={{ height: '200px', width: '100%', border: '1px solid white', margin: '10px' }}></div>
            <div style={{ height: '200px', width: '100%', border: '1px solid white', margin: '10px' }}></div>
            <div style={{ height: '200px', width: '100%', border: '1px solid white', margin: '10px' }}></div>
            <div style={{ height: '200px', width: '100%', border: '1px solid white', margin: '10px' }}></div>
          </ImagesContainer>
        </ProjectContainer>
      </Container>
    );
  };
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  flex: 8;
  flex-basis: 450px;
  /* border: 1px solid red; */
`;

const ImagesContainer = styled.div`
  flex: 1;
  flex-basis: 500px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid yellow; */
`;

export default HeatherOlsenArt;
