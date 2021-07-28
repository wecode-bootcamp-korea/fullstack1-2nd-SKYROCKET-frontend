import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import { flex } from '../../styles/mixins';

function Login() {
  return (
    <LoginContainer justify="center" align="center">
      <Text>로그인 페이지입니다!</Text>
    </LoginContainer>
  );
}

const LoginContainer = styled(Container)`
  ${flex}
  padding-top: 135px;
`;

const Text = styled.p``;

export default Login;
