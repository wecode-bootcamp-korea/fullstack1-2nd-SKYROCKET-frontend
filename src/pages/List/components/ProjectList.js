import React from 'react';
import styled from 'styled-components';
import ProjectCounter from './ProjectCounter';
import ProjectListGrid from './ProjectListGrid';
import Container from '../../../components/Container/Container';

function ProjectList({ projectsData }) {
  return (
    <StyledProjectList>
      <ProjectListContainer>
        <ProjectCounter amount={projectsData.length} />
        <ProjectListGrid projectsData={projectsData} />
      </ProjectListContainer>
    </StyledProjectList>
  );
}

const StyledProjectList = styled.section``;

const ProjectListContainer = styled(Container)`
  padding: 85px 0 120px;
`;

export default ProjectList;
