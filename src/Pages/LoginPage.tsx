import styled from "styled-components";
import { LoginForm } from "../Components/Login/LoginForm";

export const LoginPage = () => {
  return (
    <Wrapper>
      <Heading>ZALOGUJ</Heading>
      <LoginForm />
    </Wrapper>
  );
};

const Heading = styled.h1`
  padding-bottom: 4rem;
  text-align: center;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    bottom: 2rem;
    left: 50%;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => `${theme.colors.white}4C`};
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div`
  max-width: 700px;
  border-radius: 1rem;
  padding: 2rem;
  margin: auto;
`;
