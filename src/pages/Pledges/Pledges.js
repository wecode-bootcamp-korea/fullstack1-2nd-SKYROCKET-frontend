import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import PledgesTitle from './components/PledgesTitle';
import PledgesList from './components/PledgesList';

function Pledges() {
  const [pledgesNumber, setPledgesNumber] = useState([]);

  useEffect(() => {
    fetch('data/PledgesCardData.json')
      .then(res => res.json())
      .then(data => setPledgesNumber(data.numberOfPledges));
  }, []);

  return (
    <>
      <PledgesTitle />
      <PledgesContainer>
        <Count>{pledgesNumber}건의 후원 내역이 있습니다.</Count>
        <PledgesList />
      </PledgesContainer>
    </>
  );
}

const PledgesContainer = styled(Container)``;

const Count = styled.p`
  padding: 22px 0 22px 0;
  color: #3d3d3d;
`;

export default Pledges;
