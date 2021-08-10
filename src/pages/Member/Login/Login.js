import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import useKakaoLogin from '../../../hooks/useKakaoLogin';
import useFormInput from '../../../hooks/useFormInput';
import Header from '../components/Header';
import FormBox from '../components/FormBox';
import Button from '../components/Button';
import OrDivider from '../components/OrDivider';
import Input from '../components/Input';
import SignUpOrSignIn, { memberLink } from '../components/SignUpOrSignIn';
import Copyright from '../components/Copyright';
import Container from '../../../components/Container/Container';
import { userApi } from '../../../config';
import { ReactComponent as LogoKakao } from '../../../assets/LogoKakao.svg';
import { flex } from '../../../styles/mixins';

function Login() {
  const { handleKakaoLogin } = useKakaoLogin();
  const [email, onChangeEmail] = useFormInput('');
  const [password, onChangePassword] = useFormInput('');
  const history = useHistory();

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const res = await userApi.login(email, password);

      if (res.data.accessToken) {
        localStorage.setItem('token', res.data.accessToken);
        alert('환영합니다 우주인님💕');
        history.push('/');
      }
    } catch {
      alert('아이디 또는 비밀번호가 일치하지 않습니다🥲');
    }
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <FormBox>
          <h2>로그인</h2>
          <Button onClick={handleKakaoLogin} kakao>
            <LogoKakao />
            카카오 로그인
          </Button>
          <OrDivider />
          <Form>
            <Input
              onChange={onChangeEmail}
              type="text"
              name="email"
              placeholder="이메일 주소 입력"
            />
            <Input
              onChange={onChangePassword}
              type="password"
              name="password"
              placeholder="비밀번호 입력"
            />
            <Button onClick={handleLogin} primary>
              로그인
            </Button>
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
