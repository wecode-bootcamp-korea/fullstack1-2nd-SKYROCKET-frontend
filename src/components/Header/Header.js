import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LeftMenu from './Menu/LeftMenu';
import CenterMenu from './Menu/CenterMenu';
import RightMenu from './Menu/RightMenu';
import { flex } from '../../styles/mixins';

const exclusionRoutes = ['/login', '/signup'];

function Header({ location: { pathname } }) {
  if (exclusionRoutes.includes(pathname)) return null;
  return (
    <SiteHeader>
      <Container>
        <Menu>
          <LeftMenu />
          <CenterMenu />
          <RightMenu />
        </Menu>
      </Container>
    </SiteHeader>
  );
}

const SiteHeader = styled.div`
  min-width: 1080px;
  height: 65px;
`;

const Container = styled.div`
  width: 1032px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const Menu = styled.div`
  ${flex('center', 'center')};
  text-align: center;
`;
export default withRouter(Header);
