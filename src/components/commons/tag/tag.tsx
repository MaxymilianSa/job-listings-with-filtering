import React from 'react';

import { Wrapper } from './tag.styled';

export type TagType = {
  name: string;
  handleClick: () => void;
};

export const Tag = ({ name, handleClick }: TagType) => (
  <Wrapper onClick={handleClick}>{name}</Wrapper>
);
