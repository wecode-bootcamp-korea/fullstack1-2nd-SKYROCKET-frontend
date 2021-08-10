import React from 'react';
import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

function ProjectCounter({ amount }) {
  return (
    <StyledProjectCounter>
      <Text>
        <NumberOfProjects>{amount}</NumberOfProjects>개의 프로젝트가 있습니다.
      </Text>
    </StyledProjectCounter>
  );
}

const StyledProjectCounter = styled.div`
  ${flex('space-between', 'center')};
  margin-bottom: 30px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 16px;
  font-weight: 400;
`;

const NumberOfProjects = styled.span`
  color: ${({ theme }) => theme.colors.red100};
`;

export default ProjectCounter;
