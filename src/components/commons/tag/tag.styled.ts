import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 0 8px;
  height: 32px;
  line-height: 15px;
  background: rgba(92, 165, 165, 0.1);
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.cadetBlue};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.cadetBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
