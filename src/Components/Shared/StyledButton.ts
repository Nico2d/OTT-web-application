import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.big};
  margin: auto;
  margin-top: 1rem;
  max-width: 275px;
  width: 100%;
`;
