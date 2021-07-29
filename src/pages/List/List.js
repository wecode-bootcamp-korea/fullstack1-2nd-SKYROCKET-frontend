import React from 'react';
import styled from 'styled-components';
import Category from './component/Category/Filter';
import InfinityList from './component/InfinityList/InfinityList';

function List() {
  return (
    <StyleContainer>
      <DisCoverWrapper>
        <Category />
        <InfinityList />
      </DisCoverWrapper>
    </StyleContainer>
  );
}

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DisCoverWrapper = styled.div`
  padding: 0px 0px 40px;
  border-bottom: 1px solid rgb(245, 245, 245);
`;

export default List;
