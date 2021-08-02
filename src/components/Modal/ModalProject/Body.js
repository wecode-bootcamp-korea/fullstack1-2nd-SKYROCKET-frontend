import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../ModalContainer';
import Category from './BodyCategory';
import { flex } from '../../../styles/mixins';

function ModalProjectBody({ onClick }) {
  const Tag = ['사랑', '책', '공포', '공연', '게임', '디자인'];

  const TagList = Tag.map((Tag, index) => (
    <TagKind key={index}>
      <a href="/">
        <TagName>#{Tag}</TagName>
      </a>
    </TagKind>
  ));

  return (
    <ModalBody>
      <Search>
        <Container>
          <FormBox>
            <SearchInput
              type="text"
              placeholder="프로젝트를 검색해주세요"
            ></SearchInput>
            <SearchSubmit></SearchSubmit>
            <SearchButton>검색</SearchButton>
          </FormBox>
        </Container>
      </Search>
      <Contents>
        <Container>
          <ProjectList>
            <Link to="/discover">
              <span onClick={onClick}>모든 프로젝트</span>
            </Link>
          </ProjectList>
          <Box>
            <BoxTitle>태그</BoxTitle>
            <TagKindBox>{TagList}</TagKindBox>
          </Box>
          <Box>
            <BoxTitle>카테고리</BoxTitle>
            <Category></Category>
          </Box>
        </Container>
      </Contents>
    </ModalBody>
  );
}

const ModalBody = styled.div`
  margin-top: 50px;
`;

const Search = styled.div`
  padding: 40px 0 20px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const FormBox = styled.div`
  display: flex;
  width: 1032px;
  height: 43px;
  padding: 0 14px;
`;

const SearchInput = styled.input`
  width: 920px;
  height: 100%;
  padding: 10px;
  margin-right: 14px;
  border: 1px solid rgb(239, 239, 239);
  border-radius: 2px;
  outline: none;
`;

const SearchSubmit = styled.input`
  display: none;
`;

const SearchButton = styled.button`
  width: 67px;
  padding: 12px 19px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgb(231, 231, 231);
`;

const Contents = styled.div`
  margin-top: 40px;
`;

const ProjectList = styled.div`
  ${flex('flex-start', 'normal')};
  margin: 40px 0;
  padding: 0px 14px;
  font-size: 28px;
  font-weight: bold;
`;

const Box = styled.div`
  padding: 0 14px;
  margin: 40px 0;
`;

const BoxTitle = styled.div`
  ${flex('flex-start', 'normal')};
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #0000004d;
`;

const TagKindBox = styled.div`
  ${flex('flex-start', 'normal')};
`;

const TagKind = styled.div`
  width: auto;
  height: 46px;
`;

const TagName = styled.span`
  padding: 10px 15px;
  background-color: ${function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }};
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 6px #000000;
  color: #ffffff;
  border-radius: 5px;
  &:hover {
    text-shadow: 2px 2px 6px #ffffff;
    color: #000000;
  }
`;

export default ModalProjectBody;
