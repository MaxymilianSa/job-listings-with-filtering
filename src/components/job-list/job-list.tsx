import React, { useState } from 'react';

import { Container } from 'components/commons/container';

import { Wrapper, Banner, List } from './job-list.styled';
import { SearchBar } from './search-bar';
import { Offer, OfferType } from './offer';

import { jobs } from './const';

export const JobList = () => {
  const [tags, setTags] = useState<string[]>([]);

  const getFiltredJobs = (tags: string[]) => {
    if (tags.length === 0) return jobs;
    return jobs.filter(({ role, level, tools, languages }) => {
      const jobTags = [role, level, ...tools, ...languages];
      const notMatchedTags = tags.filter((tag) => !jobTags.includes(tag));
      return notMatchedTags.length === 0;
    });
  };

  const [filtredJobs, setFiltred] = useState<OfferType[]>(getFiltredJobs(tags));

  const updateTags = (tags: string[]) => {
    setTags(tags);
    setFiltred(getFiltredJobs(tags));
  };

  const removeTag = (name: string) => {
    const updatedTags = tags.filter((tag) => tag !== name);
    updateTags(updatedTags);
  };

  const addTag = (name: string) => {
    if (!tags.includes(name)) {
      const updatedTags = [...tags, name];
      updateTags(updatedTags);
    }
  };

  return (
    <Wrapper>
      <Banner />
      {tags.length > 0 && (
        <SearchBar
          tags={tags}
          handleClearTags={() => updateTags([])}
          handleRemoveTag={(name) => removeTag(name)}
        />
      )}
      <Container>
        <List>
          {filtredJobs.map((job) => (
            <Offer key={job.id} {...job} handleTagClick={(name) => addTag(name)} />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};
