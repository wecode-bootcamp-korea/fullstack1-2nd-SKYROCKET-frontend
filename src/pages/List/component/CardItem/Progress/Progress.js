import React from 'react';
import styled from 'styled-components';

function ProgressBar({ percent }) {
  return (
    <ProgressBox>
      <ProgressLine percent={percent}></ProgressLine>
    </ProgressBox>
  );
}
const ProgressBox = styled.div`
  height: 2px;
  width: 100%;
  border-radius: 50px;
`;

const ProgressLine = styled.div`
  width: ${props => props.percent}%;
  height: 100%;
  background-color: red;
  text-align: center;
`;

export default ProgressBar;
