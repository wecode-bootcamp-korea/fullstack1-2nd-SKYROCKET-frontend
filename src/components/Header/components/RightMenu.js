import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { flex } from '../../../styles/mixins';

function RightMenu() {
  return (
    <RightMenuBox>
      <StyledLink to="/login">
        <SignInSignUp>로그인 / 회원가입</SignInSignUp>
        <UserAvatarIcon />
      </StyledLink>
    </RightMenuBox>
  );
}

const RightMenuBox = styled.div`
  ${flex('flex-end', 'center')};
  flex: 1;
  height: 100%;
`;

const StyledLink = styled(Link)`
  ${flex('center', 'center')};
  height: 100%;

  &:hover {
    opacity: 0.7;
  }
`;

const SignInSignUp = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const UserAvatarIcon = styled(FaUserCircle)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.grey200};
  font-size: 38px;
`;

export default RightMenu;
