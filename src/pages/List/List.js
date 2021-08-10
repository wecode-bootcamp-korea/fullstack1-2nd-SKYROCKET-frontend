import React, { useEffect } from 'react';
import ProjectList from './components/ProjectList';
import useProjectsData from '../../hooks/useProjectsData';

function List() {
  const { projectsData, getProjectsData } = useProjectsData();

  useEffect(() => {
    getProjectsData();
  }, []);

  return (
    <>
      <ProjectList projectsData={projectsData} />
    </>
  );
}

export default List;
