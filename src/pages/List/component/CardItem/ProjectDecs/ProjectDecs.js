import React from 'react';
import styled from 'styled-components';

function Desc(props) {
  return (
    <ProjectDecription>
      <ProjectTitle>
        <a href>{props.name}</a>
      </ProjectTitle>
      <ProjectSubInfo>
        <SubCategoryName>
          <a href="/">{props.subCategories}</a>
        </SubCategoryName>
        <UserName>
          <a href>{props.userName}</a>
        </UserName>
      </ProjectSubInfo>
      <ProjectSubDesc>{props.summary}</ProjectSubDesc>
    </ProjectDecription>
  );
}

const ProjectDecription = styled.dl`
  width: 322px;
  height: 162px;
  background-color: white;
  padding-top: 16px;
`;

const ProjectTitle = styled.dt`
  width: 93%;
  height: 58px;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.025em;
  margin: 0px 0px 10px;
  font-weight: bold;
  word-break: keep-all;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const ProjectSubInfo = styled.dd`
  height: 20px;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: rgb(158, 158, 158);
  margin-bottom: 16px;
`;

const ProjectSubDesc = styled.dd`
  width: 93%;
  height: 48px;
  margin: 0px 0px 16px;
  max-height: 48px;
  font-size: 14px;
  letter-spacing: 1px;
  overflow: hidden;
  word-break: keep-all;
`;

const SubCategoryName = styled.span``;

const UserName = styled.span`
  &::before {
    content: '|';
    display: inline-block;
    margin: 0px 6px;
    position: relative;
    z-index: 1;
    top: -1px;
    font-size: 9px;
    color: rgb(208, 208, 208);
  }
`;
export default Desc;
