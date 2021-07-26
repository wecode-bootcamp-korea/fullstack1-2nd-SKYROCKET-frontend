import React from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/mixins';

function Main() {
  return (
    <Container justify="space-between" align="center">
      <Text>메인 페이지입니다!</Text>
    </Container>
  );
}

const Container = styled.div`
  ${flex}
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export default Main;
