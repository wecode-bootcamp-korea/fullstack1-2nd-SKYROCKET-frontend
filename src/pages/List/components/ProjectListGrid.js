import React from 'react';
import styled from 'styled-components';
import ProjectItemCard from './ProjectItemCard';

function ProjectListGrid({ projectsData }) {
  return (
    <StyledProjectListGrid>
      {projectsData.map(data => (
        <ProjectItemCard key={data.id} {...data} />
      ))}
    </StyledProjectListGrid>
  );
}

const StyledProjectListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 85px 35px;
`;

export default ProjectListGrid;
