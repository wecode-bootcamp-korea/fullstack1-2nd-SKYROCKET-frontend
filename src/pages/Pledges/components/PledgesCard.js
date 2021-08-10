import React from 'react';
import styled from 'styled-components';
import { formatMoney } from '../../../utils';

function PledgesCard({ img, number, name, date, option, money, title }) {
  return (
    <CardContainer>
      <CardWrap>
        <CardDate>{date}</CardDate>
        <CardNumber>
          후원번호
          <Text>{number}</Text>
        </CardNumber>
      </CardWrap>
      <CardContentWrap>
        <CardImg>
          <Imgcard src={img} alt="project-img" />
        </CardImg>
        <CardContent>
          <CardTitle>
            {title}
            <CardName>{name}</CardName>
          </CardTitle>
          <CardOption>{option}</CardOption>
          <CardPrice>
            <Price>{formatMoney(money)}</Price>원을 후원하였습니다.
          </CardPrice>
        </CardContent>
      </CardContentWrap>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey500};
  border-radius: 4px;
  margin-bottom: 40px;
`;

const Imgcard = styled.img`
  width: 160px;
  height: 120px;
  border-radius: 4px;
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;

const CardDate = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CardNumber = styled.span`
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const CardImg = styled.div`
  padding: 20px;
`;

const CardContentWrap = styled.div`
  display: flex;
`;

const CardContent = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  grid-template-rows: 26px 30px 30px;
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CardName = styled.span`
  margin-left: 10px;
  font-size: 11px;
`;

const CardOption = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #5d5d5d;
`;

const CardPrice = styled.div`
  font-size: 14px;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export default PledgesCard;
