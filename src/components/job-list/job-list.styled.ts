import styled from 'styled-components';

import { media } from 'theme/media';

import BannerTop from 'assets/images/banner.png';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 120px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 156px;
  background: url(${BannerTop}) no-repeat;
  background-position: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 56px;
  ${media.up('lg')} {
    gap: 24px;
    margin-top: 40px;
  }
`;
