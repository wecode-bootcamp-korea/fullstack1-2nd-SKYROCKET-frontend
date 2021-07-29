import React from 'react';
import styled from 'styled-components';

function OrDivider() {
  return (
    <Divider>
      <span>또는</span>
    </Divider>
  );
}

const Divider = styled.div`
  margin: 20px 0;
  text-align: center;

  span {
    position: relative;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.grey100};
    font-size: 13px;

    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      width: 145px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
    }

    &:before {
      right: 100%;
    }

    &:after {
      left: 100%;
    }
  }
`;

export default OrDivider;
