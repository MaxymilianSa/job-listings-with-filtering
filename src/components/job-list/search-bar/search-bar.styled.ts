import styled from 'styled-components';
import { media } from 'theme/media';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: -36px;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 19px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  ${media.up('md')} {
    padding: 20px 40px;
  }
`;

export const List = styled.div`
  max-width: calc(100% - 80px);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  height: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.romanSilver};
  transition: color 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.cadetBlue};
    text-decoration: underline;
  }
`;
