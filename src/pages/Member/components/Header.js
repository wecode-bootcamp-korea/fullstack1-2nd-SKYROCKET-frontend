import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flex } from '../../../styles/mixins';
import { ReactComponent as Logo } from '../../../assets/LogoSkyrocketWithIcon.svg';

function MemberHeader() {
  return (
    <Header>
      <Link to="/">
        <LogoSkyrocket />
      </Link>
    </Header>
  );
}

const Header = styled.header`
  ${flex('center', 'center')}
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: rgb(10 10 10 / 10%) 0px 1px 2px 0px;
  z-index: 999;
`;

const LogoSkyrocket = styled(Logo)`
  width: 150px;
  height: 30px;
  fill: #333;
`;

export default MemberHeader;
