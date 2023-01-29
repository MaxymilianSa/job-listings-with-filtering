import styled from 'styled-components';
import { media } from 'theme/media';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;
  padding: 0 24px;
  margin: 0 auto;
  ${media.up('lg')} {
    padding: 0;
  }
`;
