import * as Styled from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({ label, type, register, error }: InputProps) => {
  return (
    <Styled.FieldWrapper>
      <Styled.Label htmlFor={label}>{label}</Styled.Label>
      <Styled.Input placeholder={label} type={type} {...register} />
      {error && <Styled.WarningMessage>{error.message}</Styled.WarningMessage>}
    </Styled.FieldWrapper>
  );
};
