import MainRouter from "./routes/MainRouter";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <MainRouter />
    </AppProviders>
  );
}

export default App;
