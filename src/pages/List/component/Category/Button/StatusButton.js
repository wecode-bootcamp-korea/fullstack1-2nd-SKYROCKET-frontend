import React from 'react';
import DefaultButton from './DefaultButton';
import styled from 'styled-components';
import Category from '../../../data/Category.json';
import { flex } from '../../../../../styles/mixins';

function DropDown() {
  return (
    <DefaultButton label={'상태'}>
      <Menu>
        <All>전체보기</All>
        {Category.Status.map(Status => (
          <Button key={Status.id}>{Status.title}</Button>
        ))}
      </Menu>
    </DefaultButton>
  );
}

const Menu = styled.div`
  margin-top: 10px;
  padding-top: 6px;
  width: auto;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

const All = styled.button`
  ${flex('flex-start', 'center')};
  width: 163px;
  height: 40px;
  background-color: #ffffff;
  padding: 0px, 10px;
  border-style: none;
  color: #ff5757;
  font-size: 15px;
  font-weight: bold;
  z-index: 100;
`;

const Button = styled.button`
  ${flex('flex-start', 'center')};
  width: 163px;
  height: 40px;
  padding: 0px, 10px;
  border-style: none;
  background-color: #ffffff;
  color: #555555;
  font-size: 15px;
  z-index: 100;
  &:hover {
    color: #ff5757;
  }
`;
export default DropDown;
