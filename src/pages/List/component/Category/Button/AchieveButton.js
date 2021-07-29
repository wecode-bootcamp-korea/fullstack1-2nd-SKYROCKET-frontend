import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { flex } from '../../../../../styles/mixins';
import Category from '../../../data/Category.json';

function Button(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);
  let [backgroundColor, setBackgroundColor] = useState('white');
  // const changeBackgroundColor = () => {
  //   setBackgroundColor('red');
  // };
  return (
    <Collapsible>
      <Toggle
        onClick={() =>
          setIsOpen(
            !isOpen,
            setChange(change === false ? true : false)
            // changeBackgroundColor
          )
        }
        style={{ backgroundColor: backgroundColor }}
      >
        <Title>{props.label}</Title>
        {change ? <BsChevronUp /> : <BsChevronDown />}
      </Toggle>
      <div>
        {isOpen && (
          <Content className={isOpen ? 'content show' : 'content'}>
            <Menu>
              <All>전체보기</All>
              {Category.Status.map(Status => (
                <A key={Status.id}>{Status.title}</A>
              ))}
            </Menu>
            <div>
              <p>직접 입력</p>
              <div>
                <span>
                  <input>
                    <span></span>
                  </input>
                </span>

                <span>
                  <input>
                    <span></span>
                  </input>
                </span>
              </div>
              <button>
                <span>입력값 적용</span>
              </button>
            </div>
          </Content>
        )}
      </div>
    </Collapsible>
  );
}

const Collapsible = styled.div`
  margin-right: 10px;
`;

const Toggle = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: 32px;
  cursor: pointer;
  font: unset;
  outline: 0;
  position: relative;
  padding: 0px 10px 0px 8px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  font-size: 15px;
`;

const Content = styled.div`
  height: 20px;
  position: absolute;
`;

const Title = styled.span`
  padding-right: 20px;
  color: #555555;
`;

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

const A = styled.button`
  width: 163px;
  height: 40px;
  ${flex('flex-start', 'center')};
  background-color: #ffffff;
  padding: 0px, 10px;
  border-style: none;
  color: #555555;
  font-size: 15px;
  z-index: 100;
  &:hover {
    color: #ff5757;
  }
`;

export default Button;
