import React from 'react';

import { Tab } from 'components/commons/tab/tab';

import * as Styled from './information.styled';

type ListType = {
  company: string;
  contract: string;
  isFeatured: boolean;
  isNew: boolean;
  location: string;
  logo: string;
  position: string;
  postedAt: string;
};

export const Information = ({
  logo,
  company,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
}: ListType) => (
  <Styled.Wrapper>
    <Styled.Thumb src={logo} alt={company} loading="lazy" width={88} height={88} />
    <Styled.Content>
      <Styled.ContentTop>
        <p>{company}</p>
        <Styled.TabsList>
          {isNew && <Tab variant="primary" name="NEW!" />}
          {isFeatured && <Tab variant="secondary" name="FEATURED" />}
        </Styled.TabsList>
      </Styled.ContentTop>
      <Styled.Title>{position}</Styled.Title>
      <Styled.Information>
        <p>{postedAt}</p>
        <p>&bull;</p>
        <p>{contract}</p>
        <p>&bull;</p>
        <p>{location}</p>
      </Styled.Information>
    </Styled.Content>
  </Styled.Wrapper>
);
