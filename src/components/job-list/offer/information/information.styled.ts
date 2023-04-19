import styled from 'styled-components';
import { media } from 'theme/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${media.up('lg')} {
    max-width: 50%;
    flex-direction: row;
    gap: 24px;
  }
`;

export const Thumb = styled.img`
  width: 48px;
  height: 48px;
  margin-top: -48px;
  ${media.up('lg')} {
    width: 88px;
    height: 88px;
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silverSand};
  ${media.up('lg')} {
    padding: 0;
    border: none;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 33px;
  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.cadetBlue};
  }
  ${media.up('lg')} {
    gap: 15px;
    p {
      font-size: 18px;
    }
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.outerSpace};
  transition: color 0.4s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.cadetBlue};
  }
  ${media.up('lg')} {
    font-size: 22px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  p {
    color: ${({ theme }) => theme.colors.romanSilver};
    font-weight: 500;
    ${media.up('lg')} {
      font-size: 18px;
    }
  }
`;
