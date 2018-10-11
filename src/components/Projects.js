import React from 'react';
import styled from 'styled-components';
// import Project from './Project';
import { Link, } from 'react-router-dom';
import { projects, } from '../data/projects';
import { Container, Header, } from '../styles/shared';

class Projects extends React.Component {

  displayProjects = () => {
    return projects.map(project => (
      <Link key={project.id} to={`/projects/${project.path}`}>
        <Column src={project.src}>
          <ProjectSquare>
            <h1>Spencer</h1>
          </ProjectSquare>
        </Column>
      </Link>
    ));
  };

  render() {
    const { mobile, } = this.props;

    return (
      <Container mobile={mobile}>
        <Header>Projects</Header>
        <br />
        <br />
        <br />
        <Grid>
          { this.displayProjects() }
        </Grid>
      </Container>
    );
  };
};

const ProjectSquare = styled.div`
  background-image: ${ props => props.src};
  color: green;

  &:nth-child(1) {
    display: none;
  }

  &:hover {
    color: yellow;
    
    &:nth-child(1) {
      /* display: block; */
      color: red;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-template-rows: auto 1fr auto;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  height: 200px;
  background: url(${ props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Projects;
