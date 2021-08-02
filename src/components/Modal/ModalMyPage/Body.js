import React from 'react';
import styled from 'styled-components';
import Container from '../ModalContainer';
import { flex } from '../../../styles/mixins';
import { Link } from 'react-router-dom';

function ModalMyPageBody({ onClick }) {
  const Item = [
    { id: 1, title: '알림', link: '' },
    { id: 2, title: '메세지', link: '' },
    { id: 3, title: '팔로우', link: '' },
    { id: 4, title: '좋아한 프로젝트', link: '' },
    { id: 5, title: '후원현황', link: '/pledges' },
    { id: 6, title: '내가 만든 프로젝트', link: '/my-projects' },
    { id: 7, title: '설정', link: '' },
  ];

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
          {Item.map(Items => (
            <Link to={Items.link} key={Items.id} onClick={onClick}>
              <MyPageItemLink>
                <MyPageItemTitle>{Items.title}</MyPageItemTitle>
              </MyPageItemLink>
            </Link>
          ))}
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
  ${flex('flex-start', 'center')};
  width: 100%;
  height: 90px;
  padding: 0 14px;
`;

const MyPageLink = styled.a`
  ${flex('flex-start', 'normal')};
`;

const UserNameCirCle = styled.div`
  ${flex('center', 'center')};
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: black;
  color: #ffffff;
`;

const UserInitial = styled.span``;

const UserName = styled.p`
  ${flex('normal', 'center')};
  font-size: 21px;
`;

const MyPageItemBox = styled.div`
  width: 100%;
  padding: 0 14px;
`;

const MyPageItemLink = styled.a`
  ${flex('flex-start', 'normal')};
  position: relative;
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

export default ModalMyPageBody;
