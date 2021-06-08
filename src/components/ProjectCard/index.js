import React from 'react';
import { Container, GitHubIcon } from './styles';

function ProjectCard(props) {
  return (
      <Container>
          <GitHubIcon onClick={() => window.location.href = props.location} />
          <h1>{props.name.replace("-", " ")}</h1>
          <p>{props.langs}</p>
      </Container>
  );
}

export default ProjectCard;