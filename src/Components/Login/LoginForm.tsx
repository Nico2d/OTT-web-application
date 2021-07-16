import { SubmitHandler, useForm } from "react-hook-form";

export type LoginInputs = {
  Username: string;
  Password: string;
  PasswordRepeat: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Username"
        type="text"
        {...register("Username", {
          required: "Please enter your first name.",
        })}
      />
      <input
        placeholder="Password"
        type="password"
        {...register("Password", {
          required: "Please enter your first name.",
        })}
      />
      <input
        placeholder="Repeat password"
        type="PasswordRepeat"
        {...register("PasswordRepeat", {
          required: "Please enter your first name.",
        })}
      />

      <button />
    </form>
  );
};
