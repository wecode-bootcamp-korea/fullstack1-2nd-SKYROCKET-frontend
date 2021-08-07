import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { flex } from '../../../styles/mixins';

function LeftMenu() {
  return (
    <LeftMenuBox>
      <HeaderNav>
        <HamburgerMenuIcon />
        프로젝트 둘러보기
      </HeaderNav>
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

const HeaderNav = styled.div`
  ${flex('center', 'center')};
  height: 100%;
  margin-right: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const ProjectCreateLink = styled(Link)`
  ${flex('center', 'center')};
  height: 100%;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    opacity: 0.6;
  }
`;

const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.grey200};
  font-size: 17px;
`;

export default LeftMenu;
