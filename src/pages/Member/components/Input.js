import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.grey500};
  border-radius: 12px;
  caret-color: ${({ theme }) => theme.colors.red100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey100};
    font-weight: 300;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  & + & {
    margin-top: 12px;
  }
`;

export default Input;
