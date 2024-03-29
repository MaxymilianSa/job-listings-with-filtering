import React, { useReducer } from 'react';

import { Container } from 'components/commons/container/container';

import { Offer } from './offer/offer';
import { SearchBar } from './search-bar/search-bar';
import { jobs } from './const';
import * as Styled from './job-list.styled';
import { filterJobs, initialState, reducer } from './useJobList';

export const JobList = () => {
  const [tags, dispatch] = useReducer(reducer, initialState);

  const renderJobs = () =>
    filterJobs({ tags, jobs }).map((job) => (
      <Offer
        key={job.id}
        {...job}
        handleTagClick={(name) =>
          dispatch({ type: tags.includes(name.toLowerCase()) ? 'remove' : 'add', payload: name })
        }
      />
    ));

  return (
    <Styled.Wrapper>
      <Styled.Banner />
      {tags.length > 0 && (
        <SearchBar
          tags={tags}
          handleClearTags={() => dispatch({ type: 'clear' })}
          handleRemoveTag={(name) => dispatch({ type: 'remove', payload: name })}
        />
      )}
      <Container>
        <Styled.List>{renderJobs()}</Styled.List>
      </Container>
    </Styled.Wrapper>
  );
};
