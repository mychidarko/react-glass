import GlassRouter from "glass-router";
import { ErrorBoundary } from "./utils";

import "./store";
import "./routes";

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

const Routes = () => GlassRouter.render();

export default App;
