import React from 'react';

import { Information } from './information/information';
import { List } from './list/list';
import * as Styled from './offer.styled';

export type OfferType = {
  company: string;
  contract: string;
  id: number;
  isFeatured: boolean;
  isNew: boolean;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
  role: string;
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
