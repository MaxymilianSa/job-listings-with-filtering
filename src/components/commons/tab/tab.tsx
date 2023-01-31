import React from 'react';

import * as Styled from './tab.styled';

export type TabType = {
  name: string;
  variant: TabVariants;
};

export type TabVariants = 'primary' | 'secondary';

export const Tab = ({ name, variant }: TabType) => (
  <Styled.Wrapper variant={variant}>{name}</Styled.Wrapper>
);
