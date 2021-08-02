import React from 'react';
import styled from 'styled-components';
import Container from '../ModalContainer';

function modal() {
  const Item = [
    '알림',
    '팔로우',
    '후원현황',
    '좋아한 프로젝트',
    '내가 만든 프로젝트',
    '설정',
  ];

  const ItemList = Item.map((Item, index) => (
    <MyPageItemLink key={index}>
      <MyPageItemTitle>{Item}</MyPageItemTitle>
    </MyPageItemLink>
  ));

  return (
    <ModalBody>
      <Container>
        <ProfileBox>
          <MyPageLink>
            <UserNameCirCle>
              <UserInitial>W</UserInitial>
            </UserNameCirCle>
            <UserName>wecode</UserName>
          </MyPageLink>
        </ProfileBox>
        <MyPageItemBox>
          <Line />
          {ItemList}
          <Line />
          <MyPageItemLink>
            <MyPageItemTitle>로그아웃</MyPageItemTitle>
          </MyPageItemLink>
        </MyPageItemBox>
      </Container>
    </ModalBody>
  );
}

const ModalBody = styled.div`
  margin-top: 100px;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 14px;
`;

const MyPageLink = styled.a`
  display: flex;
  justify-content: flex-start;
`;

const UserNameCirCle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: black;
  color: #ffffff;
`;

const UserInitial = styled.span``;

const UserName = styled.p`
  display: flex;
  align-items: center;
  font-size: 21px;
`;

const MyPageItemBox = styled.div`
  width: 100%;
  padding: 0 14px;
`;

const MyPageItemLink = styled.a`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 43px;
`;

const MyPageItemTitle = styled.div`
  font-size: 28px;
  cursor: pointer;
  &:hover {
    color: #7d7d7d;
  }
`;

const Line = styled.div`
  display: block;
  border-top: 1px solid rgb(239, 239, 239);
  margin: 30px 0px;
  height: 0px;
`;

export default modal;
