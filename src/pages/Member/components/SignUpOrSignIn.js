import React from 'react';
import styled, { css } from 'styled-components';
import { flex } from '../../../styles/mixins';

function SignupOrSignin({ children, ...rest }) {
  return <Contents {...rest}>{children}</Contents>;
}

export const memberLink = css`
  color: ${({ theme }) => theme.colors.blue100};
  font-size: 13px;
  font-weight: 400;
  text-decoration: underline;
`;

const Contents = styled.div`
  ${flex('center', 'center')}
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: 13px;
  font-weight: 400;

  ${({ login }) =>
    login &&
    css`
      flex-direction: column;

      a {
        ${memberLink}
        display: block;
        margin-top: 7px;
      }
    `}

  ${({ signup }) =>
    signup &&
    css`
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};

      a {
        ${memberLink}
        margin-left: 10px;
      }
    `}
`;

export default SignupOrSignin;
