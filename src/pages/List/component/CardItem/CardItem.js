import React from 'react';
import styled from 'styled-components';
import LikeButton from '../CardItem/LikeButton/LikeButton';
import ProjectImg from '../CardItem/ProjectImg/ProjectImg';
import ProjectDesc from '../CardItem/ProjectDecs/ProjectDecs';
import Progress from '../CardItem/Progress/Progress';
import FundingStatus from '../CardItem/FundingStatus/FundingStatus';
import { flex } from '../../../../styles/mixins';

function CardItem(props) {
  return (
    <ListProjectCardWrapper>
      <ListProjectCardBox>
        <ListProjectCard>
          <LikeButtonBox>
            <LikeButton />
          </LikeButtonBox>
          <ProjectImg images={props.images} />
          <ProjectDesc
            name={props.name}
            subCategories={props.subCategories}
            userName={props.userName}
            summary={props.summary}
          />
          <PercentBar>
            <Progress key={props.key} percent={props.percent} />
          </PercentBar>
          <FundingStatus
            achievedAmount={props.achievedAmount}
            percent={props.percent}
            day={props.day}
          />
        </ListProjectCard>
      </ListProjectCardBox>
    </ListProjectCardWrapper>
  );
}

const ListProjectCardWrapper = styled.div`
  ${flex('normal', 'normal')};
  width: 322px;
  height: auto;
  margin: 0px 15.5px;
`;

const ListProjectCardBox = styled.div`
  ${flex('normal', 'center')};
  flex-direction: column;
  position: relative;
  width: 322px;
  height: 457px;
  margin-bottom: 84px;
`;

const ListProjectCard = styled.div`
  display: block;
`;

const LikeButtonBox = styled.div`
  ${flex('center', 'center')};
  position: absolute;
  width: 24px;
  height: 24px;
  right: 12px;
  top: 12px;
  border-radius: 50px;
  cursor: pointer;
  z-index: 9;
`;

const PercentBar = styled.div``;

export default CardItem;
