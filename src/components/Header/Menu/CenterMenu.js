import React from 'react';
import styled from 'styled-components';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function CenterMenu() {
  return (
    <CenterMenuBox>
      <LogoBox>
        <Link to="/">
          <LogoImg src={Logo} alt="skyRocketLogo" />
        </Link>
      </LogoBox>
    </CenterMenuBox>
  );
}

const CenterMenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  position: absolute;
  margin: 0px auto;
  padding: 0px 1rem;
  cursor: pointer;
  inset: 0px;
`;

const LogoBox = styled.a``;

const LogoImg = styled.img`
  width: 140px;
  height: 65px;
`;

export default CenterMenu;
