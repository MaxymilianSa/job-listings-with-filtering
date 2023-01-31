import React from 'react';

import * as Styled from './container.styled';

export type ContainerType = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerType) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
