import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LeftMenu from './components/LeftMenu';
import CenterMenu from './components/CenterMenu';
import RightMenu from './components/RightMenu';
import Container from '../Container/Container';
import { flex } from '../../styles/mixins';

const exclusionRoutes = ['/login', '/signup'];

function Header({ location: { pathname } }) {
  if (exclusionRoutes.includes(pathname)) return null;

  return (
    <StyledHeader>
      <HeaderContainer>
        <LeftMenu />
        <CenterMenu />
        <RightMenu />
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
  z-index: 999;
`;

const HeaderContainer = styled(Container)`
  ${flex('space-between', 'center')};
  height: 100%;
`;

export default withRouter(Header);
