import React from 'react';

import { Tab } from 'components/commons/tab';
import { Tag } from 'components/commons/tag';

import {
  Wrapper,
  InformationWrapper,
  Thumb,
  Content,
  ContentTop,
  TabsList,
  Title,
  Information,
  List,
} from './offer.styled';

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
    <Wrapper featured={isFeatured}>
      <InformationWrapper>
        <Thumb src={logo} alt={company} loading="lazy" width={88} height={88} />
        <Content>
          <ContentTop>
            <p>{company}</p>
            <TabsList>
              {isNew && <Tab variant="primary" name="NEW!" />}
              {isFeatured && <Tab variant="secondary" name="FEATURED" />}
            </TabsList>
          </ContentTop>
          <Title>{position}</Title>
          <Information>
            <p>{postedAt}</p>
            <p>&bull;</p>
            <p>{contract}</p>
            <p>&bull;</p>
            <p>{location}</p>
          </Information>
        </Content>
      </InformationWrapper>
      <List>
        {tags.map((tag) => (
          <Tag key={tag} handleClick={() => handleTagClick(tag)} name={tag} />
        ))}
      </List>
    </Wrapper>
  );
};
