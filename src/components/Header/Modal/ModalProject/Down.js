import React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';

function Down(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);

  const parentRef = useRef();
  // const [clicked, setClicked] = useState(false);
  // const toggle = onClick => {
  //   if (clicked === onClick) {
  //     return setClicked(null);
  //   }
  //   setClicked(Category);
  // };>>>>>

  return (
    <div className="DropDown">
      <Button
        onClick={() =>
          setIsOpen(!isOpen, setChange(change === false ? true : false))
        }
      >
        <Title>{props.label}</Title>
        {change ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </Button>
      <ContentPrent
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + 'px',
              }
            : {
                height: '0px',
              }
        }
      >
        <Content>{props.children}</Content>
      </ContentPrent>
    </div>
  );
}

const Button = styled.button`
  margin-bottom: 10px;
  padding: 0;
  border: unset;
  border-style: none;
  font: unset;
  font-weight: bold;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 28px;
  color: #000000;
  padding-right: 10px;
`;

const ContentPrent = styled.div`
  height: 0px;
  overflow: hidden;
  transition: height ease 0.3s;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #afafaf;
  border-style: none;
  font-size: 21px;
`;

export default Down;
