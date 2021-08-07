import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

function LeftMenu() {
  return (
    <LeftMenuBox>
      <ListLink to="/discover">프로젝트 둘러보기</ListLink>
      <ProjectCreateLink to="/project-create">
        프로젝트 올리기
      </ProjectCreateLink>
    </LeftMenuBox>
  );
}

const LeftMenuBox = styled.div`
  ${flex('flex-start', 'center')};
  flex: 1;
  height: 100%;
`;

const ListLink = styled(Link)`
  ${flex('center', 'center')};
  margin-right: 30px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red100};
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

const ProjectCreateLink = styled(Link)`
  ${flex('center', 'center')};
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.6;
  }
`;

export default LeftMenu;
