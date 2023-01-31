import React from 'react';

import { List } from './list/list';
import { Information } from './information/information';
import * as Styled from './offer.styled';

export type OfferType = {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type OfferComponentType = {
  handleTagClick: (name: string) => void;
} & OfferType;

export const Offer = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleTagClick,
}: OfferComponentType) => {
  const tags = [role, level, ...tools, ...languages];

  return (
    <Styled.Wrapper featured={isFeatured}>
      <Information
        {...{ company, logo, isNew, isFeatured, position, postedAt, contract, location }}
      />
      <List tags={tags} handleTagClick={(name) => handleTagClick(name)} />
    </Styled.Wrapper>
  );
};
