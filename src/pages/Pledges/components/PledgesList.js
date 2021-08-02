import React, { useState, useEffect } from 'react';
import PledgesCard from './PledgesCard';
import styled from 'styled-components';

function PledgesList() {
  const [pledgesData, setPledgesData] = useState([]);

  useEffect(() => {
    fetch('data/PledgesCardData.json')
      .then(res => res.json())
      .then(data => setPledgesData(data.PledgesCardData));
  }, []);

  return (
    <PledgesGrid>
      {pledgesData.map(item => {
        return <PledgesCard key={item.id} {...item} />;
      })}
    </PledgesGrid>
  );
}

const PledgesGrid = styled.div``;

export default PledgesList;
