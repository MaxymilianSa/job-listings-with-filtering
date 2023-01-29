import React from 'react';

import { Wrapper } from './container.styled';

export type ContainerType = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerType) => <Wrapper>{children}</Wrapper>;
