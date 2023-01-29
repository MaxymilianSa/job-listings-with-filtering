import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding-left: 8px;
  height: 32px;
  background: rgba(92, 165, 165, 0.1);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.cadetBlue};
  font-weight: 700;
  p {
    line-height: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 0 4px 4px 0;
  border: none;
  background: ${({ theme }) => theme.colors.cadetBlue};
  transition: background 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.outerSpace};
  }
`;
