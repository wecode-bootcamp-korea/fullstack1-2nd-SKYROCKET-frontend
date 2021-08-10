import { useCallback, useState } from 'react';
import { projectApi } from '../config';

function useProjectsData() {
  const [projectsData, setProjectsData] = useState([]);

  const getProjectsData = useCallback((category, status) => {
    if (!category && !status) {
      console.log('kk');
      projectApi
        .list(0, 10)
        .then(res => {
          setProjectsData(res.data.projects);
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (category) {
      projectApi
        .list(0, 10, category)
        .then(res => {
          setProjectsData(res.data.projects);
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (status) {
      projectApi
        .list(0, 10, null, status)
        .then(res => {
          setProjectsData(res.data.projects);
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (category && status) {
      projectApi
        .list(0, 10, category, status)
        .then(res => {
          setProjectsData(res.data.projects);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return { projectsData, getProjectsData };
}

export default useProjectsData;
