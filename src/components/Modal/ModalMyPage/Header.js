import React from 'react';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import Container from '../ModalContainer';
import { flex } from '../../../styles/mixins';

function ModalMyPageHeader({ onClick }) {
  return (
    <Header>
      <Container>
        <ModalHeader>
          <ModalCenterMenu>
            <ModalTitle>내 정보</ModalTitle>
          </ModalCenterMenu>
          <ModalLeftMenu>
            <CloseButton onClick={onClick}>
              <CgClose />
            </CloseButton>
          </ModalLeftMenu>
        </ModalHeader>
      </Container>
    </Header>
  );
}

const Header = styled.div`
  ${flex('center', 'normal')};
  position: fixed;
  left: 0;
  right: 0;
  box-shadow: rgb(10 10 10 / 10%) 0px 1px 2px 0px;
  z-index: 3000;
  background-color: #ffffff;
`;

const ModalHeader = styled.div`
  ${flex('normal', 'center')};
  width: 100%;
  height: 65px;
`;

const ModalLeftMenu = styled.div`
  ${flex('center', 'center')};
`;

const ModalCenterMenu = styled.div`
  ${flex('center', 'center')};
  width: 15rem;
  margin: 0px auto;
`;

const ModalTitle = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  border-style: none;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
export default ModalMyPageHeader;
