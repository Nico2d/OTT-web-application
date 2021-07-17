import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { StyledInput } from "./Input.style";
import { StyledLabel } from "./Label.style";
import { StyledWarningMessage } from "./WarningMessage.style";

type InputProps = {
  label: string;
  type: string;
  register: any;
  error?: FieldError;
};

export const Input = ({ label, type, register, error }: InputProps) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput placeholder={label} type={type} {...register} />
      {error && <StyledWarningMessage>{error.message}</StyledWarningMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 2rem;
`;
