import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { flex } from '../../../../../styles/mixins';

function LikeButton() {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Button1>
      {isCheck ? (
        <AiFillHeart
          style={{
            color: 'red',
            fontSize: '25px',
          }}
          onClick={() => setIsCheck(!isCheck)}
        />
      ) : (
        <AiOutlineHeart
          style={{
            color: 'white',
            fontSize: '25px',
          }}
          onClick={setIsCheck}
        />
      )}
    </Button1>
  );
}

const Button1 = styled.button`
  ${flex('center', 'center')};
  width: 37px;
  height: 37px;
  border-style: none;
  border-radius: 50%;
  border-style: none;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default LikeButton;
