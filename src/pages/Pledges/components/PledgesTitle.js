import React from 'react';
import styled from 'styled-components';

function PledgesTitle() {
  return (
    <TitleContainer>
      <TitleWrap>
        <Title>후원현황</Title>
      </TitleWrap>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey500};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;

const TitleWrap = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 40px 0 40px 0;
  font-size: 36px;
  font-weight: 320;
  line-height: 54px;
  color: #3d3d3d;
`;

export default PledgesTitle;
