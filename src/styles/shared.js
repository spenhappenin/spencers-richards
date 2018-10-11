import styled from 'styled-components';
// import logo from '../images/srlogo-white.png';

export const Container = styled.div`
  margin: 65px 10% 65px 10%;
  width: ${ props => props.mobile ? null : '100%'};
`;

export const Header = styled.span`
  font-size: ${ props => props.mobile ? '30px' : '50px'};
`;
