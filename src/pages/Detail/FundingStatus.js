import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { formatMoney, getAchievedRate, getDaysBetweenDate } from '../../utils';

function FundingStatus({
  totalBackers,
  id,
  name,
  openDate,
  endDate,
  achievedAmount,
  goalAmount,
  paymentDate,
  categories,
  images,
  projectData,
  thumbnailUrl,
}) {
  const [isChecked, setIsCheck] = useState(true);

  const handleAlert = () => {
    alert('후원해주셔서 감사합니다👌');
  };

  const buttonHeartClick = () => {
    setIsCheck(!isChecked);
  };

  const formatDate = paymentDate => {
    const newDay = new Date(paymentDate);
    const year = newDay.getFullYear();
    const month = newDay.getMonth();
    const date = newDay.getDate();

    return `${year}년 ${month}월 ${date}일`;
  };

  return (
    <FundingContainer>
      <ImgWrap>
        <FundingImg src={thumbnailUrl} />
      </ImgWrap>
      <Introduction>
        <FundingStatusContainer>
          <StatusWrap>
            <StatusTitle>모인 금액</StatusTitle>
            <StatusValue>
              {achievedAmount ? formatMoney(achievedAmount) : 0}
              <SmallUnits>원</SmallUnits>
              <FundingRate>
                {achievedAmount
                  ? getAchievedRate(achievedAmount, goalAmount)
                  : 0}
                %
              </FundingRate>
            </StatusValue>
          </StatusWrap>
          <StatusWrap>
            <StatusTitle>남은 시간</StatusTitle>
            <StatusValue>
              {openDate ? getDaysBetweenDate(openDate, endDate) : 0}
              <SmallUnits>일</SmallUnits>
            </StatusValue>
          </StatusWrap>
          <StatusWrap>
            <StatusTitle>후원자</StatusTitle>
            <StatusValue>
              {totalBackers ? totalBackers : 0}
              <SmallUnits>명</SmallUnits>
            </StatusValue>
          </StatusWrap>
        </FundingStatusContainer>
        <Inpormation>
          <InpormationStatus>펀딩 진행중</InpormationStatus>
          <InpormationContents>
            목표 금액인 <span>{goalAmount ? formatMoney(goalAmount) : 0}</span>
            원이 모여야만 결제됩니다.
            <br />
            결제는 <span>{paymentDate ? formatDate(paymentDate) : 0}</span>에
            다함께 진행됩니다.
          </InpormationContents>
        </Inpormation>
        <ButtonWrap>
          <ButtonHeart onClick={buttonHeartClick}>
            {isChecked ? <AiOutlineHeart /> : <AiFillHeart />}
          </ButtonHeart>
          <FundingButtton onClick={handleAlert}>
            이 프로젝트 후원하기
          </FundingButtton>
        </ButtonWrap>
      </Introduction>
    </FundingContainer>
  );
}

const FundingContainer = styled.div`
  display: flex;
  padding-bottom: 42px;
`;

const FundingStatusContainer = styled.div`
  margin-bottom: 32px;
`;

const ImgWrap = styled.div`
  width: 650px;
  height: 510px;
`;

const FundingImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  object-fit: cover;
`;

const Introduction = styled.div`
  margin-left: 28px;
  padding-top: 5px;
`;

const StatusWrap = styled.div`
  width: 100%;
  margin-bottom: 28px;
`;

const StatusTitle = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const StatusValue = styled.div`
  font-size: 40px;
  letter-spacing: 0.5px;
`;

const FundingRate = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;

const SmallUnits = styled.span`
  margin-left: 4px;
  font-size: 16px;
`;

const Inpormation = styled.div`
  border: 1px solid #efefef;
  background-color: #fafafa;
  margin-bottom: 28px;
  padding: 21px 24px;
`;

const InpormationStatus = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const InpormationContents = styled.div`
  width: 310px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #323232;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 52px;
  margin-right: 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey500};
  font-size: 24px;
  color: #f56462;
`;

const FundingButtton = styled.button`
  width: 100%;
  height: 52px;
  margin: 0;
  border-radius: 4px;
  background: #fe4543;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  border: 1px solid ${({ theme }) => theme.colors.grey500};
  :hover {
    opacity: 0.7;
  }
`;

export default FundingStatus;
