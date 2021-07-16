import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { SplashScreen } from "./Pages/SpashScreen";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          {/* <Login /> */}
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

          <SplashScreen />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
