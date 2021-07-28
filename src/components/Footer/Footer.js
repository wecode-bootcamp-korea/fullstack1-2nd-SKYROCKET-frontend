import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const exclusionRoutes = ['/login', '/signup'];

function Footer({ location: { pathname } }) {
  if (exclusionRoutes.includes(pathname)) return null;

  return <Text>~ Footer 영역 ~</Text>;
}

const Text = styled.p``;

export default withRouter(Footer);
