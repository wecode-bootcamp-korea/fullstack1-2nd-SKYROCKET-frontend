import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import { projectApi } from '../../config';
import FundingStatus from './FundingStatus';
import ProjectContents from './ProjectContents';
import ProjectIntroduction from './ProjectIntroduction';

function Detail({ match }) {
  const [projectData, setProjectData] = useState([]);
  const [totalBackers, setTotalBackers] = useState(0);
  const { id: projectId } = match.params;

  const getProjectData = async () => {
    try {
      const res = await projectApi.detail(projectId);
      setTotalBackers(res.data.totalBackers);
      setProjectData(res.data.detailData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <>
      <Container>
        <ProjectIntroduction {...projectData} />
        <FundingStatus totalBackers={totalBackers} {...projectData} />
      </Container>
      <ProjectContents {...projectData} />
    </>
  );
}

export default Detail;
