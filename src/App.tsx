import styled from "styled-components";
import { useSignIn } from "./API/Hooks/useSignIn";
import { Header } from "./Components/Header/Header";
import { LoginInputs } from "./Components/Login/LoginForm";
import { Routing } from "./Components/Routing/Routing";
import { SplashScreen } from "./Pages/SplashScreen";

function App() {
  const [, isLoading, isError] = useSignIn({} as LoginInputs);

  if (isLoading) return <SplashScreen />;
  if (isError) return <p>Error.. Spróbuj później</p>;

  return (
    <Container>
      <Header />
      <Routing />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;
