import router from "./routes";
import { ErrorBoundary } from "./utils";

import "./store";

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

const Routes = () => router.render();

export default App;
