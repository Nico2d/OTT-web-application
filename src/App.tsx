import styled from "styled-components";
import { useSignIn } from "./API/Hooks/useSignIn";
// import "./App.css";
import { LoginInputs } from "./Components/Login/LoginForm";
import { Routing } from "./Components/Routing/Routing";
import { SplashScreen } from "./Pages/SplashScreen";

function App() {
  const [User, isLoading, isError] = useSignIn({} as LoginInputs);

  console.log(User, isLoading, isError);

  if (isLoading) return <SplashScreen />;
  if (isError) return <p>Error.. Spróbuj później</p>;

  return (
    <Container className="App">
      <Routing />
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* background: blue; */
`;
