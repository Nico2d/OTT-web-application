import styled from "styled-components";

export const Input = styled.input`
  border-radius: 2rem;
  padding: 1rem;
  border: 2px solid transparent;
  outline: none;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.label`
  margin: 5px;
`;

export const WarningMessage = styled.p<{ position?: string }>`
  color: ${({ theme }) => theme.colors.warningRed};
  margin: 10px ${({ position }) => (position === "center" ? "auto" : "5px")};
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
`;
