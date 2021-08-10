import React from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/mixins';

function ProjectIntroduction({ category, name, profileImageUrl, creator }) {
  console.log(category);
  return (
    <TitleContainer>
      <TitleWrap>
        <Category>{category}</Category>
        <Title>{name}</Title>
        <CreatorWrap>
          <CreatorProfileImgBox>
            <CreatorImg src={profileImageUrl} alt={name} />
          </CreatorProfileImgBox>
          <CreatorName>{creator}</CreatorName>
        </CreatorWrap>
      </TitleWrap>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 280px;
  padding-top: 55px;
`;

const TitleWrap = styled.div`
  margin: 0px auto;
  padding: 16px auto;
  text-align: center;
`;

const Category = styled.span`
  padding: 8px;
  border: 1px solid #efefef;
  border-radius: 2px;
  background-color: #fafafa;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;

const Title = styled.h1`
  margin: 32px 0px 30px;
  font-size: 44px;
  font-weight: 700;
`;

const CreatorWrap = styled.div`
  ${flex('center', 'center')};
`;

const CreatorProfileImgBox = styled.div`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

const CreatorImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const CreatorName = styled.span`
  font-weight: 500;
`;

export default ProjectIntroduction;
