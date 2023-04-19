import React from 'react';

import { Tag } from 'components/commons/tag/tag';

import * as Styled from './list.styled';

type ListType = {
  handleTagClick: (name: string) => void;
  tags: string[];
};

export const List = ({ tags, handleTagClick }: ListType) => (
  <Styled.Wrapper>
    {tags.map((tag) => (
      <Tag key={tag} handleClick={() => handleTagClick(tag)} name={tag} />
    ))}
  </Styled.Wrapper>
);
