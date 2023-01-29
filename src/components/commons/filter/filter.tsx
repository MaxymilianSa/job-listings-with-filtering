import React from 'react';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import { Wrapper, Button } from './filter.styled';

export type TagType = {
  name: string;
  handleClick: () => void;
};

export const Filter = ({ name, handleClick }: TagType) => (
  <Wrapper onClick={handleClick}>
    <p>{name}</p>
    <Button onClick={handleClick}>
      <CloseIcon />
    </Button>
  </Wrapper>
);
