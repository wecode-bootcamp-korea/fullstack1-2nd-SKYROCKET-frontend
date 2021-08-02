import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../Down';

function Category() {
  return (
    <CategoryBox>
      <div>
        <CategoryItem label="게임">
          <Ul>
            <SubCategory>
              <a href="/">모든 제목</a>
            </SubCategory>
            <SubCategory>
              <a href="/">제목</a>
            </SubCategory>
          </Ul>
        </CategoryItem>
      </div>
    </CategoryBox>
  );
}

const CategoryBox = styled.div`
  display: flex;
`;

const Ul = styled.ul``;

const SubCategory = styled.li`
  /* display: flex; */
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  font-size: 21px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;

export default Category;
