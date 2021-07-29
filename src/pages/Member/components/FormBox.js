import React from 'react';
import styled from 'styled-components';

function FormBox({ children }) {
  return <Box>{children}</Box>;
}

const Box = styled.div`
  width: 400px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.grey400};
  border-radius: 12px;

  h2 {
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default FormBox;
