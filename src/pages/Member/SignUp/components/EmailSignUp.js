import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SignUpOrSignIn from '../../components/SignUpOrSignIn';
import OrDivider from '../../components/OrDivider';
import { CHECKBOXES } from '../../data/checkBoxes';
import { ReactComponent as LogoKakao } from '../../../../assets/LogoKakao.svg';

function EmailSignUp({ title }) {
  const [isChecked, setIsChecked] = useState([false, false, false, false]);

  const handleSingleCheck = event => {
    const { checked, id } = event.target;
    let statusUpdatedArray = [...isChecked];

    if (checked) {
      statusUpdatedArray.splice(id - 1, 1, true);
      setIsChecked(statusUpdatedArray);
    } else {
      statusUpdatedArray.splice(id - 1, 1, false);
      setIsChecked(statusUpdatedArray);
    }
  };

  const handleAllCheck = event => {
    const { checked } = event.target;

    checked
      ? setIsChecked([true, true, true, true])
      : setIsChecked([false, false, false, false]);
  };

  return (
    <>
      <h2>{title}</h2>
      <Form>
        <InputGroup>
          <InputLabel htmlFor="name">이름</InputLabel>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="사용하실 이름을 입력해주세요."
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="email">이메일 주소</InputLabel>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="이메일 주소를 입력해주세요."
          />
          <Input
            type="text"
            name="emailCheck"
            placeholder="이메일 주소를 확인합니다."
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            maxLength="20"
          />
          <Input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 확인합니다."
            maxLength="20"
          />
        </InputGroup>
        <AgreementGroup>
          <Agreement type="all">
            <Checkbox
              id="all"
              type="checkbox"
              value="all"
              onChange={handleAllCheck}
              checked={isChecked.every(Boolean)}
            />
            <AgreementLabel htmlFor="all">전체동의</AgreementLabel>
          </Agreement>
          {CHECKBOXES.map((checkBox, index) => (
            <Agreement key={checkBox.id} type={checkBox.id}>
              <Checkbox
                id={checkBox.id}
                type="checkbox"
                value={checkBox.label}
                onChange={handleSingleCheck}
                checked={isChecked[index]}
              />
              <AgreementLabel htmlFor={checkBox.id}>
                {checkBox.label}
              </AgreementLabel>
            </Agreement>
          ))}
        </AgreementGroup>
        <Button primary>가입하기</Button>
      </Form>
      <SignUpOrSignIn login>
        <p>이미 SKYROCKET 계정이 있으신가요?</p>
        <Link to="/login">기존 계정으로 로그인하기</Link>
      </SignUpOrSignIn>
      <OrDivider />
      <Button kakao>
        <LogoKakao />
        카카오로 시작하기
      </Button>
    </>
  );
}

const Form = styled.form``;

const InputGroup = styled.div`
  margin-bottom: 25px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.grey300};
  font-weight: 300;
`;

const AgreementGroup = styled.div``;

const Agreement = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  ${props => {
    if (props.type === 'all') {
      return css`
        padding-bottom: 15px;
        border-bottom: 1px solid ${props.theme.colors.grey500};
        font-weight: bold;
      `;
    }
  }}
`;

const AgreementLabel = styled.label`
  position: relative;
  display: block;
  padding: 3px 27px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
  }

  &:before {
    top: 50%;
    left: 0;
    width: 16px;
    height: 16px;
    margin-top: -9px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey100};
    border-radius: 2px;
  }

  &:after {
    top: 50%;
    left: 5px;
    width: 5px;
    height: 10px;
    margin-top: -8px;
    border-right: 2px solid ${({ theme }) => theme.colors.white};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
    opacity: 0;
  }
`;

const Checkbox = styled.input`
  display: none;

  &[type='checkbox']:checked + ${AgreementLabel} {
    &:before {
      background: ${({ theme }) => theme.colors.red100};
      border: 1px solid ${({ theme }) => theme.colors.red100};
    }

    &:after {
      opacity: 1;
    }
  }
`;

export default EmailSignUp;
