import styled from "styled-components";
import logo from "../Assets/logo.png";

export const SplashScreen = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #282c34;
  height: 100vh;

  > img {
    margin: auto;
  }
`;
