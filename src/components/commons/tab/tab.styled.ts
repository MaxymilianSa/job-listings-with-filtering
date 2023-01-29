import styled from 'styled-components';

import { TabVariants } from './tab';

export const Wrapper = styled.div<{ variant: TabVariants }>`
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  font-size: 14px;
  line-height: 13px;
  background: rgba(92, 165, 165, 0.1);
  border-radius: 12px;
  background: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.cadetBlue : theme.colors.outerSpace};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;
