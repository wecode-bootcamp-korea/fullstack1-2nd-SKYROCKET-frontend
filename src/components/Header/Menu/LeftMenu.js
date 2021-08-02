import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import styled from 'styled-components';
import ProjectModal from '../../Modal/ModalProject/ModalProjectPage';

function LeftMenu() {
  const [modalOn, setModalOn] = useState(false);

  const onOpenModal = () => {
    setModalOn(!modalOn);
  };

  const Modal = () => {
    return <ProjectModal onClick={onOpenModal} />;
  };
  return (
    <Left>
      <ProjectLooKAround onClick={onOpenModal}>
        <IconBox>
          <TiThMenu />
        </IconBox>
        <Title>프로젝트 둘러보기</Title>
      </ProjectLooKAround>
      {modalOn ? <Modal /> : ''}
      <ProjetSubmit>
        <Link to="/project-create">
          <Title>프로젝트 올리기</Title>
        </Link>
      </ProjetSubmit>
    </Left>
  );
}

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 25%;
  text-align: center;
  height: 65px;
`;

const ProjectLooKAround = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  margin-right: 14px;
  padding: 0;
  border-style: none;
  background-color: #ffffff;
  cursor: pointer;
  text-align: center;
`;

const ProjetSubmit = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  height: 45px;
  padding-bottom: 3px;
  margin-left: 14px;
  cursor: pointer;
`;

const IconBox = styled.div`
  margin-right: 5px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  right: 90%;
`;

export default LeftMenu;
