import React from 'react';
import styled, { css } from 'styled-components';
import { flex } from '../../../styles/mixins';

function Button({ className, children, ...rest }) {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${flex('center', 'center')};
  width: 100%;
  height: 52px;
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.7;
  }

  ${({ basic }) =>
    basic &&
    css`
      color: ${({ theme }) => theme.colors.grey300};
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey400};
    `}

  ${({ kakao }) =>
    kakao &&
    css`
      background: ${({ theme }) => theme.colors.kakaoYellow};
      border: 1px solid ${({ theme }) => theme.colors.kakaoYellow};

      & .logoKakao {
        width: 20px;
        margin-right: 10px;
      }
    `}

  ${({ primary }) =>
    primary &&
    css`
      margin-top: 25px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.red100};
      border: 1px solid ${({ theme }) => theme.colors.red100};
      font-weight: bold;
    `}
`;

export default Button;
