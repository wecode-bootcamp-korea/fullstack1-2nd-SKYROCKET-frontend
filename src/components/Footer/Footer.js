import React from 'react';
import { withRouter } from 'react-router-dom';
import FooterContentWrap from './components/FooterContentWrap';

const exclusionRoutes = ['/login', '/signup'];

function Footer({ location: { pathname } }) {
  if (exclusionRoutes.includes(pathname)) return null;

  return <FooterContentWrap />;
}

export default withRouter(Footer);
