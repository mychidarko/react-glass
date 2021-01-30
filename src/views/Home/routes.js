import { Switch, Route } from "react-router-dom";

import HomePage from "./Home";
import { namedRoutes } from "./../../routes";

export default function Home() {
  return (
    <Switch>
      <Route exact path={namedRoutes.home.index} component={HomePage} />
    </Switch>
  );
}
