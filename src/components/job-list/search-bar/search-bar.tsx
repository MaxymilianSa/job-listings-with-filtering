import React from 'react';

import { Container } from 'components/commons/container';
import { Filter } from 'components/commons/filter';

import { Wrapper, List, Button } from './search-bar.styled';

export type SearchBarType = {
  tags: string[];
  handleRemoveTag: (name: string) => void;
  handleClearTags: () => void;
};

export const SearchBar = ({ tags, handleRemoveTag, handleClearTags }: SearchBarType) => (
  <Container>
    <Wrapper>
      <List>
        {tags.map((tag) => (
          <Filter key={tag} handleClick={() => handleRemoveTag(tag)} name={tag} />
        ))}
      </List>
      <Button onClick={handleClearTags}>Clear</Button>
    </Wrapper>
  </Container>
);
