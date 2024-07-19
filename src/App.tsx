import MainRouter from "./routes/MainRouter";
import AppProviders from "./providers/AppProviders";
import useDisconnect from "./config/socket/hooks/useDisconnect";

function App() {
  useDisconnect();

  return (
    <AppProviders>
      <MainRouter />
    </AppProviders>
  );
}

export default App;
