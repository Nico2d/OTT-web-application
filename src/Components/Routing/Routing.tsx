import { Switch, Route } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { MainPage } from "../../Pages/MainPage";

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Switch>
        <Route path="/main" component={MainPage} />
      </Switch>
    </>
  );
};
