import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 2rem;
  padding: 1rem;
  border: 2px solid transparent;
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
