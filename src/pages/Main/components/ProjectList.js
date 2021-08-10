import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container/Container';
import ProjectCard from './ProjectCard';
import { projectApi } from '../../../config';

function ProjectList() {
  const [projectsData, setProjectsData] = useState([]);

  const getProjectsData = async (offset, limit, category) => {
    try {
      const response = await projectApi.list(offset, limit, category);
      console.log(response);
      setProjectsData(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectsData(0, 9, 1);
  }, []);

  return (
    <MainProjectContainer>
      <Title>Game</Title>
      <ProjectGrid>
        {projectsData.map(item => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </ProjectGrid>
    </MainProjectContainer>
  );
}

const MainProjectContainer = styled(Container)``;

const ProjectGrid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(4, minmax(auto, auto));
`;

const Title = styled.div`
  font-size: 28px;
  margin: 20px 0 20px 0;
`;

export default ProjectList;
