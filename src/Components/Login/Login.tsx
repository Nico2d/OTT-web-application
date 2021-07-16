import styled from "styled-components";
import { LoginForm } from "./LoginForm";

export const Login = () => {
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
