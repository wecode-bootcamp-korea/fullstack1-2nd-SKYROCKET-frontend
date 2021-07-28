import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../../components/Container/Container';
import ProjectCard from './ProjectCard';

function ProjectList() {
  const [productImageState, setProductImageState] = useState([]);

  useEffect(() => {
    fetch('data/ProductCardData.json')
      .then(res => res.json())
      .then(data => setProductImageState(data.ProductCardData));
  }, []);

  return (
    <MainProjectContainer>
      <Title>Game</Title>
      <ProjectGrid>
        {productImageState.map(item => {
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
