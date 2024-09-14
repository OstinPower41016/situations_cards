import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

queryClient.setDefaultOptions({
	queries: {
		staleTime: 1 * (60 * 1000), // 1 min
		refetchOnWindowFocus: false,
		refetchInterval: false,
		retry: 1,
	},
});

export default queryClient;
