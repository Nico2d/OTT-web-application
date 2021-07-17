import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { MainScreen } from "../../Pages/MainScreen";

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainScreen} />
      </Switch>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Switch>
        <Route path="/main" component={MainScreen} />
      </Switch>
    </>
  );
};
