import React from 'react';
import styled from 'styled-components';
import CategoryButton from './Button/CategoryButton';
import StatusButton from './Button/StatusButton';
// import AchieveButton from './Button/AchieveButton';
import { flex } from '../../../../styles/mixins';

function Footer() {
  return (
    <FilterBar>
      <FilterContainer>
        <FilterRayout>
          <FilterOption>
            <ButtonBox>
              <CategoryButton />
              <StatusButton />
              {/* <AchieveButton /> */}
            </ButtonBox>
          </FilterOption>
          <div></div>
        </FilterRayout>
      </FilterContainer>
    </FilterBar>
  );
}

const FilterBar = styled.div`
  height: 54px;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const FilterContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  min-width: 1080px;
`;

const FilterRayout = styled.div`
  width: 1032px;
  height: 100%;
  position: relative;
  z-index: 100;
  margin: auto;
`;

const FilterOption = styled.div`
  ${flex('flex-start', 'center')};
  width: 100%;
  height: 100%;
  position: relative;
`;

const ButtonBox = styled.div`
  ${flex('space-around', 'center')};
  position: relative;
`;

export default Footer;
