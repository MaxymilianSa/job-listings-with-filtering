import styled from 'styled-components';
import { media } from 'theme/media';

export const Wrapper = styled.div<{ featured: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  border-radius: 5px;
  border-left: 5px solid
    ${({ featured, theme }) => (featured ? theme.colors.cadetBlue : theme.colors.white)};
  ${media.up('lg')} {
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 40px;
    align-items: center;
  }
`;
