import router from "./routes";
import { ErrorBoundary } from "./utils";

import "./store";

function App() {
  return (
    <ErrorBoundary>
      {router.exportRoutes()}
    </ErrorBoundary>
  );
}

export default App;
