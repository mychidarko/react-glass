import Routes from "./routes";
import { ErrorBoundary } from "./utils";

import "./store";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
