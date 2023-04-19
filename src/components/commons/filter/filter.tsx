import React from 'react';

import { ReactComponent as CloseIcon } from './close.svg';
import * as Styled from './filter.styled';

export type TagType = {
  handleClick: () => void;
  name: string;
};

export const Filter = ({ name, handleClick }: TagType) => (
  <Styled.Wrapper onClick={handleClick}>
    <p>{name}</p>
    <Styled.Button>
      <CloseIcon />
    </Styled.Button>
  </Styled.Wrapper>
);
