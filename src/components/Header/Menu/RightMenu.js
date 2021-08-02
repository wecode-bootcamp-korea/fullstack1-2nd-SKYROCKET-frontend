import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import ModalMyPage from '../../Modal/ModalMyPage/ModalMypage';

function RightMenu() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));
  const [modalOn, setModalOn] = useState(false);

  const onOpenModal = () => {
    setModalOn(!modalOn);
  };

  const Modal = () => {
    return <ModalMyPage onClick={onOpenModal} />;
  };

  return (
    <RightMenuBox>
      <Search>
        <FiSearch />
      </Search>
      <UserBox onClick={onOpenModal}>
        <UserName>wecode</UserName>
        <UserCirCleBox>
          <UserIndex0>W</UserIndex0>
        </UserCirCleBox>
      </UserBox>
      {modalOn ? <Modal /> : ''}
      <Link to="/login">
        <SignInUpBox onChange={() => setLoggedIn(!loggedIn)}>
          <SignInUpTitle>로그인 / 회원가입</SignInUpTitle>
          <UserCirCleBox>
            <BsPersonFill />
          </UserCirCleBox>
        </SignInUpBox>
      </Link>
    </RightMenuBox>
  );
}

const RightMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
`;

const Search = styled.button`
  height: 30px;
  margin-right: 10px;
  border-style: none;
  background-color: #ffffff;
  font-size: 20px;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.span`
  display: flex;
  align-items: center;
  width: 65px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const UserCirCleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 13px;
  color: #ffffff;
  background-color: #9e9e9e;
`;

const UserIndex0 = styled.div``;

const SignInUpTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const SignInUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default RightMenu;
