import styled from "styled-components";
import { LoginForm } from "../Components/Login/LoginForm";

export const LoginPage = () => {
  return (
    <Wrapper>
      <h1>Zaloguj się</h1>

      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 300px;
  background: #040025;
  border-radius: 1rem;
  padding: 2rem;
`;
