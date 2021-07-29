import React from 'react';
import styled from 'styled-components';
import CardItem from '../CardItem/CardItem';
import ProjectData from '../../data/Project.json';
import { flex } from '../../../../styles/mixins';

function List() {
  return (
    <div>
      <InfinityListContainer>
        <ListResult>
          <ListNav>
            <CounterBox>
              <CountResult>{ProjectData.projects.length}</CountResult>
              <span>개의 프로젝트가 있습니다.</span>
            </CounterBox>
            <SelectBox>
              <select>
                <option>인기순</option>
              </select>
            </SelectBox>
          </ListNav>
          <InfinityListBox>
            {ProjectData.projects.map(projects => (
              <CardItem
                key={projects.id}
                images={projects.images}
                name={projects.name}
                summary={projects.summary}
                subCategories={projects.subCategories.name}
                userName={projects.userName}
                achievedAmount={projects.achievedAmount}
                percent={parseInt(projects.achievedAmount - projects.goalAount)} //진짜 모르겠다.
                day={projects.day}
              />
            ))}
          </InfinityListBox>
        </ListResult>
      </InfinityListContainer>
    </div>
  );
}

const InfinityListContainer = styled.div`
  display: flex;
  width: 1080px;
  height: auto;
  margin: auto;
`;

const ListResult = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListNav = styled.div`
  ${flex('space-between')};
  width: 1028px;
  margin: 0px auto;
  padding: 14px 0px 24px 0px;
  font-size: 16px;
  line-height: 27px;
`;

const CounterBox = styled.div``;

const CountResult = styled.em`
  color: rgb(255, 87, 87);
`;

const SelectBox = styled.div`
  & select {
    ${flex('center')};
    width: 84px;
    height: 27px;
    padding-left: 10px;
    border-style: none;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
  }
`;

const InfinityListBox = styled.div`
  ${flex('flex-start', 'center')};
  flex-wrap: wrap;
  width: 1060px;
  margin: auto;
`;

export default List;
