import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const exclusionRoutes = ['/login', '/signup'];

function Header({ location: { pathname } }) {
  if (exclusionRoutes.includes(pathname)) return null;

  return <Text>~ Header 영역 ~</Text>;
}

const Text = styled.p``;

export default withRouter(Header);
