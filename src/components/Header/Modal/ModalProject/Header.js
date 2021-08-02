import React from 'react';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import Container from '../ModalContainer';

function modal({ onClick }) {
  return (
    <Header>
      <Container>
        <ModalHeader>
          <ModalLeftMenu>
            <CloseButton onClick={onClick}>
              <CgClose />
            </CloseButton>
          </ModalLeftMenu>
          <ModalCenterMenu>
            <ModalTitle>프로젝트 둘러보기</ModalTitle>
          </ModalCenterMenu>
        </ModalHeader>
      </Container>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  box-shadow: rgb(10 10 10 / 10%) 0px 1px 2px 0px;
  z-index: 3000;
  background-color: #ffffff;
  position: fixed;
  /* margin: 0 auto; */
  left: 0;
  right: 0;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
`;

const ModalLeftMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCenterMenu = styled.div`
  width: 15rem;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
export default modal;
