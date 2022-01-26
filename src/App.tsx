import { QueryClient, QueryClientProvider } from "react-query";
import { Application } from "./pages";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Application />
    </QueryClientProvider>
  );
};
