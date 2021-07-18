import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSignIn } from "./API/Hooks/useSignIn";
import { Header } from "./Components/Header/Header";
import { LoginInputs } from "./Components/Login/LoginForm.types";
import { Routing } from "./Components/Routing/Routing";
import { UserContext } from "./Context/UserContext";
import { SplashScreen } from "./Components/SplashScreen/SplashScreen";
import { UserType } from "./API/Endpoints/signIn/signIn.types";

function App() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [mutate] = useSignIn();

  useEffect(() => {
    mutate.mutate({} as LoginInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mutate.isSuccess) {
      setUser(mutate.data!.data.User);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutate.isSuccess]);

  if (!mutate.isSuccess || mutate.isLoading) return <SplashScreen />;
  if (mutate.isError) return <p>Error.. Spróbuj później</p>;

  return (
    <Container>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routing />
      </UserContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 1rem;
`;
