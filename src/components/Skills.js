import React from 'react';
import styled from 'styled-components';
import apple from '../images/skills/apple-original.svg';
import html from '../images/skills/html5-original.svg';
import css from '../images/skills/css3-original.svg';
import javascript from '../images/skills/javascript-original.svg';
import react from '../images/skills/react-original.svg';
import ruby from '../images/skills/ruby-plain.svg';
import rails from '../images/skills/rails-plain-wordmark.svg';
import postgresql from '../images/skills/postgresql-original.svg';
import webpack from '../images/skills/webpack-original.svg';
import git from '../images/skills/git-original.svg';
import github from '../images/skills/github-original.svg';
import vscode from '../images/skills/visualstudio-plain.svg';
import reactRouter from '../images/skills/reactRouter.svg';
import redux from '../images/skills/redux.svg';
import styledComponent from '../images/skills/styledComponent.png';
import { Container, Header, } from '../styles/shared';

class Skills extends React.Component {

  displaySkills = (type) => {

    const skills = [
      { name: 'html', icon: html, type: 'frontend' },
      { name: 'css', icon: css, type: 'frontend' },
      { name: 'javascript', icon: javascript, type: 'frontend' },
      { name: 'react', icon: react, type: 'frontend' },
      { name: 'redux', icon: redux, type: 'frontend' },
      { name: 'react router', icon: reactRouter, type: 'frontend' },
      { name: 'styled-components', icon: styledComponent, type: 'frontend' },
      { name: 'ruby', icon: ruby, type: 'backend' },
      { name: 'rails', icon: rails, type: 'backend' },
      { name: 'postgresQL', icon: postgresql, type: 'backend' },
      { name: 'webpack', icon: webpack, type: 'frontend' },
      { name: 'git', icon: git, type: 'other' },
      { name: 'github', icon: github, type: 'other' },
      { name: 'Mac OS', icon: apple, type: 'other' },
      { name: 'vscode', icon: vscode, type: 'other' },
    ];

    return skills.map((skill, i) => {
      if (skill.type === type) {
        return (
          <Column key={i}>
            <p>{skill.name}</p>
            <img src={skill.icon} style={{ width: '100px' }} />
          </Column>
        );
      }
    });
  };

  render() {
    const { mobile } = this.props;

    return (
      <Container mobile={mobile}>
        <Header>Skills</Header>
        <p>My skills include front and backend technologies. </p>
        <br />
        <br />
        <div style={{ marginBottom: '100px' }}>
          <Header sub>Frontend</Header>
          <Grid>
            {this.displaySkills('frontend')}
          </Grid>
        </div>
        <div style={{ marginBottom: '100px' }}>
          <Header sub>Backend</Header>
          <Grid>
            {this.displaySkills('backend')}
          </Grid>
        </div>
        <div style={{ marginBottom: '100px' }}>
          <Header sub>Other</Header>
          <Grid>
            {this.displaySkills('other')}
          </Grid>
        </div>
      </Container>
    );
  };
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: auto 1fr auto;
`;

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export default Skills;
