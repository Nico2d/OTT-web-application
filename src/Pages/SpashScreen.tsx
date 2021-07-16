import { isError } from "react-query";
import { useSignIn } from "../API/Hooks/useSignIn";
import { LoginInputs } from "../Components/Login/LoginForm";
import logo from "../Assets/logo.png";

export const SplashScreen = () => {
  const [User, isLoading, isError] = useSignIn({} as LoginInputs);

  console.log(User, isLoading, isError);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error.. Spróbuj później</p>;

  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  );
};
