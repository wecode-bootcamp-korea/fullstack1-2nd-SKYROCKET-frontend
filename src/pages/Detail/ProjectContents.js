import React, { useState } from 'react';
import styled from 'styled-components';
import { formatMoney } from '../../utils';
import { flex } from '../../styles/mixins';

function ProjectContents({
  name,
  description,
  detailImageUrl,
  creator,
  profileImageUrl,
  userIntroduction,
  optionName,
  optionDetail,
  price,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [number, setNumber] = useState(0);

  const toggleOptionMenu = () => {
    setIsOpened(!isOpened);
  };

  const Increase5000 = () => {
    setNumber(number + 5000);
  };

  const Increase10000 = () => {
    setNumber(number + 10000);
  };

  const Increase50000 = () => {
    setNumber(number + 50000);
  };

  const Increase100000 = () => {
    setNumber(number + 100000);
  };

  const handleAlert = () => {
    alert('후원해주셔서 감사합니다!🥳');
  };

  return (
    <>
      <ContentsNav>
        <ProjectContentsWrap>
          <ProjectPlan>프로젝트 계획</ProjectPlan>
        </ProjectContentsWrap>
      </ContentsNav>
      <ContentsWrap>
        <FundingContainer>
          <ContentsInt>프로젝트 소개</ContentsInt>
          <ImgWrap>
            <FundingImg src={detailImageUrl} alt={name} />
          </ImgWrap>
          <FundingText>{description}</FundingText>
        </FundingContainer>
        <SideFundingContainer>
          <CreatorIntroWrap>
            <CreatorIntro>창작자 소개</CreatorIntro>
            <CreatorInfoBox>
              <CreatorProfileImgBox>
                <CreatorImg src={profileImageUrl} alt={name} />
              </CreatorProfileImgBox>
              <CreatorName>{creator}</CreatorName>
            </CreatorInfoBox>
            <CreatorHistory>{userIntroduction}</CreatorHistory>
          </CreatorIntroWrap>
          <OptionChoice>선물 선택</OptionChoice>
          <OptionBox>
            <OptionWrap onClick={toggleOptionMenu}>
              <Amount>{formatMoney(price)}원</Amount>
              <ProjectsName>{optionName}</ProjectsName>
              <ProjectsComp>{optionDetail}</ProjectsComp>
            </OptionWrap>
            {isOpened && (
              <Donation>
                <DonationTitle>추가 후원금 (선택)</DonationTitle>
                <DonationAmount>{formatMoney(number)}</DonationAmount>
                <Money>
                  <OptionButton onClick={Increase5000}>+ 5천 원</OptionButton>
                  <OptionButton onClick={Increase10000}>+ 1만 원</OptionButton>
                  <OptionButton onClick={Increase50000}>+ 5만 원</OptionButton>
                  <OptionButton onClick={Increase100000}>
                    + 10만 원
                  </OptionButton>
                </Money>
                <FundingButton onClick={handleAlert}>
                  {formatMoney(number)}원 후원하기
                </FundingButton>
              </Donation>
            )}
          </OptionBox>
        </SideFundingContainer>
      </ContentsWrap>
    </>
  );
}

const Donation = styled.div`
  position: relative;
  padding: 20px;
  border-left: 1px solid rgb(239, 239, 239);
  border-right: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: '';
    width: 360px;
    top: -3px;
    left: -1px;
    border-top: 5px solid ${({ theme }) => theme.colors.grey400};
  }
`;

const DonationTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.grey300};
`;

const DonationAmount = styled.div`
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  padding: 15px 20px;
  border: 1px solid rgb(240, 240, 240);
  :hover {
    border: 1px solid;
  }
`;

const CreatorInfoBox = styled.div`
  ${flex('flex-start', 'center')};
`;

const CreatorProfileImgBox = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

const CreatorImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Money = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionButton = styled.button`
  width: 70px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid rgb(240, 240, 240);
  background-color: #ffffff;
  color: #6d6d6d;
  z-index: 1;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const FundingButton = styled.div`
  margin-top: 15px;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;
  border-radius: 4px;
  border: none;
  letter-spacing: -0.02em;
  background-color: #fe4543;
  color: rgb(255, 255, 255);
  opacity: 0.8;

  &:hover {
    opacity: 0.7;
  }
`;

const Amount = styled.button`
  margin-bottom: 10px;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.grey300};
  background-color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const ProjectsName = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;
`;

const ProjectsComp = styled.div`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.015em;
`;

const ContentsNav = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px, rgb(0 0 0 / 8%) 0px 2px 4px;
  height: 48px;
`;

const ProjectContentsWrap = styled.div`
  width: 1032px;
  margin: 0px auto;
`;

const ProjectPlan = styled.span`
  padding-bottom: 13px;
  border-bottom: 3px solid #000000;
  font-weight: bold;
`;

const ContentsInt = styled.div`
  display: flex;
  min-width: 620px;
  justify-content: space-between;
  padding: 50px 0 50px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 24px;
  font-weight: bold;
`;

const ContentsWrap = styled.div`
  display: flex;
  width: 1040px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

const FundingContainer = styled.div``;

const SideFundingContainer = styled.div`
  margin: 30px 0 0 38px;
`;

const CreatorIntroWrap = styled.div`
  width: 360px;
  padding: 18px 24px;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
`;

const FundingImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
  display: flex;
`;

const FundingText = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 16px;
  line-height: 28px;
`;

const CreatorIntro = styled.div`
  display: block;
  padding: 5px 0px 20px;
  color: ${({ theme }) => theme.colors.grey300};
  font-weight: bold;
`;

const CreatorName = styled.div`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 15px;
  font-weight: 500;
`;

const CreatorHistory = styled.div`
  font-weight: 400;
  color: rgb(112, 112, 112);
  padding: 15px 0px 4px;
  font-size: 13px;
  line-height: 22px;
`;

const OptionBox = styled.div`
  position: relative;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #9e9e9e;
    border-radius: 4px;
  }
`;

const OptionWrap = styled.div`
  padding: 20px;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
  cursor: pointer;
`;

const OptionChoice = styled.div`
  margin-bottom: 15px;
  padding: 24px 0px 0px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey300};
  font-weight: bold;
`;

export default ProjectContents;
