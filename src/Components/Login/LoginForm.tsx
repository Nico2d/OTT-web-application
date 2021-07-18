import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../Shared/StyledButton";
import { Input } from "../Shared/Input/Input";
import { useSignIn } from "../../API/Hooks/useSignIn";
import { WarningMessage } from "../Shared/Input/Input.styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { StyledForm } from "./LoginForm.styles";
import { LoginInputs } from "./LoginForm.types";
import { useUserContext } from "../../Context/UserContext";

export const LoginForm = () => {
  const [mutate] = useSignIn();
  const history = useHistory();
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    mutate.mutate(data);
  };

  useEffect(() => {
    if (mutate.isSuccess) {
      setUser(mutate.data!.data.User);
      history.push("/");
    }
  }, [history, mutate.data, mutate.isSuccess, setUser]);

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
