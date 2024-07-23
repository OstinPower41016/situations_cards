import useDisconnect from "./config/socket/hooks/useDisconnect";
import AppProviders from "./providers/AppProviders";
import MainRouter from "./routes/MainRouter";

function App() {
	useDisconnect();

	return (
		<AppProviders>
			<MainRouter />
		</AppProviders>
	);
}

export default App;
