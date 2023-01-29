import React from 'react';

import { Wrapper } from './tab.styled';

export type TabType = {
  name: string;
  variant: TabVariants;
};

export type TabVariants = 'primary' | 'secondary';

export const Tab = ({ name, variant }: TabType) => <Wrapper variant={variant}>{name}</Wrapper>;
