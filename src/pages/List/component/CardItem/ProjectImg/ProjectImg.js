import React from 'react';
import styled from 'styled-components';

function Image(props) {
  return (
    <ProjectImg>
      <a href="/">
        {props.images.map(img => (
          <Images
            key={props.id}
            src={img.projectThumbnailUrl}
            alt={props.name}
          ></Images>
        ))}
      </a>
    </ProjectImg>
  );
}

const ProjectImg = styled.div`
  width: 322px;
  height: 241px;
  overflow: hidden;
  transform: scale(1);

  & :hover {
    transform: scale(1.1);
  }
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export default Image;
