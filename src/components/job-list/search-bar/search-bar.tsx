import React from 'react';

import { Container } from 'components/commons/container/container';
import { Filter } from 'components/commons/filter/filter';

import * as Styled from './search-bar.styled';

export type SearchBarType = {
  handleClearTags: () => void;
  handleRemoveTag: (name: string) => void;
  tags: string[];
};

export const SearchBar = ({ tags, handleRemoveTag, handleClearTags }: SearchBarType) => (
  <Container>
    <Styled.Wrapper>
      <Styled.List id="filters">
        {tags.map((tag) => (
          <Filter key={tag} handleClick={() => handleRemoveTag(tag)} name={tag} />
        ))}
      </Styled.List>
      <Styled.Button onClick={handleClearTags}>Clear</Styled.Button>
    </Styled.Wrapper>
  </Container>
);
