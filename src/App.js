import Routes from "./routes";
import { ErrorBoundary } from "./utils";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
