import React from 'react';
import styled from 'styled-components';

function Copyright({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey100};
  font-size: 13px;
  text-align: center;
`;

export default Copyright;
