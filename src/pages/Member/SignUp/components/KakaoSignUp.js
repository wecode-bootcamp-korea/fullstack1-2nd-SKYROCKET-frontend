import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import Button from '../../components/Button';
import OrDivider from '../../components/OrDivider';
import SignUpOrSignIn from '../../components/SignUpOrSignIn';
import { ReactComponent as LogoKakao } from '../../../../assets/LogoKakao.svg';

function KakaoSignUp({ title, toggleEmailSignUp }) {
  return (
    <>
      <h2>{title}</h2>
      <Button kakao>
        <LogoKakao />
        카카오로 시작하기
      </Button>
      <OrDivider />
      <Button onClick={toggleEmailSignUp} basic>
        <EmailIcon />
        이메일로 가입하기
      </Button>
      <SignUpOrSignIn login>
        <p>이미 SKYROCKET 계정이 있으신가요?</p>
        <Link to="/login">기존 계정으로 로그인하기</Link>
      </SignUpOrSignIn>
    </>
  );
}

const EmailIcon = styled(HiOutlineMail)`
  margin-right: 8px;
  font-size: 20px;
`;

export default KakaoSignUp;
