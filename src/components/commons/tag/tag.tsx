import React from 'react';

import { Wrapper } from './tag.styled';

export type TagType = {
  handleClick: () => void;
  name: string;
};

export const Tag = ({ name, handleClick }: TagType) => (
  <Wrapper onClick={handleClick}>{name}</Wrapper>
);
