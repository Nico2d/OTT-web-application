import { useEffect } from "react";
import styled from "styled-components";
import { useSignIn } from "./API/Hooks/useSignIn";
import { Header } from "./Components/Header/Header";
import { LoginInputs } from "./Components/Login/LoginForm";
import { Routing } from "./Components/Routing/Routing";
import { SplashScreen } from "./Pages/SplashScreen";

function App() {
  const [mutate] = useSignIn();

  useEffect(() => {
    mutate.mutate({} as LoginInputs);
  }, []);

  if (!mutate.isSuccess || mutate.isLoading) return <SplashScreen />;
  if (mutate.isError) return <p>Error.. Spróbuj później</p>;
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
