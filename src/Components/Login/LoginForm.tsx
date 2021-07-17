import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../Shared/StyledButton";
import { StyledInput } from "../Shared/StyledInput";
import { StyledLabel } from "../Shared/StyledLabel";

export type LoginInputs = {
  Username: string;
  Password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel htmlFor="name">Username</StyledLabel>
      <StyledInput
        placeholder="Username"
        type="text"
        {...register("Username", {
          required: "Please enter your first name.",
        })}
      />

      <StyledLabel htmlFor="name">Password</StyledLabel>
      <StyledInput
        placeholder="Password"
        type="password"
        {...register("Password", {
          required: "Please enter your first name.",
        })}
      />

      <StyledButton type="submit">Sign In</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;
