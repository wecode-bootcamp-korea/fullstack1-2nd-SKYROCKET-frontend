import React from 'react';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';

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
            {props.children}
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
  ${flex('normal', 'center')};
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

export default Button;
