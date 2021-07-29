import React from 'react';
import styled from 'styled-components';
import { IoMdTime } from 'react-icons/io';
import { formatMoney } from '../../../../../utils';
import { flex } from '../../../../../styles/mixins';

function Status(props) {
  return (
    <FundingStatus>
      <FundingAmount>
        <em>{formatMoney(props.achievedAmount)}</em>원
      </FundingAmount>
      <Pencent>{props.percent}%</Pencent>
      <ReatDays>
        <RestDayIcon>
          <IoMdTime />
        </RestDayIcon>
        {props.day}일 남음
      </ReatDays>
    </FundingStatus>
  );
}

const FundingStatus = styled.div`
  ${flex('normal', 'flex-end')};
  height: 35px;
`;

const FundingAmount = styled.span`
  font-size: 18px;
  letter-spacing: -0.02em;
  color: rgb(61, 61, 61);
`;
const Pencent = styled.span`
  color: rgb(255, 87, 87);
  margin: 0px 0px 0px 6px;
`;
const ReatDays = styled.span`
  ${flex('center', 'normal')};
  margin-left: auto;
  color: rgb(158, 158, 158);
  font-size: 16px;
`;

const RestDayIcon = styled.span`
  width: 16px;
  height: 16px;
  font-size: 15px;
  margin-right: 3px;
`;

export default Status;
