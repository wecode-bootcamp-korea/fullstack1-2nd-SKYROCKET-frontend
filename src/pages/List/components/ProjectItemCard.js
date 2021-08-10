import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import ProgressBar from './ProgressBar';
import {
  formatMoney,
  getAchievedRate,
  getDaysBetweenDate,
} from '../../../utils';
import { flex } from '../../../styles/mixins';

function ProjectItemCard({
  id,
  name,
  openDate,
  endDate,
  achievedAmount,
  goalAmount,
  summary,
  creator,
  imageUrl,
  category,
}) {
  const [isLike, setIsLike] = useState(false);

  const toggleLikeButton = () => setIsLike(!isLike);

  return (
    <StyledProjectItemCard>
      <ImageBox>
        <LikeButton onClick={toggleLikeButton}>
          {isLike ? <FilledHeart /> : <EmptyHeart />}
        </LikeButton>
        <ImageLink to={`/project/${id}`}>
          <ProjectThumbnailImage src={imageUrl} alt={name} />
        </ImageLink>
      </ImageBox>
      <ProjectInfoBox>
        <ProjectNameLink to={`/project/${id}`}>{name}</ProjectNameLink>
        <ProjectTypeInfo>
          <CategoryName>{category}</CategoryName>
          <CreatorName>{creator}</CreatorName>
        </ProjectTypeInfo>
        <ProjectSummary>{summary}</ProjectSummary>
      </ProjectInfoBox>
      <ProgressBar achievedRate={getAchievedRate(achievedAmount, goalAmount)} />
      <AchievedInfoBox>
        <AchievedAmount>{formatMoney(achievedAmount)}원</AchievedAmount>
        <AchievedRate>
          {getAchievedRate(achievedAmount, goalAmount)}%
        </AchievedRate>
        <DaysBetweenDate>
          <ClockIcon />
          {getDaysBetweenDate(openDate, endDate)}일 남음
        </DaysBetweenDate>
      </AchievedInfoBox>
    </StyledProjectItemCard>
  );
}

const StyledProjectItemCard = styled.div``;

const ImageBox = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const LikeButton = styled.div`
  ${flex('center', 'center')};
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    &:after {
      position: absolute;
      content: '';
      top: -5px;
      left: -5px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
    }
  }
`;

const EmptyHeart = styled(AiOutlineHeart)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  z-index: 1;
`;

const FilledHeart = styled(AiFillHeart)`
  color: ${({ theme }) => theme.colors.red100};
  font-size: 22px;
  z-index: 1;
`;

const ProjectThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.6s cubic-bezier(0.24, 0.65, 0.35, 0.82);
  object-fit: cover;
`;

const ImageLink = styled(Link)`
  display: block;
  height: 260px;
  border-radius: 4px;
  overflow: hidden;

  &:hover ${ProjectThumbnailImage} {
    transform: scale(1.1);
  }
`;

const ProjectInfoBox = styled.div`
  min-height: 175px;
`;

const ProjectNameLink = styled(Link)`
  display: -webkit-box;
  width: 93%;
  margin: 0px 0px 10px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectTypeInfo = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.grey100};
  font-size: 13px;
  font-weight: 300;
  line-height: 1.7;
`;

const CategoryName = styled.span`
  &:after {
    display: inline-block;
    position: relative;
    content: '|';
    top: -2px;
    margin: 0 6px;
    color: ${({ theme }) => theme.colors.grey100};
    font-size: 9px;
  }
`;

const CreatorName = styled.span``;

const ProjectSummary = styled.p`
  width: 93%;
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: keep-all;
`;

const AchievedInfoBox = styled.div`
  ${flex('space-between', 'flex-end')};
`;

const AchievedAmount = styled.p`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const AchievedRate = styled.span`
  margin-left: 6px;
  color: ${({ theme }) => theme.colors.red100};
  font-size: 15px;
  font-weight: 300;
`;

const DaysBetweenDate = styled.div`
  ${flex('center', 'center')};
  margin-left: auto;
  color: ${({ theme }) => theme.colors.grey100};
  font-size: 15px;
  font-weight: 300;
`;

const ClockIcon = styled(BsClock)`
  margin-right: 5px;
`;

export default ProjectItemCard;
