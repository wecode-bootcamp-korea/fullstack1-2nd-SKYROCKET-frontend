import React from 'react';
import styled from 'styled-components';

function ProgressBar({ achievedRate }) {
  const rate = achievedRate > 100 ? 100 : achievedRate;

  return <StatusBar achievedRate={rate}></StatusBar>;
}

const StatusBar = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 15px;
  background: ${({ theme }) => theme.colors.grey700};

  &:after {
    display: block;
    content: '';
    width: ${({ achievedRate }) => achievedRate}%;
    height: 100%;
    background: ${({ theme }) => theme.colors.red100};
  }
`;

export default ProgressBar;
