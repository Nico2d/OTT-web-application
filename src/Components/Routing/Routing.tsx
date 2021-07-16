import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { MainScreen } from "../../Pages/MainScreen";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainScreen} />
      </Switch>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Switch>
        <Route path="/main" component={MainScreen} />
      </Switch>
    </BrowserRouter>
  );
};
