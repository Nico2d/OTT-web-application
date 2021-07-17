import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../Shared/StyledButton";
import { Input } from "../Shared/Input/Input";
import { useSignIn } from "../../API/Hooks/useSignIn";
import { WarningMessage } from "../Shared/Input/Input.styles";

export type LoginInputs = {
  Username: string;
  Password: string;
};

export const LoginForm = () => {
  const [mutate] = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    mutate.mutate(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        type="text"
        register={{
          ...register("Username", {
            required: "Please enter your username.",
          }),
        }}
        error={errors.Username}
      />

      <Input
        label="Password"
        type="password"
        register={{
          ...register("Password", {
            required: "Please enter your password.",
          }),
        }}
        error={errors.Password}
      />

      {mutate.isError && (
        <WarningMessage position="center">
          {mutate.error?.response.data.Message}
        </WarningMessage>
      )}

      <StyledButton type="submit">Sign In</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;
