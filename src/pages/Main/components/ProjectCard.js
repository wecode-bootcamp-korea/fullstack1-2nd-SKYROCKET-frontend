import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function ProjectCard({ imageUrl, name, summary }) {
  const [isChecked, setIsCheck] = useState(true);

  const buttonHeartClick = () => {
    setIsCheck(!isChecked);
  };

  return (
    <ProjectCardWrap>
      <ButtonHeart onClick={buttonHeartClick}>
        {isChecked ? <AiOutlineHeart /> : <AiFillHeart />}
      </ButtonHeart>
      <ProjectImg src={imageUrl} alt="product-img" />
      <ProjectSubContent>{summary}</ProjectSubContent>
      <ProjectContent>{name}</ProjectContent>
    </ProjectCardWrap>
  );
}
const ProjectCardWrap = styled.div``;

const ProjectImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
`;

const ButtonHeart = styled.button`
  position: absolute;
  padding: 10px 10px 10px 220px;
  border: none;
  background: none;
  color: red;
  font-size: 24px;
`;

const ProjectSubContent = styled.p`
  color: rgb(158, 158, 158);
  font-size: 12px;
  line-height: 27px;
`;

const ProjectContent = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 27px;
`;

export default ProjectCard;
