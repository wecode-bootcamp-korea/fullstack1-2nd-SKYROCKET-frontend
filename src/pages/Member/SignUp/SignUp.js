import React, { useState } from 'react';
import styled from 'styled-components';
import EmailSignUp from './components/EmailSignUp';
import KakaoSignUp from './components/KakaoSignUp';
import Header from '../components/Header';
import Copyright from '../components/Copyright';
import FormBox from '../components/FormBox';
import Container from '../../../components/Container/Container';
import { flex } from '../../../styles/mixins';

function SignUp() {
  const [isEmailSignUp, setIsEmailSignUp] = useState(false);

  const toggleEmailSignUp = () => setIsEmailSignUp(!isEmailSignUp);

  return (
    <>
      <Header />
      <SignUpContainer>
        <FormBox>
          {isEmailSignUp ? (
            <EmailSignUp title="이메일로 가입하기" />
          ) : (
            <KakaoSignUp
              title="가입하기"
              isEmailSignUp={isEmailSignUp}
              toggleEmailSignUp={toggleEmailSignUp}
            />
          )}
        </FormBox>
        <Copyright>© 2021 SKYROCKET</Copyright>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled(Container)`
  ${flex('center', 'center')};
  flex-direction: column;
  padding: 140px 0;
`;

export default SignUp;
