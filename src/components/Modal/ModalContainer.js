import React from 'react';
import styled from 'styled-components';

function ModalContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 1032px;
  margin: auto;
`;

export default ModalContainer;
