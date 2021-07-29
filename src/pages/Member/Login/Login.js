import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FormBox from '../components/FormBox';
import Button from '../components/Button';
import OrDivider from '../components/OrDivider';
import Input from '../components/Input';
import SignUpOrSignIn, { memberLink } from '../components/SignUpOrSignIn';
import Copyright from '../components/Copyright';
import Container from '../../../components/Container/Container';
import { ReactComponent as LogoKakao } from '../../../assets/LogoKakao.svg';
import { flex } from '../../../styles/mixins';

function Login() {
  return (
    <>
      <Header />
      <LoginContainer>
        <FormBox>
          <h2>로그인</h2>
          <Button kakao>
            <LogoKakao />
            카카오 로그인
          </Button>
          <OrDivider />
          <Form>
            <Input type="text" name="email" placeholder="이메일 주소 입력" />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호 입력"
            />
            <Button primary>로그인</Button>
          </Form>
          <SignUpOrSignIn signup>
            아직 텀블벅 계정이 없으신가요?
            <Link to="/signup">가입하기</Link>
          </SignUpOrSignIn>
          <ForgotPassword>
            <Link to={window.location.pathname}>
              혹시 비밀번호를 잊으셨나요?
            </Link>
          </ForgotPassword>
        </FormBox>
        <Copyright>© 2021 SKYROCKET</Copyright>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled(Container)`
  ${flex('center', 'center')};
  flex-direction: column;
  padding: 140px 0;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const ForgotPassword = styled.div`
  text-align: center;

  a {
    ${memberLink}
  }
`;

export default Login;
